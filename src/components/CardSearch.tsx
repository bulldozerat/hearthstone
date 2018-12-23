import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import CardStats from "./CardStats";
import Button from '@material-ui/core/Button';

let CardSearch = inject("SearchSingleCard")(observer((props) => {
    const cardWrapper: any = {
        display: props.SearchSingleCard.display
    }
    return (
        <div style={cardWrapper}>
            <div className="card-search-wrapper">
                <input 
                    type="text" 
                    className="card-search" 
                    placeholder="search card" 
                    onKeyUp={props.SearchSingleCard.fetchCard}
                />
            </div>
            <div className="card-info-wrapper">
                <div className="image-wrapper">
                    <img src={props.SearchSingleCard.card} alt="" className="found-big-image"/>
                </div>
                <div className="right-info-wrapper">
                    <div className="card-title">
                        {props.SearchSingleCard.allCardsData.name}
                    </div>
                    <CardStats text="Attack:" checkInfo={props.SearchSingleCard.allCardsData.attack}/>
                    <CardStats text="Card Set:" checkInfo={props.SearchSingleCard.allCardsData.cardSet} />
                    <CardStats text="Cost:" checkInfo={props.SearchSingleCard.allCardsData.cost} />
                    <CardStats text="Health:" checkInfo={props.SearchSingleCard.allCardsData.health} />
                    <CardStats text="Rarity:" checkInfo={props.SearchSingleCard.allCardsData.rarity} />
                    <CardStats text="Type:" checkInfo={props.SearchSingleCard.allCardsData.type} />
                    <CardStats text="Player Class:" checkInfo={props.SearchSingleCard.allCardsData.playerClass} />
                    <CardStats text="Race:" checkInfo={props.SearchSingleCard.allCardsData.race} />
                    <CardStats text="Text:" checkInfo={props.SearchSingleCard.allCardsData.text} />
                    {
                        props.SearchSingleCard.allCardsData.imgGold 
                            ? <button 
                            color="primary" 
                            onClick={props.SearchSingleCard.changeGoldNormal}
                                data-gold-image={props.SearchSingleCard.allCardsData.imgGold}
                            data-normal-image={props.SearchSingleCard.allCardsData.img}
                            >
                                {props.SearchSingleCard.changeCardGoldNormalText}   
                            </button>
                        : null
                    }
                </div>
            </div>
            
        </div>
    )
}));

export default CardSearch;