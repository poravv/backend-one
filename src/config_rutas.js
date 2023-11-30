const express = require('express');
const rutas = express()

const welcome = require('./servicios/welcome')
const about = require('./servicios/about')
const theme = require('./servicios/theme')
const client_header = require('./servicios/client_header')
const service_header = require('./servicios/service_header')
const product_header = require('./servicios/product_header')
const footer_header = require('./servicios/footer_header')
const destacado_header = require('./servicios/destacado_header')
const client = require('./servicios/client')
const service = require('./servicios/service')
const product = require('./servicios/product')
const footer_label = require('./servicios/footer_label')
const footer_icon = require('./servicios/footer_icon')
const usuario = require('./servicios/usuario')
const icon = require('./servicios/icon');
const logo = require('./servicios/logo');

rutas.use('/onesrl/api/welcome',welcome);
rutas.use('/onesrl/api/about',about);
rutas.use('/onesrl/api/theme',theme);
rutas.use('/onesrl/api/client_header',client_header);
rutas.use('/onesrl/api/service_header',service_header);
rutas.use('/onesrl/api/product_header',product_header);
rutas.use('/onesrl/api/footer_header',footer_header);
rutas.use('/onesrl/api/destacado_header',destacado_header);
rutas.use('/onesrl/api/client',client);
rutas.use('/onesrl/api/service',service);
rutas.use('/onesrl/api/product',product);
rutas.use('/onesrl/api/footer_label',footer_label);
rutas.use('/onesrl/api/footer_icon',footer_icon);
rutas.use('/onesrl/api/usuario',usuario);
rutas.use('/onesrl/api/icon',icon);
rutas.use('/onesrl/api/logo',logo);

module.exports = rutas;