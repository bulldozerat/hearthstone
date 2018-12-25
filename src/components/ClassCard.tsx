import React from 'react';

let ClassCard = (props: any) => {
    return <img
        src={props.imgUrl}
        data-name={props.name}
        alt=""
        onClick={singleCardAjax}
    />
}

function singleCardAjax(e: any) {
    console.log(e.target.getAttribute('data-name'));
    
}

export default ClassCard;