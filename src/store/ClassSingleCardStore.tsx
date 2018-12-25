import { observable, action } from 'mobx';

export class ClassSingleCard {
    @observable card: string = "";

    @action fetchSingleCard = async (e:any) => {
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
    }
}

export default new ClassSingleCard();