import { Request } from '../services';

export const getHeroes = () => {
  return Request('/v1/public/characters', { limit: 20 })
  .then(result => {
    if (result?.code === 200) {
      return result?.data
    }
  })
  .catch(error => console.log(error));
};

export const findHeroes = (searchString) => {
  return Request('/v1/public/characters', { nameStartsWith: searchString })
  .then(result => {
    if (result?.code === 200) {
      return result?.data
    }
  })
  .catch(error => console.log(error));
};