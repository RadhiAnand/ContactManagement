import React from "react";
import "semantic-ui-css/semantic.min.css";

const AddContact = () => {
  return (
    <div className="ui ">
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <button name="add">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
