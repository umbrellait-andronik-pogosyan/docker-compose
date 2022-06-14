const helloService = {
    sayHello: function(req, res) {
        return res.send({ message: 'Hello API!' });
      }
}

module.exports = helloService;