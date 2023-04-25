const nationalInsurance = require('../services/national-insurance');

module.exports = (req, res) => {
  res.send({
    income: req.income,
    taxYear: req.taxYear,
    ni: nationalInsurance(req.taxYear)(req.income),
  });
};
