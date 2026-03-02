const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
};

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'text/plain';
}

function handleRequest(req, res) {
    // 解析URL
    let url = req.url;
    if (url === '/') {
        url = '/index.html';
    }
    
    // 构建文件路径
    const filePath = path.join(__dirname, url);
    
    // 安全检查，防止目录遍历
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        res.end('<h1>403 Forbidden</h1>');
        return;
    }
    
    // 读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 Internal Server Error</h1>');
            }
        } else {
            const contentType = getContentType(filePath);
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// 创建服务器
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(`HTTP服务器已启动`);
    console.log(`========================================\n`);
    console.log(`请在浏览器中访问: http://localhost:${PORT}`);
    console.log(`\n可用页面:`);
    console.log(`- http://localhost:${PORT}/index.html (第一页 - 欢迎页)`);
    console.log(`- http://localhost:${PORT}/page2.html (第二页 - 个人信息)`);
    console.log(`- http://localhost:${PORT}/page3.html (第三页 - 身体数据)`);
    console.log(`- http://localhost:${PORT}/page4.html (第四页 - 孵化动画)`);
    console.log(`- http://localhost:${PORT}/page5.html (第五页 - 宠物主页)`);
    console.log(`- http://localhost:${PORT}/page6.html (第六页 - Find页面)`);
    console.log(`\n按 Ctrl+C 停止服务器`);
    console.log(`\n========================================\n`);
});

// 错误处理
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`错误：端口 ${PORT} 已被占用`);
        console.error('请关闭占用该端口的程序或修改端口号');
        process.exit(1);
    } else {
        console.error('服务器错误:', err);
    }
});

// 优雅退出
process.on('SIGINT', () => {
    console.log('\n\n正在关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});
