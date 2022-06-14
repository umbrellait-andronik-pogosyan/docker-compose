const helloService = {
    sayHello: function(req, res) {
      console.log('hello gello gello')
        return res.send({ message: 'Hello API!' });
      }
}

module.exports = helloService;