import { ldflexService } from "@services";
import { LoaderService, ToasterService, UserInformation } from "components";
import { ButtonWithImage, TextButton } from "components/Utils";
import React, { Component, Fragment } from "react";
import {
  CardLink,
  Content,
  FormSection,
  InputText,
  Label,
  NotesButtons,
  ProfileName,
  TextArea,
  TextAreaSection,
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
    LoaderService.nowLoading();
    this.originalFields = await this.getData();
    // Set updated to false
    this.originalFields.updated = false;
    console.log(this.originalFields);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!");
    this.setState(this.originalFields);
    LoaderService.completeLoad();
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
          style={{ margin: "auto" }}
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

    ToasterService.addPopUpToast({
      buttonLabel: "ok",
      onButtonClick: () => {},
      title: this.props.t("profile.updated"),
      type: "success",
    });
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

    await ldflexService.saveNote(value);
    ToasterService.addPopUpToast({
      buttonLabel: "ok",
      onButtonClick: () => {},
      title: this.props.t("profile.noteUpdated"),
      type: "success",
    });
  };
  clearNote = async (e) => {
    const value = "";
    this.setState({ note: value });
    await ldflexService.saveNote(value);
    ToasterService.addPopUpToast({
      buttonLabel: "ok",
      onButtonClick: () => {},
      title: this.props.t("profile.noteCleared"),
      type: "success",
    });
  };

  handleFieldChange = (e) => {
    const fieldName = e.target.id;
    const newValue = e.target.value;
    let newState = {};
    newState[fieldName] = newValue;
    newState.updated = true;
    this.setState(newState);
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

        <TextButton
          style={{ marginLeft: "auto", marginRight: "-9px" }}
          disabled={!this.state.updated}
          label={t("profile.save")}
          action={this.handleSave}
        ></TextButton>
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
          <TextButton
            style={{ marginLeft: "auto" }}
            label={t("profile.updateNote")}
            action={this.updateNote}
          ></TextButton>
          <TextButton
            style={{ marginLeft: "auto", marginRight: "-9px" }}
            label={t("profile.clear")}
            action={this.clearNote}
          ></TextButton>

          {/* <button onClick={this.updateNote}>{t("profile.updateNote")}</button>
          <button onClick={this.clearNote} style={{ paddingRight: "0px" }}>
            {t("profile.clear")}
          </button> */}
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
