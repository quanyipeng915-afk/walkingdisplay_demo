# APP 预览指南

## 问题说明
无法直接预览页面是因为需要启动HTTP服务器。本指南提供两种解决方案。

## 解决方案

### 方法1：使用Python启动服务器（推荐）

如果你安装了Python 3：

1. 打开终端
2. 进入项目目录：
   ```bash
   cd /Users/cenyoushan/CodeBuddy/20260226223534
   ```

3. 运行以下命令启动服务器：
   ```bash
   python3 -m http.server 3000
   ```

4. 在浏览器中打开：
   - http://localhost:3000/page5.html （第五页）
   - http://localhost:3000/page6.html （第六页 - Find页面）

### 方法2：使用Node.js启动服务器

如果你安装了Node.js：

1. 打开终端
2. 进入项目目录：
   ```bash
   cd /Users/cenyoushan/CodeBuddy/20260226223534
   ```

3. 运行以下命令启动服务器：
   ```bash
   node server.js
   ```

4. 在浏览器中打开相应的页面

### 方法3：使用启动脚本（macOS/Linux）

1. 打开终端
2. 进入项目目录
3. 给脚本执行权限：
   ```bash
   chmod +x start-server.sh
   ```

4. 运行脚本：
   ```bash
   ./start-server.sh
   ```

## 可用页面

你的APP共有8个页面：

1. **index.html** - 第一页（欢迎页面）
2. **page2.html** - 第二页（个人信息填写）
3. **page3.html** - 第三页（身体数据填写）
4. **page4.html** - 第四页（孵化动画）
5. **page5.html** - 第五页（宠物主页）
6. **page6.html** - 第六页（Find页面 - 香港生物多样性探索）
7. **page7.html** - 第七页（School排名 - 学校排行榜，带礼花动画）
8. **page8.html** - 第八页（Friend List - 好友列表，带互动功能）

## 快速启动

在终端中直接运行以下命令：

```bash
cd /Users/cenyoushan/CodeBuddy/20260226223534 && python3 -m http.server 3000
```

然后在浏览器中访问：
- http://localhost:3000/page5.html
- http://localhost:3000/page6.html
- http://localhost:3000/page7.html
- http://localhost:3000/page8.html

## 停止服务器

在终端中按 `Ctrl + C` 即可停止服务器。

## 故障排除

如果端口3000被占用，可以更换端口：

```bash
# 使用端口3001
python3 -m http.server 3001

# 然后在浏览器中访问
# http://localhost:3001/page5.html
```

如果仍然无法预览，请检查：
1. 是否在正确的项目目录下
2. 是否所有文件都存在
3. 防火墙是否阻止了本地服务器
4. 浏览器是否支持JavaScript（本APP需要JS）
