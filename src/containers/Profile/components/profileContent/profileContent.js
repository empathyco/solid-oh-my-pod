import React, { Component, Fragment } from "react";

import { WithImage, ButtonWithImage } from "../../../../components/Utils";
import {
  Content,
  InputText,
  FormSection,
  Label,
  ProfileName,
  TextArea,
  NotesButtons,
  TextAreaSection,
  NameSection,
  GoCard,
  ClearButton,
  SaveButtonm,
} from "./profileContent.style";

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userDate = this.getData();
    //TODO take needed data
    this.originalFields = { name: "Javi" };
    // Set updated to false
    this.originalFields.updated = false;
    this.setState(this.originalFields);
    console.log("original", this.originalFields);
  }

  getData() {
    //TODO get pod data
  }

  goCard = () => {
    //TODO redirect to card
  };
  getCardButton() {
    return (
      <ButtonWithImage
        icon="id-card"
        label="Card"
        onClick={this.goCard}
      ></ButtonWithImage>
    );
  }

  getProfileName() {
    const name = "Javier García Bermúdez";
    let splitted = name.split(" ");

    return (
      <ProfileName>
        {splitted.map((word) => (
          <p>{word}</p>
        ))}
      </ProfileName>
    );
  }

  handleSave = (e) => {
    e.preventDefault();
    // TODO get values from updateValues
    console.log("state", this.state);

    console.log("save");
  };

  handleFieldChange = (e) => {
    const fieldName = e.target.id;
    const newValue = e.target.value;
    let newState = {};
    newState[fieldName] = newValue;
    newState.updated = true;
    this.setState(newState);
    console.log(newState);
  };

  getFields() {
    const { name, role, company, email, phone } = this.state;
    return (
      <Fragment>
        <Label>Name</Label>
        <InputText
          type="text"
          name=""
          id="name"
          value={name}
          onChange={this.handleFieldChange}
        />
        <Label>Role</Label>
        <InputText
          type="text"
          name=""
          id="role"
          value={role}
          onChange={this.handleFieldChange}
        />
        <Label>Company</Label>
        <InputText
          type="text"
          name=""
          id="company"
          value={company}
          onChange={this.handleFieldChange}
        />
        <Label>Email address</Label>
        <InputText
          type="text"
          name=""
          id="email"
          value={email}
          onChange={this.handleFieldChange}
        />
        <Label>Phone</Label>
        <InputText
          type="text"
          name=""
          id="phone"
          value={phone}
          onChange={this.handleFieldChange}
        />
        <SaveButtonm
          type="button"
          disabled={!this.state.updated}
          onClick={this.handleSave}
        >
          Save
        </SaveButtonm>
      </Fragment>
    );
  }
  render() {
    const { notes } = this.state;
    return (
      <Content>
        <NameSection>
          {this.getProfileName()}

          {this.getCardButton()}
        </NameSection>
        <FormSection>{this.getFields()}</FormSection>
        <TextAreaSection>
          <Label>General notes</Label>
          <TextArea></TextArea>
          <NotesButtons>
            <button>Update note</button>
            <button>Clear</button>
          </NotesButtons>
        </TextAreaSection>
      </Content>
    );
  }
}

export default ProfileContent;
