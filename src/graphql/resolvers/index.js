const ExchangeRate = require('../../models/ExchangeRate');

const resolvers = {
  Query: {
    async getExchangeRate(_, { src, tgt }) {
      if (src === tgt) {
        return {
          src,
          tgt,
          rate: 1, // 같은 통화에 대해서는 비율이 1
          date: new Date().toISOString().slice(0, 10) // 오늘 날짜 반환
        };
      }

      const latest = await ExchangeRate.findOne({ src, tgt }).sort({ date: -1 }).exec();
      return latest;
    }
  },

  Mutation: {
    async postExchangeRate(_, { info }) {
      const { src, tgt, rate, date } = info;
      const useDate = date || new Date().toISOString().slice(0, 10);

      const updated = await ExchangeRate.findOneAndUpdate(
        { src, tgt, date: useDate },
        { rate },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      return updated;
    },

    async deleteExchangeRate(_, { info }) {
      const { src, tgt, date } = info;
      const deleted = await ExchangeRate.findOneAndDelete({ src, tgt, date });
      return deleted;
    },
  },
};

module.exports = resolvers;