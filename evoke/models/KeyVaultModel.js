const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyVault = Schema({
    blockchain_address: String,
    privated_key: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('key_vaults', KeyVault);