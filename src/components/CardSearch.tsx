import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';

let CardSearch = inject("SearchSingleCard")(observer((props) => {
    const cardWrapper: any = {
        display: props.SearchSingleCard.display
    }
    return (
        <div style={cardWrapper}>
            <input type="text" placeholder="search card" onKeyUp={props.SearchSingleCard.fetchCard}/>
            <img src={props.SearchSingleCard.card} alt=""/>
        </div>
    )
}));

export default CardSearch;