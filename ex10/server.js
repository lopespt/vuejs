let express = require('express')
let http= require('http')
let wsockets = require('ws')
let path = require('path')

let app = express();
let server = http.createServer(app);
let ws = new wsockets.Server({server})

ws.on('connection', (sck)=>{
    console.log("conectado");
    
    sck.on('message', (msg) => {
        ws.clients.forEach( (v,idx) =>{
            if(v != sck)    
                v.send(msg)
        }) 
    });

})


server.listen(8000)

app.get('/', (req, resp) =>{
    console.log(path.resolve(__dirname+'/index.html'));
    resp.sendFile(path.resolve(__dirname+'/index.html'))
});

app.use('/dist',express.static('./dist'))