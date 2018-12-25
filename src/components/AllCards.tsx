import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactImageFallback from "react-image-fallback";
import ClassCard from "./ClassCard";
import CardStats from "./CardStats";

let AllCards = inject('FetchAllCards', 'SearchSingleCard')(observer((props) => {
    return (
        <Fragment>
            <FormControl>
                <InputLabel>{props.FetchAllCards.selectText}</InputLabel>
                <Select className="all-select" onChange={props.FetchAllCards.fetchData}>
                    <MenuItem value={'Druid'}>Druid</MenuItem>
                    <MenuItem value={"Hunter"}>Hunter</MenuItem>
                    <MenuItem value={"Mage"}>Mage</MenuItem>
                    <MenuItem value={'Paladin'}>Paladin</MenuItem>
                    <MenuItem value={"Priest"}>Priest</MenuItem>
                    <MenuItem value={"Rogue"}>Rogue</MenuItem>
                    <MenuItem value={"Shaman"}>Shaman</MenuItem>
                    <MenuItem value={'Warlock'}>Warlock</MenuItem>
                    <MenuItem value={"Warrior"}>Warrior</MenuItem>
                    <MenuItem value={"Dream"}>Dream</MenuItem>
                </Select>
            </FormControl>

            <div className="class-images-wrapper">
                {props.FetchAllCards.cardData.map(
                    (element: any, i: number) => {
                        return <ClassCard 
                        imgUrl={element.img} 
                        name={element.name} 
                        key={i} 
                        cardSeach={props.FetchAllCards.fetchSingleCard}
                        />
                    }
                )}  
            </div>

            <div className="card-info-wrapper">
                <div className="image-wrapper">
                    <img src={props.FetchAllCards.card} className="found-big-image" />
                </div>
                <div className="right-info-wrapper">
                    <div className="card-title">
                        {props.FetchAllCards.allCardData.name}
                    </div>
                    <CardStats text="Attack:" checkInfo={props.FetchAllCards.allCardData.attack} />
                    <CardStats text="Card Set:" checkInfo={props.FetchAllCards.allCardData.cardSet} />
                    <CardStats text="Cost:" checkInfo={props.FetchAllCards.allCardData.cost} />
                    <CardStats text="Health:" checkInfo={props.FetchAllCards.allCardData.health} />
                    <CardStats text="Rarity:" checkInfo={props.FetchAllCards.allCardData.rarity} />
                    <CardStats text="Type:" checkInfo={props.FetchAllCards.allCardData.type} />
                    <CardStats text="Player Class:" checkInfo={props.FetchAllCards.allCardData.playerClass} />
                    <CardStats text="Race:" checkInfo={props.FetchAllCards.allCardData.race} />
                    <CardStats text="Text:" checkInfo={props.FetchAllCards.allCardData.text} />
                    {
                        props.FetchAllCards.allCardData.imgGold
                            ? <button
                                color="primary"
                                onClick={props.FetchAllCards.changeGoldNormal}
                                data-gold-image={props.FetchAllCards.allCardData.imgGold}
                                data-normal-image={props.FetchAllCards.allCardData.img}
                                className="gold-normal-btn"
                            >
                                {props.FetchAllCards.changeCardGoldNormalText}
                            </button>
                            : null
                    }
                </div>
            </div>
        </Fragment>
    )
}));

export default AllCards;