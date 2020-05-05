import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShexFormBuilder } from "@inrupt/solid-react-components";
import { successToaster, errorToaster } from "@utils";
import Provider from "../../services/provider";
import auth from "solid-auth-client";

import {
  Header,
  ProfileContainer,
  ProfileWrapper,
  ShexForm,
  AutoSaveNotification,
  WebId,
  SectionProfile as ProfileFooter,
  Title,
  Submitdelete,
  RemovePodBtn,
  HeaderContainer,
} from "./profile.style";
import ProfileContent from "./profileContent";
import { ContainerHeader } from "../../components";

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

  getDeletePodButton() {
    const { t } = this.props;
    return (
      <Fragment>
        {/* Show delete btn if we know the delete url */}
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
              <RemovePodBtn
                className=" ids-button-stroke "
                onClick={this.goDeletURL}
              >
                {t("profile.deletePod")}
              </RemovePodBtn>{" "}
            </p>
          </Submitdelete>
        ) : null}
      </Fragment>
    );
  }
  render() {
    const webId = this.props.webId;

    const { t } = this.props;

    console.log("webId", webId);
    return (
      <ProfileWrapper data-testid="profile-component">
        {webId && (
          <ProfileContainer>
            <main>
              <ContainerHeader
                {...{
                  webId,
                  defaultProfilePhoto,
                  title: t("profile.yourProfile"),
                }}
              ></ContainerHeader>

              <ProfileContent></ProfileContent>
              <ProfileFooter>{this.getDeletePodButton()}</ProfileFooter>
            </main>
          </ProfileContainer>
        )}
      </ProfileWrapper>
    );
  }
}
