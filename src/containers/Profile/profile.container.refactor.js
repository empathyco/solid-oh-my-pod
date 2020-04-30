import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShexFormBuilder } from "@inrupt/solid-react-components";
import { successToaster, errorToaster } from "@utils";
import { useTranslation } from "react-i18next";
import Provider from "../../services/provider";
import auth from "solid-auth-client";
import {
  Header,
  ProfileContainer,
  ProfileWrapper,
  ShexForm,
  AutoSaveNotification,
  WebId,
  SectionProfile,
  Title,
  Submitdelete,
  RemovePodBtn
} from "./profile.style";
import { Image } from "./components";

const defaultProfilePhoto = "/img/icon/empty-profile.svg";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { webId: props.webId };
  }

  componentDidMount() {
    this.getDeleteUrl();
  }

  async getDeleteUrl() {
    let value = (await auth.currentSession()).idClaims.iss;

    const provider = Provider.getProviderByBaseURL(value);

    // If it is not in our providers, we dont know the delete url
    // so we do not show the delete pod option
    if (provider) this.setState({ deleteUrl: provider.delete });
  }

  sucessCallback = () => {
    successToaster(
      this.props.t("profile.successCallback"),
      this.props.t("profile.successTitle")
    );
  };

  errorCallback = (e) => {
    const code = e.code || e.status;
    const messageError = code
      ? `profile.errors.${code}`
      : "profile.errors.default";
    if (code && code !== 200) {
      errorToaster(this.props.t(messageError), "Error");
    }
  };

  goDeletURL = (event) => {
    window.open(this.state.deleteUrl, "_blank");
    event.preventDefault();
  };
  render() {
    const webId = this.props.webId;

    const { t, i18n } = this.props;
    // const errorCallback = this.errorCallback;
    // const successCallback = this.sucessCallback;

    console.log("webId", webId);
    return (
      <ProfileWrapper data-testid="profile-component">
        {webId && (
          <ProfileContainer>
            <main>
              <Header>
                <Image
                  {...{
                    webId,
                    defaultProfilePhoto,
                  }}
                />
                <Title>
                  <h2>Your PROFILE</h2>
                </Title>
              </Header>

              <SectionProfile>
                <Fragment>
                  <AutoSaveNotification className="banner-wrap--warning banner">
                    <div className="banner-wrap__content">
                      <i className="icon fa fa-exclamation-circle" />
                      {t("profile.autosaveNotification")}
                    </div>
                  </AutoSaveNotification>

                  <ShexForm>
                    <WebId>
                      <FontAwesomeIcon icon="id-card" />
                      <a href={webId} target="_blank" rel="noopener noreferrer">
                        {webId}
                      </a>
                    </WebId>

                    <ShexFormBuilder
                      {...{
                        documentUri: webId,
                        shexUri:
                          "https://shexshapes.inrupt.net/public/userprofile.shex",
                        theme: {
                          form: "shexForm",
                          shexPanel: "shexPanel",
                          shexRoot: "shexRoot",
                          deleteButton:
                            "deleteButton ids-button-stroke ids-button-stroke--secondary",
                          inputContainer: "inputContainer",
                          addButtonStyle:
                            "addButton ids-button-stroke ids-button-stroke--secondary",
                        },
                        languageTheme: {
                          language: i18n.language.substring(0, 2),
                          saveBtn: t("profile.saveBtn"),
                          resetBtn: t("profile.resetBtn"),
                          addButtonText: t("profile.addBtn"),
                          deleteButton: t("profile.deleteBtn"),
                          dropdownDefaultText: t("profile.dropdownDefaultText"),
                          warningResolution: t("profile.warningResolution"),
                          formValidate: {
                            minMxNumberInclusive: t(
                              "profile.minMxNumberInclusive"
                            ),
                            minMxNumberExclusive: t(
                              "profile.minMxNumberExclusive"
                            ),
                            minMaxString: t("profile.minMaxString"),
                            default: t("profile.defaultError"),
                          },
                        },
                        successCallback: this.sucessCallback,
                        errorCallback: this.errorCallback,
                        autoSaveMode: true,
                      }}
                    />
                  </ShexForm>
                  <br></br>

                  {this.state.deleteUrl ? (
                    <Submitdelete>
                      {" "}
                      <div>
                        {" "}
                        <br></br>
                        <p>{t("profile.deletePodMessage")}:</p>{" "}
                      </div>
                      <p>
                        {" "}
                        <RemovePodBtn className="deleteButton ids-button-stroke " onClick={this.goDeletURL}>
                          {t("profile.deletePod")}
                        </RemovePodBtn>{" "}
                      </p>
                    </Submitdelete>
                  ) : null}
                </Fragment>
              </SectionProfile>
            </main>
          </ProfileContainer>
        )}
      </ProfileWrapper>
    );
  }
}
