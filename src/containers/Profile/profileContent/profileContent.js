import React, { Component, Fragment } from "react";
import { ldflexService } from "@services";
import { data } from "@solid/query-ldflex";
import auth from "solid-auth-client";
import { UserInformation } from "../../../components";
import { WithImage, ButtonWithImage } from "../../../components/Utils";
import {
  Content,
  InputText,
  FormSection,
  Label,
  ProfileName,
  TextArea,
  NotesButtons,
  TextAreaSection,
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
      note: "",
    };
  }

  async componentDidMount() {
    this.originalFields = await this.getData();
    // Set updated to false
    this.originalFields.updated = false;
    this.setState(this.originalFields);
    console.log("original", this.originalFields);
  }

  async getData() {
    const data = await ldflexService.getProfileData();
    data.title = data.fn;
    return data;
  }

  getCardButton() {
    const { t } = this.props;
    return (
      <CardLink href={`${this.state.url}me`} style={{ textDecoration: "none" }}>
        {" "}
        <ButtonWithImage
          icon="id-card"
          label={t("profile.card")}
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
  handleNoteChange = (e) => {
    const value = e.target.value;
    let newState = {};
    newState["note"] = value;
    this.setState(newState);
  };
  updateNote = async (e) => {
    const value = this.state.note;
    console.log(value);
    await ldflexService.saveNote(value);
    alert("Saved");
  };
  clearNote = async (e) => {
    const value = "";
    this.setState({ note: value });
    await ldflexService.saveNote(value);
    alert("Saved");
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
    const { t } = this.props;

    return (
      <Fragment>
        <Label>{t("profile.name")}</Label>
        <InputText
          type="text"
          id="fn"
          value={fn}
          onChange={this.handleFieldChange}
        />

        <Label>{t("profile.email")}</Label>
        {emails.map((email, index) => (
          <InputText
            type="text"
            key={index}
            id={`email${index}`}
            value={email}
            onChange={this.handleEmailChange}
          />
        ))}

        <Label>{t("profile.phone")}</Label>
        {phones.map((phone, index) => (
          <InputText
            type="text"
            key={index}
            id={`phone${index}`}
            value={phone}
            onChange={this.handlePhoneChange}
          />
        ))}
        <Label>{t("profile.role")}</Label>
        <InputText
          type="text"
          id="role"
          value={role}
          onChange={this.handleFieldChange}
        />
        <Label>{t("profile.company")}</Label>
        <InputText
          type="text"
          id="company"
          value={company}
          onChange={this.handleFieldChange}
        />

        <SaveButtonm
          type="button"
          disabled={!this.state.updated}
          onClick={this.handleSave}
        >
          {t("profile.save")}
        </SaveButtonm>
      </Fragment>
    );
  }

  getNotesSection() {
    const { note } = this.state;
    const { t } = this.props;
    return (
      <Fragment>
        <Label>{t("profile.notes")}</Label>
        <TextArea value={note} onChange={this.handleNoteChange}></TextArea>
        <NotesButtons>
          <button onClick={this.updateNote}>{t("profile.updateNote")}</button>
          <button onClick={this.clearNote} style={{ paddingRight: "0px" }}>
            {t("profile.clear")}
          </button>
        </NotesButtons>
      </Fragment>
    );
  }
  render() {
    const { title } = this.state; // Name of the person
    return (
      <Content>
        <UserInformation {...{ title }}>{this.getCardButton()}</UserInformation>
        <FormSection>{this.getFields()}</FormSection>
        <TextAreaSection>{this.getNotesSection()}</TextAreaSection>
      </Content>
    );
  }
}

export default ProfileContent;
