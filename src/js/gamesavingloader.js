import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((result) => JSON.parse(result));
  }
}
