import R from 'ramda';
import WordModel from './../models/word';

export function getAllWords(request, reply) {
  return WordModel.findAll().then((words) => {
    reply({
      statusCode: 200,
      message: 'Palavras retornadas com sucesso',
      data: R.pluck('name', words)
    });
  });
}

export function storeWord({ params }, reply) {
  return WordModel.create({ name: params.word }).then(() => {
    reply({
      statusCode: 200,
      message: 'Palavra armazenada com sucesso',
      data: params.word
    });
  });
}

export function getWordsFiltered({ params }, reply) {
  reply({
    statusCode: 200,
    message: 'Palavras retornadas com sucesso',
    data: []
  });
}