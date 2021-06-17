module.exports = [
    { method: 'GET', path: '/users', handler: (request, h) => { return 'users page';}},
    { method: 'GET', path: '/users/{id}', handler: (request, h) => {return 'user ' +
    request.params.id + ' page';}}
];
