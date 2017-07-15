import React, { Component } from 'react';

function ContactTile(props) {

    return (
        <div className="contactTile">
            <p>{ props.item.name }</p>
            <p>{ props.item.email }</p>
            <p>{ props.item.phone }</p>
            <p>{ props.item.address }</p>
        </div>
    )

}

export default ContactTile
