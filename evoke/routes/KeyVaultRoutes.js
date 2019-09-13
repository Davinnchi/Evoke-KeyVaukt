const express = require('express');
const api = express.Router();
const KeyVaultController = require('../controllers/KeyVaultController');
const { celebrate, Joi } = require('celebrate');

api.get('/show-keys', celebrate({
    query: Joi.object({
        private_key: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar o son incorrectos' });
}, KeyVaultController.showKeys);

api.post('save-keys', celebrate({
    body: Joi.object().keys({
        blockchain_address: Joi.string().required(),
        privated_key: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar o son incorrectos' });
}, KeyVaultController.saveKeys);

module.exports = api;