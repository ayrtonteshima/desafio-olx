import Joi from 'joi';
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
    handler: searchWordsHandler.getWordsFiltered,
    config: {
      validate: {
        params: {
          word: Joi.string()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/words/{word}/{threshold}',
    handler: searchWordsHandler.getWordsFiltered,
    config: {
      validate: {
        params: {
          word: Joi.string(),
          threshold: Joi.number().integer()
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/words/{word}',
    handler: searchWordsHandler.storeWord,
    config: {
      validate: {
        params: {
          word: Joi.string().required()
        }
      }
    }
  }
];
