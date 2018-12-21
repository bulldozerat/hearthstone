import { observable, action } from 'mobx';

export class SearchSingleCard {
    @observable card: string = "https://www.logolynx.com/images/logolynx/25/25cb1ccb3913a0224fd610ce83bfc4c3.png";
    @observable display: string = "none";

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
            console.log(data[0].img);  
        }else{
            this.card = "https://www.logolynx.com/images/logolynx/25/25cb1ccb3913a0224fd610ce83bfc4c3.png"
        }
    }

    @action show = () => {
        this.display = "block";
    }

    @action hide = () => {
        this.display = "none";
        console.log(this.display);
        
    }
}

export default new SearchSingleCard();