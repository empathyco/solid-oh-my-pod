import React, { Component, Fragment } from "react";
import { ldflexService } from "@services";
import { data } from "@solid/query-ldflex";
import auth from "solid-auth-client";

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
  CardLink,
  SaveButtonm,
} from "./profileContent.style";

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fn: "",
      title: "",
      role: "",
      company: "",
      emails: [],
      phones: [],
    };
  }

  async componentDidMount() {
    this.originalFields = await this.getData();

    //TODO take needed data
    // Set updated to false
    this.originalFields.updated = false;
    this.setState(this.originalFields);
    console.log("original", this.originalFields);
  }

  async getData() {
    const data = await ldflexService.getProfileData();
    data.title = data.fn;

    console.log("data", data);

    return data;
  }

  goCard = () => {
    console.log("Se esta clicando");
  };
  getCardButton() {
    return (
      <CardLink href={this.state.url} style={{ textDecoration: "none" }}>
        {" "}
        <ButtonWithImage
          icon="id-card"
          label="Card"
          onClick={this.goCard}
        ></ButtonWithImage>
      </CardLink>
    );
  }
  /**
   * Return the name in different lines
   */
  getProfileName() {
    const name = this.state.title;
    let splitted = name.split(" ");

    return (
      <ProfileName>
        {splitted.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </ProfileName>
    );
  }

  handleSave = async (e) => {
    e.preventDefault();
    // TODO get values from updateValues
    await ldflexService.updateProfileData(this.state);
    this.setState({ title: this.state.fn });

    alert("updated");
  };

  handlePhoneChange = (e) => {
    const newValue = e.target.value;
    const key = e.target.id.split("phone")[1];
    let newState = this.state;
    newState.phones[key] = newValue;
    newState.updated = true;
    this.setState(newState);
  };
  handleEmailChange = (e) => {
    const newValue = e.target.value;
    const key = e.target.id.split("email")[1];
    let newState = this.state;
    newState.emails[key] = newValue;
    newState.updated = true;
    this.setState(newState);
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
    let { fn, role, company, emails, phones } = this.state;

    return (
      <Fragment>
        <Label>Name</Label>
        <InputText
          type="text"
          id="fn"
          value={fn}
          onChange={this.handleFieldChange}
        />
        <Label>Role</Label>
        <InputText
          type="text"
          id="role"
          value={role}
          onChange={this.handleFieldChange}
        />
        <Label>Company</Label>
        <InputText
          type="text"
          id="company"
          value={company}
          onChange={this.handleFieldChange}
        />
        <Label>Email address</Label>

        {emails.map((email, index) => (
          <InputText
            type="text"
            key={index}
            id={`email${index}`}
            value={email}
            onChange={this.handleEmailChange}
          />
        ))}

        <Label>Phone</Label>
        {phones.map((phone, index) => (
          <InputText
            type="text"
            key={index}
            id={`phone${index}`}
            value={phone}
            onChange={this.handlePhoneChange}
          />
        ))}

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
