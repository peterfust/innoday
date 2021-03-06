const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const util = require('util');
const path = require('path');
const multer = require('multer');
const opn = require('open');

const app = express();
// Access-Control-Allow-Origin: **any**
app.use(cors({
    origin: (origin, callback) => {
        return callback(null, true);
    }
}));

// static files
app.use(express.static(path.join(__dirname, './')));
app.use('/dist',express.static(path.join(__dirname, './dist')));

/*let httpsServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, './pem/Dynamsoft-WebTwain-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, './pem/Dynamsoft-WebTwain-cert.pem'))
}, app);*/

let port = process.env.PORT || 4443;
/*let url='https://127.0.0.1:'+port+'/HelloWorld.html';

setTimeout(function(){
  opn(url);
},500);

httpsServer.listen(httpsPort, () => console.log(`Page is available in ${url}`));*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

