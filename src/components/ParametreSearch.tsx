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

@inject('SearchByParametres')
@observer
class ParametreSeach extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    FormSearch = () => {
        this.props.SearchByParametres.fetchCardsByQuality(); 
    }

    HandleForm = (e: any) => {
        console.log(e.target.name, e.target.value);
    }

    render() {
        return (
            <Fragment>
                <div className="parametres-wrapper">
                    <FormControl>
                        <Error message={this.props.SearchByParametres.errorMessage} errorState={this.props.SearchByParametres.errorState}/>
                        <InputLabel>Select card quality*</InputLabel>
                        <Select className="all-select" onChange={this.props.SearchByParametres.getRariry}>
                            <MenuItem value='Free'>Free</MenuItem>
                            <MenuItem value="Common">Common</MenuItem>
                            <MenuItem value="Rare">Rare</MenuItem>
                            <MenuItem value='Epic'>Epic</MenuItem>
                            <MenuItem value="Legendary">Legendary</MenuItem>
                        </Select>
                        <TextField onChange={this.props.SearchByParametres.getParametre} label="Attack" name="attack" variant="outlined" />
                        <TextField onChange={this.props.SearchByParametres.getParametre} label="Cost" name="cost" variant="outlined" />
                        <TextField onChange={this.props.SearchByParametres.getParametre} label="Health" name="health" variant="outlined" />
                        <Button variant="contained" onClick={this.FormSearch.bind(1, 2, 3)}>Search</Button>
                    </FormControl>
                </div>
                <div className="class-images-wrapper">
                    {this.props.SearchByParametres.cardData.map(
                        (element: any, i: number) => {
                            return <ClassCard
                                imgUrl={element.img}
                                name={element.name}
                                key={i}
                                cardSeach={() => console.log("To be implemented")
                                }
                            />
                        }
                    )}
                </div>
            </Fragment>
        )
    }
}

export default ParametreSeach;