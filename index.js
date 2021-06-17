'use strict';

var users = require('./config/routes/user');

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
	port: 3000,
	host: 'localhost'
    });

    server.route({
	method: 'GET',
	path: '/',
	handler: (request, h) => {
	    return 'Hello world!';
	}
    });

    server.route({
	method: 'GET',
	path: '/home',
	handler: (request,  h) => {
	    return h.redirect('/');
	}
    });

    server.route({
	method: 'GET',
	path: '/hello/{name}',
	handler: (request, h) => {
	    const name = request.params.name;
	    return 'Hello ' + name;
	}
    });
    await server.start();
    console.log('Server is running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
