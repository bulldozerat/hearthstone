import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import Error from './Error';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClassCard from "./ClassCard";

interface MyProps {
    FetchAllCards?: any,
    SearchSingleCard?: any,
    SearchByParametres?: any
}

interface MyState { }

@inject('SearchByParametres', 'FetchAllCards')
@observer
class ParametreSeach extends React.Component<MyProps, MyState> {
    render() {
        return (
            <Fragment>
                <div className="parametres-wrapper" style={{ display: this.props.SearchByParametres.hideEverything}}>
                    <FormControl style={{ width: '100%' }}>
                        <Error message={this.props.SearchByParametres.errorMessage} errorState={this.props.SearchByParametres.errorState}/>
                        <InputLabel>Select card quality*</InputLabel>
                        <Select className="all-select" onChange={this.props.SearchByParametres.getRariry}>
                            <MenuItem value='Free'>Free</MenuItem>
                            <MenuItem value="Common">Common</MenuItem>
                            <MenuItem value="Rare">Rare</MenuItem>
                            <MenuItem value='Epic'>Epic</MenuItem>
                            <MenuItem value="Legendary">Legendary</MenuItem>
                        </Select>
                        <TextField onChange={this.props.SearchByParametres.getParametre} margin="normal" label="Attack" name="attack" variant="outlined" />
                        <TextField onChange={this.props.SearchByParametres.getParametre} margin="normal" label="Cost" name="cost" variant="outlined" />
                        <TextField onChange={this.props.SearchByParametres.getParametre} margin="normal" label="Health" name="health" variant="outlined" />
                        <Button variant="contained" onClick={this.props.SearchByParametres.fetchCardsByQuality} style={{marginTop: "20px"}}>Search</Button>
                    </FormControl>
                </div>
                <div className="class-images-wrapper" style={{ display: this.props.SearchByParametres.hideEverything }}>
                    {this.props.SearchByParametres.cardData.map(
                        (element: any, i: number) => {
                            return <ClassCard
                                imgUrl={element.img}
                                name={element.name}
                                key={i}
                                cardSeach={this.props.FetchAllCards.fetchSingleCard}
                            />
                        }
                    )}
                </div>
            </Fragment>
        )
    }
}

export default ParametreSeach;