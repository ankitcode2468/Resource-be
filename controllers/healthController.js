const { getStatus } = require('../services/healthService');

const getHealth = (req, res) => {
  const payload = getStatus();
  res.json(payload);
};

module.exports = { getHealth };
