var ws = require('./WebServer'),
    server = ws.WebServer({ 'port': 9000, 'hostname': 'localhost' });

server.AddRoute("GET", /^\/$/, function (request, response, params) {
    response.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': 5 });
    response.write('Hello');
    response.end();
});

server.AddRoute("GET", /profile\/(.*)/, function (request, response, id) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("PROFILE ID: " + id);
    response.end();
});

server.Start();
