# OJ 运维模拟器

目前分为三个文件：`index.html`与`vertwo.html`以及`verthree.html`。第一个文件是前作，比较简洁；第二个是硬核版，更加复杂；第三个文件是 V 3.0，支持小游戏、自主出题。

## 已修复 BUG

### 前作`index.html`

- 打开后显示全乱码的问题

### 硬核版`vertwo.html`

- 当硬盘扩容后，下面的状态栏会显示最新容量，然而上面的硬盘占用显示的总容量没有更新的问题
- 把网校升级后仍提示“未研发”的问题
- 用户进行到新一周时，上方仪表盘仍然显示“第1周”的问题

### V 3.0`verthree.html`

- \-

---

## 体验地址

### 前作

<https://lkjy-coding.github.io/>

### 硬核版

<https://lkjy-coding.github.io/vertwo.html>

### V 3.0

<https://lkjy-coding.github.io/verthree.html>

---

## 参考

<https://www.luogu.com.cn/article/dcqcee1r>

Also try <https://chenzheaya.github.io/OnlineJudgeMaintainerSimulator/>!

---

# 工具箱

## 文件目录

- `tools_v1.html`

## 体验地址

### V1

<https://lkjy-coding.github.io/tools_v1.html>


---

# 双人游戏

## 文件目录

- `doubleGame`
  - V1
  - V2
  - V3
- `doubleGame-Football`
  - V1
  - V2
- `doubleGame-Pingpong`
  - V1
- `doubleGame-Basketball`
  - V1
  - V2

## 体验地址

格式：https://lkjy-coding.github.io/(对应的文件名)

---

# JCode

## 文件目录

- `JCode.html`

## 体验地址

格式见上文。

---

# 游戏硬件条件检查器

## 文件目录

- `index(2).html`
- `GameCheck2.0.html`
- `GameCheck3.0.html`

## 体验地址

格式见上文。

> 另外，为了测试方便，特此贴出：
> <https://lkjy-coding.github.io/GameCheck2.0.html>
> <https://lkjy-coding.github.io/GameCheck3.0.html>

## 更新日志

### V1 `index(2).html`

- \-

### V2 `GameCheck2.0.html`

- **后台**：可以**禁用/启用某个大类中的小类，直到单个系统**。且调整类型分为：无法查询、未发布、禁用、启用。
- **安装来源**：可以**让国内IP用户勾选“国外下载网站查询”然后暂时放开对GooglePlay、Tiktok、YouTube、Twitter（X）的限制**，但是如果查询超时（适用于所有网站，返回为`TIMED_OUT`及相关即可触发）就返回：“连接失败，连接超时。”
- **更多错误提示**：
 - `CONNECTION_RESET`及相关→“连接失败，连接被意外重置。”
 - `CONNECTION_ABORTED`及相关→“连接失败，连接意外中断。”
 - `CONNECTION_REFUSED`及相关→“连接失败，连接被拒绝。”
 - 其他→“连接失败，暂时不支持分析的原因。”

### V3 `GameCheck3.0.html`

- *基本***修复**了像下面这样的**离谱结论**的问题：

```text
🎮 游戏: 赛博朋克2077
📥 来源: AppStore, Steam
💻 系统: Windows / Windows正式版 / Windows 1.0
📱 设备: 电脑
🔧 硬件: 显卡6GB / 硬盘256GB / 内存16GB / CPU8核
✨ 特性: HTML5, TCP2.0, Sound, 256Color, Regedit
结论: ✅ 您的设备大致满足运行需求
```

- **后台**：支持一键创建版本大类、版本小类及单个版本的功能，可以“一环套一环”。
- **设计**：**AppStore与非macOS、tvOS、iOS系统不兼容**，选择即提示：“当前来源不支持当前系统，请重新选择！”并**自动取消选择**。
- **修复BUG**：“转接投影”无论是否勾选都可以选择超过两个选项。
