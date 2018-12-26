import { observable, action } from 'mobx';

export class SearchByParametres {
    @observable cardData = [];
    @observable quality: string = "";
    @observable attack: string = "";
    @observable cost: string = "";
    @observable health: string = "";
    @observable errorState: boolean = false;
    @observable errorMessage: string = "";
    @observable hideEverything: string = "none";

    @action fetchCardsByQuality = async () => {
        if (this.quality == ""){
            this.errorState = true;
            this.errorMessage = "You need to select card quality";
            return;
        }

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

        if(data.error == 404) {
            this.errorState = true;
            this.errorMessage = "Not a single card found with these parametres. Try again.";
            return;
        }

        this.errorState = false;
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

    @action clearParametre = () => {
        this.hideEverything = "none";
    }

    @action showParametreSearch = () => {
        this.hideEverything = "block";
    }
}

export default new SearchByParametres();