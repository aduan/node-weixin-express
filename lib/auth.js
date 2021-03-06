var auth = require('node-weixin-auth');
var errors = require('web-errors').errors;

module.exports = {
  ack: function (token, req, res) {
    auth.ack(token, req, res, function (error, data) {
      if (!error) {
        res.send(data);
        return;
      }
      switch (data) {
        case 1:
          res.send(errors.INPUT_INVALID);
          break;
        case 2:
          res.send(errors.SIGNATURE_NOT_MATCH);
          break;
        default:
          res.send(errors.UNKNOWN_ERROR);
          break;
      }
    });
  }
}
