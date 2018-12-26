import { observable, action } from 'mobx';

export class SearchByParametres {
    @observable cardData = [];

    @action fetchCardsByQuality = async () => {
        let quality = `Legendary`;
        let attack = `attack=5&`;
        let health = `health=5&`;
        let cost = `cost=5&`;
        let durability = `cost=5&`;
        const response = await fetch(
            `https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/${quality}?${attack}${health}${cost}`,
            {
                method: 'GET',
                headers: {
                    "X-Mashape-Key": "x5XAnJeTf8mshGq5tELFC0MD4Xy1p16rJeGjsnmCoXC0EKDNdf",
                    "Accept": "application/json"
                },
            }
        );
        const data = await response.json();
        this.cardData = data;
    }
}

export default new SearchByParametres();