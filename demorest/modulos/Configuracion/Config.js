//aqui va la configuracion para conectarse  a la base de datos...

const promise = require('bluebird');
const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);

const cn = 'postgres://postgres:wonderfull@localhost:5432/event_uc'
const db = pgp(cn);

module.exports =db;