const { json } = require('express');
const express = require('express');
const App = express();
const port = 3000;

// useage router
const Router = require('./src/routes/Router');
// global http request
App.use('/',Router)

// listening server
App.listen(port,()=>{
    console.log(`Runing on http://localhost:${port}`);
})