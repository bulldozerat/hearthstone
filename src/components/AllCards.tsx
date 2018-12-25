import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactImageFallback from "react-image-fallback";
import ClassCard from "./ClassCard";

let AllCards = inject('FetchAllCards', 'SearchSingleCard', 'ClassSingleCard')(observer((props) => {
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
                <img src={props.ClassSingleCard.card} className="found-big-image" />
                {props.FetchAllCards.cardData.map(
                    (element: any, i: number) => {
                        return <ClassCard 
                        imgUrl={element.img} 
                        name={element.name} 
                        key={i} 
                        cardSeach={props.ClassSingleCard.fetchSingleCard}
                        />
                    }
                )}
                
            </div>
        </Fragment>
    )
}));

export default AllCards;