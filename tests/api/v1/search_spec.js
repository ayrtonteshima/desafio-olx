var frisby = require('frisby');
var levenshtein = require('./../../../lib/utils/levenshtein');
var configs = require('./../../../lib/configs/connection');

var URL_BASE = 'http://' + configs.HOST + ':' + configs.PORT;

/****************************************************************/
/****************************************************************/

frisby.create('Testa formato da api quando feito requisição por método get')
  .get(URL_BASE + '/api/v1/words')
  .expectStatus(200)
  .expectJSONTypes({
    statusCode: Number,
    message: String,
    data: Array
  })
  .toss();


/****************************************************************/
/****************************************************************/

frisby.create('Testa se retorno das palavras estão com até 3 modificações do termo cel buscado')
  .get(URL_BASE + '/api/v1/words/cel')
  .expectStatus(200)
  .expectJSON({
    data: function(arr) {
      var words = arr.filter(word => levenshtein('cel', word) <= 3);
      expect(arr.length).toEqual(words.length);
    }
  })
  .toss();


/****************************************************************/
/****************************************************************/

frisby.create('Testa se retorno das palavras estão com até 2 modificações do termo phone buscado')
  .get(URL_BASE + '/api/v1/words/phone/2')
  .expectStatus(200)
  .expectJSON({
    data: function(arr) {
      var words = arr.filter(word => levenshtein('phone', word) <= 3);
      expect(arr.length).toEqual(words.length);
    }
  })
  .toss();


/****************************************************************/
/****************************************************************/

frisby.create('Testa se armazenou a a palavra')
  .post(URL_BASE + '/api/v1/words/phone')
  .expectStatus(200)
  .expectJSON({
    data: function(arr) {
      var words = arr.filter(word => levenshtein('phone', word) <= 3);
      expect(arr.length).toEqual(words.length);
    }
  })
  .toss();