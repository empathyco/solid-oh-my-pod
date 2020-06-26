import { Dropdown } from "@util-components";
import React, { Component } from "react";
import { toast } from "react-toastify";

class LanguageDropdown extends Component {
  constructor() {
    super();
    this.state = { language: this.getLanguage() };
  }

  getLanguage = () => localStorage.getItem("i18nextLng") || "en";

  onLanguageSelect = (nextLanguage) => {
    const { i18n } = this.props;
    toast.dismiss();
    i18n.changeLanguage(nextLanguage);
    this.setState({
      language: this.getLanguage(),
    });
  };

  render() {
    const { t } = this.props;
    const { language } = this.state;
    const profileOpts = [
      {
        label: t("navBar.languages.en"),
        onClick: () => this.onLanguageSelect("en"),

        customIcon: true,
      },
      {
        label: t("navBar.languages.es"),
        onClick: () => this.onLanguageSelect("es"),

        customIcon: true,
      },
    ];
    return (
      <Dropdown actions={profileOpts} hover>
        {language}
      </Dropdown>
    );
  }
}

export default LanguageDropdown;
