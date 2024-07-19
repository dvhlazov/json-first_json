import http from 'node:http';
import fs from 'node:fs/promises';


const config = {
    port: 8000
}

const server = http.createServer(async (req, res) => {
    const { url } = req;

    if (url === '/') {
        const file = await fs.readFile('./index.html', 'utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
        res.end(file); 
    } else if (url === '/style/main.css') {
        const file = await fs.readFile('./style/main.css', 'utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(file);
    } else if (url === '/client/main.js') {
        const file = await fs.readFile('./client/main.js', 'utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        res.end(file); 
    } else if (url === '/json-article') {
        const article = {
            title: 'My first article from the server',
            textContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab dignissimos, eum magnam at'
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(article));
        console.log('The article is succesfully loaded');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
        res.end('Помилка 404, не знайдено');
        console.log('Article is not loaded');
    }
});

server.listen(config.port);
console.log(`Server is running at http://localhost:${config.port}`);