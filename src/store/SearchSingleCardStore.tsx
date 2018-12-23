import { observable, action } from 'mobx';

export class SearchSingleCard {
    @observable card: string = "https://vignette.wikia.nocookie.net/hearthstone/images/2/2f/Frostmourne_card_back.png/revision/latest?cb=20170710182835";
    @observable display: string = "none";
    @observable allCardsData: any = [];
    @observable changeCardGoldNormalText = "Change card to gold version";

    @action fetchCard = async (e: any) => {
        let searchVal = e.target.value
            .toLowerCase()
            .split(/\s+/g)
            .filter((el: any) => { return el != ""})
            .map((el: any) => {return el[0].toUpperCase() + el.slice(1)})
            .join(" ");
        
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
        let isCardFound = !data.error;
        
        if (isCardFound && data[0]){
            this.card = data[0].img;
            this.allCardsData = data[0];
            console.log(data[0]);  
        }else{
            this.card = "https://vignette.wikia.nocookie.net/hearthstone/images/2/2f/Frostmourne_card_back.png/revision/latest?cb=20170710182835"
        }
    }

    @action show = () => {
        this.display = "block";
    }

    @action hide = () => {
        this.display = "none";
    }

    @action changeGoldNormal = (e: any) => {
        let isItNormalCard = this.card === e.target.getAttribute('data-normal-image');
        if(isItNormalCard) {
            this.card = e.target.getAttribute('data-gold-image');
            this.changeCardGoldNormalText = "Change card to normal version";
        }else{
            this.card = e.target.getAttribute('data-normal-image');
            this.changeCardGoldNormalText = "Change card to gold version";
        }
    }
}

export default new SearchSingleCard();