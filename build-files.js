#!/usr/bin/env node
/**
 * build-files.js
 * 递归扫描 checkout 下来的 AcWingPopular 独立仓库，生成 files.json
 * 输出到 AcWingsPopular/ 目录（多了个 s，避免和独立仓库 URL 冲突）
 * 无第三方依赖，仅使用 Node.js 内置模块
 */

const fs = require('fs');
const path = require('path');

// ============ 配置区 ============
const SCAN_DIR = 'AcWingPopular-source';          // 独立仓库 checkout 后的本地目录名
const OUTPUT_FILE = path.join('AcWingsPopular', 'files.json');  // 输出路径
const HOMEPAGE = 'index.html';                     // 排除主页
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules']);
const SKIP_FILES = new Set(['files.json', HOMEPAGE]);

// ============ 文件描述字典 ============
// 格式：'文件路径（相对独立仓库根）': { desc: '描述', tag: '标签' }
const DESCRIPTIONS = {
  // 'OJindex.html': { desc: 'OJ 运维模拟器 · 前作', tag: '模拟器' },
  // 'doubleGame/V1.html': { desc: '双人游戏 V1', tag: '双人' },
};

// ============ 文件类型分类 ============
function getFileType(ext) {
  const htmlExts = ['.html', '.htm'];
  const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico', '.bmp'];
  if (htmlExts.includes(ext)) return 'html';
  if (imageExts.includes(ext)) return 'image';
  return 'other';
}

// ============ 递归扫描 ============
function scanDir(dir, baseDir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      results.push(...scanDir(fullPath, baseDir));
    } else if (entry.isFile()) {
      if (SKIP_FILES.has(entry.name)) continue;
      const ext = path.extname(entry.name).toLowerCase();
      const descEntry = DESCRIPTIONS[relPath] || {};
      results.push({
        path: relPath.split(path.sep).join('/'),
        name: entry.name,
        ext: ext,
        type: getFileType(ext),
        desc: descEntry.desc || '',
        tag: descEntry.tag || ''
      });
    }
  }
  return results;
}

// ============ 主流程 ============
function main() {
  const rootDir = path.resolve(__dirname);
  const scanPath = path.join(rootDir, SCAN_DIR);

  if (!fs.existsSync(scanPath)) {
    console.error(`错误：找不到目录 ${SCAN_DIR}，请确认 workflow 已 checkout 独立仓库。`);
    process.exit(1);
  }

  const files = scanDir(scanPath, scanPath);
  files.sort((a, b) => a.path.localeCompare(b.path));

  const output = {
    generatedAt: new Date().toISOString(),
    total: files.length,
    files: files
  };

  const jsonStr = JSON.stringify(output, null, 2);
  const outDir = path.dirname(OUTPUT_FILE);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  if (fs.existsSync(OUTPUT_FILE)) {
    const oldContent = fs.readFileSync(OUTPUT_FILE, 'utf-8');
    try {
      const oldJson = JSON.parse(oldContent);
      if (JSON.stringify(oldJson.files) === JSON.stringify(output.files)) {
        console.log('files.json 无变化，跳过写入。');
        return;
      }
    } catch (e) { /* 解析失败则继续 */ }
  }

  fs.writeFileSync(OUTPUT_FILE, jsonStr, 'utf-8');
  console.log(`已生成 ${OUTPUT_FILE}，共 ${files.length} 个文件。`);
}

main();
