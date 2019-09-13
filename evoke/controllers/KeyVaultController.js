const KeyVaultModel = require('../models/KeyVaultModel');

const saveKeys = (req, res) => {
    KeyVaultModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ status: false, message: 'Failed to save the keys'});
        } else {
            res.status(200).send({ status: true, message: 'Keys saved successfully' });
        }
    });
}

const showKeys = (req, res) => {
    KeyVaultModel.find({ blockchain_address: req.query.blockchain_address }, (err, data) => {
        if(err){
            res.status(500).send({ status: false, message: 'Failed to find the jeys' });
        } else {
            if(data){
                res.status(200).send({ status: true, data: data });
            } else {
                res.status(404).send({ status: false, message: 'Keys not founds' });
            }
        }
    });
}

module.exports = {
    saveKeys,
    showKeys
}