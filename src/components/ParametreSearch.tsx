import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
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
                    <FormControl onChange={this.HandleForm}>
                        <InputLabel>Select card quality*</InputLabel>
                        <Select className="all-select">
                            <MenuItem value='Free'>Free</MenuItem>
                            <MenuItem value="Common">Common</MenuItem>
                            <MenuItem value="Rare">Rare</MenuItem>
                            <MenuItem value='Epic'>Epic</MenuItem>
                            <MenuItem value="Legendary">Legendary</MenuItem>
                        </Select>
                        <TextField label="Attack" name="attack" value="" margin="normal" variant="outlined" />
                        <TextField label="Cost" name="cost" value="" margin="normal" variant="outlined" />
                        <TextField label="Durability" name="durability" value="" margin="normal" variant="outlined" />
                        <TextField label="Health" name="health" value="" margin="normal" variant="outlined" />
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