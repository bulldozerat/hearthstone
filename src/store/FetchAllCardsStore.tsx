import { observable, action } from 'mobx';

export class FetchAllCards {
    @observable cardData = [];
    @observable selectText = "Search cards by race";
    @observable card: string = "";
    @observable allCardData: any = [];
    @observable changeCardGoldNormalText = "Change card to gold version";

    @action fetchData = async (e: any) => {
        const selectedClass: any = e.target.value;
        const response = await fetch(
            `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${selectedClass}`,
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

    @action hideCards = () => {
        this.cardData = [];
    }

    @action hideSingleCard = () => {
        this.card = "";
        this.allCardData = [];
    }

    @action fetchSingleCard = async (e: any) => {
        console.log(e.target.getAttribute('data-name'));
        let searchVal = e.target.getAttribute('data-name');

        const response = await fetch(
            `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${searchVal}`,
            {
                method: 'GET',
                headers: {
                    "X-Mashape-Key": "x5XAnJeTf8mshGq5tELFC0MD4Xy1p16rJeGjsnmCoXC0EKDNdf",
                    "Accept": "application/json"
                }
            }
        );

        const data = await response.json();
        this.card = data[0].img;
        this.allCardData = data[0];
        this.hideCards();
    }

    @action changeGoldNormal = (e: any) => {
        let isItNormalCard = this.card === e.target.getAttribute('data-normal-image');
        if (isItNormalCard) {
            this.card = e.target.getAttribute('data-gold-image');
            this.changeCardGoldNormalText = "Change card to normal version";
        } else {
            this.card = e.target.getAttribute('data-normal-image');
            this.changeCardGoldNormalText = "Change card to gold version";
        }
    }
}

export default new FetchAllCards();