import { observable, action } from 'mobx';

export class SearchByParametres {
    @observable cardData = [];

    @action test = () => {
        console.log(123);
    }
}

export default new SearchByParametres();