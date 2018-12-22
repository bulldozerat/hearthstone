import React, { Fragment } from 'react';

let CardStats = (props: any) => {
    return(
        <Fragment>
            {
                props.checkInfo ? 
                    <div className="card-info-row">{props.text} {props.checkInfo}</div>
                : null
            }
        </Fragment>
    );
}

export default CardStats;