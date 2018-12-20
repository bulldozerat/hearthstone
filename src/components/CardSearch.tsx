import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';

let CardSearch = inject("SearchSingleCard")(observer((props) => {
    return (
        <Fragment>
            <input type="text" placeholder="search card" onKeyUp={props.SearchSingleCard.fetchCard}/>
            <img src={props.SearchSingleCard.card} alt=""/>
        </Fragment>
    )
}));

export default CardSearch;