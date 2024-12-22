const mongoose = require('mongoose');

const fundingSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true },  // Wallet address associated with the funding
    finalFund: { type: Number, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

const PLANTS = mongoose.model('user', fundingSchema);

module.exports = PLANTS; 