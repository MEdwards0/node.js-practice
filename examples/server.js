// user http verbs(methods)
    // GET - browser default - retrieve
    // POST - HTML form option - Create
    // PUT - Update Record
    // PATCH - Update part of a record
    // DELETE - Delete

    // HEAD, TRACE, OPTIONS
    
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hello from Express</h1>');
    
})


// ReSTful applications (Representational State Transfer)

// const server = app.listen(8081, () => {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log(`Listening on http://${host}:${port}`);
// })

// OR vv

app.listen(8081);