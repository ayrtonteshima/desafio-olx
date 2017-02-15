import R from 'ramda';
import WordModel from './../models/word';
import levenshtein from './../utils/levenshtein';

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
  WordModel.findAll().then((words) => {
    const threshold = params.threshold || 3;

    const wordsList = R.pluck('name', words);

    const filterWordByDistance = R.compose(R.lte(R.__, threshold), levenshtein(params.word));

    const wordsFiltered = R.filter(filterWordByDistance, wordsList);

    reply({
      statusCode: 200,
      message: 'Palavras retornadas com sucesso',
      data: wordsFiltered
    });
  });
}