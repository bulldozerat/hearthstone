import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactImageFallback from "react-image-fallback";

let AllCards = inject('FetchAllCards')(observer((props) => {
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
                    (e: any, i: number) => { 
                        return <ReactImageFallback
                            src={e.img}
                            fallbackImage="http://1x1px.me/FFFFFF-0.1.png"
                            data-name={e.name}
                            alt="" 
                            />
                    }
                )}
            </div>
        </Fragment>
    )
}));

export default AllCards;