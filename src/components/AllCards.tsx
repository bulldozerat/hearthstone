import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                    (e: any, i: number) => { return <img src={e.img} key={i}/> }
                )}
            </div>
        </Fragment>
    )
}));

export default AllCards;