import React from "react";
import AddNewPageAction from "./AddNewPageAction";
import { addNote } from "../utils/network-data";

class AddNewPageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler() {
    addNote(this.state);
  }

  render() {
    return (
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Catatan Rahasia"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Sebenarnya saya adalah...."
          onInput={this.onBodyChangeEventHandler}
        />
        <AddNewPageAction AddNote={this.onSubmitEventHandler} />
      </div>
    );
  }
}

export default AddNewPageInput;
