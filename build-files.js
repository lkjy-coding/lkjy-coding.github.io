#!/usr/bin/env node
/**
 * build-files.js
 * 递归扫描 checkout 下来的 AcWingPopular 独立仓库，生成 files.json
 * 输出到 AcWingsPopular/ 目录
 */

const fs = require('fs');
const path = require('path');

// ============ 配置区 ============
const SCAN_DIR = 'AcWingPopular-source';
const OUTPUT_FILE = path.join('AcWingsPopular', 'files.json');
// 排除这些文件名（不显示在列表中）
const EXCLUDE_FILES = new Set(['files.json', 'LICENSE', 'LICENSE.md', '.DS_Store']);

// ============ 文件描述字典 ============
const DESCRIPTIONS = {
  // 'Florr.md': { desc: '一款轻量级页游的记录', tag: '游戏' },
};

// ============ 文件类型分类 ============
function getFileType(ext) {
  const htmlExts = ['.html', '.htm'];
  const mdExts = ['.md', '.markdown'];
  const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico', '.bmp'];
  if (htmlExts.includes(ext)) return 'html';
  if (mdExts.includes(ext)) return 'md';
  if (imageExts.includes(ext)) return 'image';
  return 'other';
}

// ============ 递归扫描 ============
function scanDir(dir, baseDir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      results.push(...scanDir(fullPath, baseDir));
    } else if (entry.isFile()) {
      if (EXCLUDE_FILES.has(entry.name)) continue;

      const ext = path.extname(entry.name).toLowerCase();
      const descEntry = DESCRIPTIONS[relPath] || {};

      results.push({
        path: relPath.split(path.sep).join('/'),
        name: entry.name,
        title: entry.name.replace(/\.(md|markdown|html|htm)$/i, ''), // 去掉后缀用于显示
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
    console.error(`错误：找不到目录 ${SCAN_DIR}`);
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
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      const oldJson = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      if (JSON.stringify(oldJson.files) === JSON.stringify(output.files)) {
        console.log('files.json 无变化，跳过写入。');
        return;
      }
    } catch (e) { /* 继续 */ }
  }

  fs.writeFileSync(OUTPUT_FILE, jsonStr, 'utf-8');
  console.log(`已生成 ${OUTPUT_FILE}，共 ${files.length} 个文件。`);
}

main();
