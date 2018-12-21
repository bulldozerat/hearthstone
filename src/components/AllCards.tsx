import React from 'react';
import { inject, observer } from 'mobx-react';


let AllCards = inject('FetchAllCards')(observer((props) => {
    return <h1>123</h1>;
    
}));

export default AllCards;