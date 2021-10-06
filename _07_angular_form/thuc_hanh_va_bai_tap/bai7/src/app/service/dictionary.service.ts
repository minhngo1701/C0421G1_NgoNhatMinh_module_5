import { Injectable } from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Iword[] = [
    {
      word: 'dog',
      mean: 'chó'
    },
    {
      word: 'cat',
      mean: 'mèo'
    },
    {
      word: 'house',
      mean: 'nhà'
    },
    {
      word: 'chair',
      mean: 'ghế'
    },
  ]
  constructor() { }

  getAll() {
    return this.words;
  }
  findByWord(name: String | null): Iword | null {
    for (let item of this.words) {
      if (item.word == name) {
        return item;
      }
    }
      return null
  }
}
