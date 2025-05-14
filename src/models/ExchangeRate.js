const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  src: { type: String, required: true },
  tgt: { type: String, required: true },
  rate: { type: Number, required: true },
  date: { type: String, required: true }
});

exchangeRateSchema.index({ src: 1, tgt: 1, date: -1 });

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);
