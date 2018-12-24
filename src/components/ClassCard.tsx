import React from 'react';

let ClassCard = (props: any) => {
    return <img
        src={props.imgUrl}
        data-name={props.name}
        alt=""
    />
}

export default ClassCard;