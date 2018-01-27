const http = require('http')

const PORT = [7000, 7500]

const handleRequest = (req, res) =>
	
	res.end('You are looking good today', + req.url)

const handleRequestbad = (req, res) =>
	
	res.end('You look horrible today', + req.url)

const server = http.createServer(handleRequest)
const web = http.createServer(handleRequestbad)

server.listen(PORT[0], () =>
	console.log('Server is listening on: ', + PORT[0]))

web.listen(PORT[1], () =>
	console.log('Server is listening on: ', + PORT[1]))