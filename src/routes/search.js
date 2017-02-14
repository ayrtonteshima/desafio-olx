export default [
  {
    method: 'GET',
    path: '/api/v1/words',
    handler: function(request, reply) {
      reply(['words']);
    }
  },
  {
    method: 'GET',
    path: '/api/v1/words/{word}',
    handler: function(request, reply) {
      reply([request.params.word]);
    }
  },
  {
    method: 'POST',
    path: '/api/v1/words/{word}',
    handler: function(request, reply) {
      reply([request.params.word]);
    }
  }
];
