import { observable, action } from 'mobx';

export class SearchByParametres {
    @observable cardData = [];
    @observable quality: string = "";
    @observable attack: string = "";
    @observable cost: string = "";
    @observable health: string = "";

    @action fetchCardsByQuality = async () => {
        this.cardData = [];
        const response = await fetch(
            `https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/${this.quality}?${this.attack}${this.health}${this.cost}`,
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

    @action getRariry = (e: any) => {
        this.quality = e.target.value;
    }

    @action getParametre = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case "attack":
                this.attack = `attack=${value}&`
                break;
            case "cost":
                this.cost = `cost=${value}&`
                break;
            case "health":
                this.health = `health=${value}&`
                break;
            default: ""
                break;
        }
    }
}

export default new SearchByParametres();