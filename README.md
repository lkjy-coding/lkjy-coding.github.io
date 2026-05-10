###                                                看见右上角这个有三道杠的图标了吗？这是目录↗
###                      Do you see the icon with three bars in the upper right corner? This is the table of contents ↗         

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
- `GameCheck4.0.html`
- `GameCheck5.0.html`

## 体验地址

格式见上文。

> 另外，为了测试方便，特此贴出：
> 
> <https://lkjy-coding.github.io/GameCheck2.0.html>
> 
> <https://lkjy-coding.github.io/GameCheck3.0.html>
>
> <https://lkjy-coding.github.io/GameCheck4.0.html>
>
> <https://lkjy-coding.github.io/GameCheck5.0.html>

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

### V4 `GameCheck4.0.html`

- **修复BUG**：紧急修复了**选项“转接投影”的设备限制选择数量错误**、**部分系统在选择界面及后台界面中缺失**的问题。

### V5 `GameCheck5.0.html`

#### 目前更新最多的一个版本。

- **新增机制**：除非选中“仅评估”（位于下载来源内），否则**必须选中至少一个下载来源才能进行评估**。
- **修复BUG**：“转接投影”模式下仍然可以选择三个选项、四个选项。（如依次选电脑、手机时，正常选择。再选Pad时，就取消位于第二位的手机，并选中位于第三位的Pad。）
- **设备类型新增**：手柄、游戏主机（如PlayStation）、平板电脑。
（注：这里的平板电脑**不同于Pad，是指即可以是平板又可以是电脑的那种设备**。）
- **下载来源新增**：“品牌应用商店”“应用下载网站”。
- **新增**：下载来源内选中“在线小游戏”时，弹出更多分支选项：

{

下载来源

- 在线小游戏
  - 4399
  - 4366
  - 7k7k
  - Poki
  - 17173
  - 其他

}

- **新增机制**：下载来源中选中“其他”时，**如果输入`None`则按照“仅评估”执行。**
- **新增**：后台已新增、确定信息修改、删除。（涵盖版本大类直到各个版本）
- **恢复**：在V4中没被加入的新增版本功能
- **新增**：网络测速。
- **新增**：硬盘剩余空间输入。
- **新增可选选项**：系统是否在初始化阶段。
- **新增**：

{

Windows

- Windows PE\*

朝鲜手机系统\*

}

**（注：Red Star OS的“无法查询”类系统及朝鲜手机系统在选择时提示“版本被严格保密，无从得知。”）**

- **新增**：输入法（位于硬件规格内，**可多选**）涵盖：

{

输入法

- 中文输入法
  - 中文：拼音
  - 中文：五笔
  - 中文：郑码
  - 中文：注音（港澳台）
  - 中文：手写
  - 中文：笔画
  - 九键
  - 二十六键
  - 其他
- 英文
- 法语
- 德语
- 朝鲜文
  - 全谚文
  - 全汉字
  - 汉谚混写
- 韩国文
  - 全谚文
  - 全汉字
  - 汉谚混写
- 藏文
- 蒙古文
- 维吾尔文
- 其他

}

（注：**“中文：手写”“中文：笔画”“语音”仅在选择设备类型为手机、Pad、平板电脑时生效**并提示：“此类输入法不适于游玩电子游戏。”，否则提示：“输入法与所选择设备冲突，请重新选择！”）
