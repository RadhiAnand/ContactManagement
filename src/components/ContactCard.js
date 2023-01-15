import React from "react";

const ContactCard = (props) => {
  console.log(props);
  return (
    <div>
      {/* <div>{contact.name}</div>
      <div>{contact.email}</div> */}
      <div>
        <i className="trash alternate outline icon"></i>
      </div>
    </div>
  );
};

export default ContactCard;
