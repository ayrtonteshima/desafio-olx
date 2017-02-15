import Word from './../models/word';
import * as searchWordsHandler from './../handlers/search';

export default [
  {
    method: 'GET',
    path: '/api/v1/words',
    handler: searchWordsHandler.getAllWords
  },
  {
    method: 'GET',
    path: '/api/v1/words/{word}',
    handler: searchWordsHandler.getWordsFiltered
  },
  {
    method: 'GET',
    path: '/api/v1/words/{word}/{threshold}',
    handler: searchWordsHandler.getWordsFiltered
  },
  {
    method: 'POST',
    path: '/api/v1/words/{word}',
    handler: searchWordsHandler.storeWord
  }
];
