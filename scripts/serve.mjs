import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
http.createServer(async(req,res)=>{try{let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname); if(p.endsWith('/'))p+='index.html';const file=resolve(root,'.'+p);if(!file.startsWith(root+sep))throw Error();const body=await readFile(file);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.json':'application/json','.xml':'application/xml'})[extname(file)]||'text/plain');res.end(body);}catch{res.writeHead(404);res.end('Page not found');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
