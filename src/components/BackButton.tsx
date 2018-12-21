import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

let BackButton = (props: any) => {
    return <Button variant="contained" color={props.color} onClick={props.hide}>{props.val}</Button>
}

export default BackButton;