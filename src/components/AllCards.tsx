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

            <div>
                {props.FetchAllCards.cardData.map(
                    (e: any, i: number) => { 
                        return <ReactImageFallback
                            src={e.img}
                            fallbackImage="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/4/4b/Card_back-Power_Core.png/200px-Card_back-Power_Core.png?version=0c2427a5c46888f79f21bd35546ac12b"
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