import { observable, action } from 'mobx';

export class FetchAllCards {
    @observable cardData = [];
    @observable selectText = "Search cards by race";

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
        console.log(data);
        
    }
}

export default new FetchAllCards();