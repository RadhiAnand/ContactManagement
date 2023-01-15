import React from "react";
import ContactCard from "./ContactCard";
import "semantic-ui-css/semantic.min.css";

const ContactList = (props) => {
  const renderContactsList = () => {
    return <ContactCard contacts={props.contact} />;
  };
  return <div> {renderContactsList} </div>;
};

export default ContactList;
