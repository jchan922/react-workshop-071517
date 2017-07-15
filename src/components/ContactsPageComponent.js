import React, { Component } from 'react';
import contacts from './../contacts.js';
import ContactTile from './Contact.js'

class ContactsPageComponent extends Component {

    state = {
        contacts: contacts
    }

    handleSearchClick = (e) => {
        e.preventDefault()

        if ( document.getElementById("searchText").value == "" ) {
            this.setState({
                contacts: contacts
            });
        } else {
            this.filterContactsBySearch(document.getElementById("searchText").value);
        };

    }

    resetSearchClick = (e) => {
        e.preventDefault()

        this.setState({
            contacts: contacts
        });
        document.getElementById("searchText").value = ""
    }

    filterContactsBySearch = (search) => {
        let contactsToFilter = this.state.contacts;
        let filteredContacts = contactsToFilter.filter(function(contact){
                                    if ( contact.name.toLowerCase().includes(search) ) {
                                        return contact
                                    }
                                });
        this.setState({
            contacts: filteredContacts
        });

    }
    render() {
        return (
            <div className="contactsList">
                <h1>Super Awesome Contact List</h1>
                <input id="searchText" type="text" placeholder="Search..."/>
                <button onClick={ this.handleSearchClick }>Search</button>
                <button onClick={ this.resetSearchClick }>Reset</button>
                { this.state.contacts.map(contact =>
                    <ContactTile key={ contact.id }
                                 item={ contact } />
                ) }
            </div>
        )
    }

}

export default ContactsPageComponent
