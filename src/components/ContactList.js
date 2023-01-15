import React from "react";
import ContactCard from "./ContactCard";
import "semantic-ui-css/semantic.min.css";

const ContactList = (props) => {
  const renderContactsList = props.contacts.map((contact) => {
    return <ContactCard contacts={contact} />;
  });
  return <div> {renderContactsList} </div>;
};

export default ContactList;
