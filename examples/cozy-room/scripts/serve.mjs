import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'artifacts/publish/wwwroot');
const port = Number(process.env.PORT || 5188);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.wasm': 'application/wasm', '.dat': 'application/octet-stream', '.dll': 'application/octet-stream' };
const server = http.createServer(async (req, res) => {
    try {
        const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        let file = path.resolve(root, `.${pathname}`);
        if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
        try { if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html'); }
        catch {
            if (path.extname(file)) { res.writeHead(404).end('Not found'); return; }
            file = path.join(root, 'index.html');
        }
        const contents = await readFile(file);
        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
        res.end(contents);
    } catch { res.writeHead(404).end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Cozy Room served at http://127.0.0.1:${port}`));
server.on('error', error => { console.error(error.message); process.exit(1); });
process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));
