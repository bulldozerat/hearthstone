import React from "react";
import Snackbar from '@material-ui/core/Snackbar';

let Error: any = (props: any) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.errorState}
            autoHideDuration={2000}
            message={props.message}
        />
    )
}
export default Error;