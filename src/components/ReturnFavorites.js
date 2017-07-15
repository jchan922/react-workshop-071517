import React, { Component } from 'react';

function returnFavorites(contacts) {
    return contacts.filter(function(contact){ return contact.tags == "favorites"})
}

export default contacts;
