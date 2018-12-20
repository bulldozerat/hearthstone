import { observable, action } from 'mobx';
import { any } from 'prop-types';
import { async } from 'q';
import { log } from 'util';

export class CounterStore {
  @observable cardData = [];
  @observable firstImg = '';

  @action fetchData = async () => {
    //const response = await fetch("http://api.catalog.geberit.com/v1/en-GB/products/PRO_224638");
    const response = await fetch("https://omgvamp-hearthstone-v1.p.mashape.com/cards/races/Beast", {
      method: 'GET',
      headers: {
        "X-Mashape-Key": "x5XAnJeTf8mshGq5tELFC0MD4Xy1p16rJeGjsnmCoXC0EKDNdf",
        "Accept": "application/json"
      },
  });
    const data = await response.json(); 
    this.cardData = data;
    this.firstImg = data[0].img;
  }

}

export default new CounterStore();