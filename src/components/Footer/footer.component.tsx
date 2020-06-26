import FAQComponent from "@components/faq";
import { TextButton } from "@components/Utils";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { withTranslation } from "react-i18next";
import { PopUpFAQ } from "./footer.style";

const Footer = (props) => {
  const { t } = props;
  const githubIcon: any = { prefix: "fab", iconName: "github" };
  const githubIconDef = findIconDefinition(githubIcon);
  const [showFAQ, setShowFAQ] = useState(false);
  return (
    <Fragment>
      <footer className="solid-footer footer">
        <section className="solid-footer__content">
          <div className="solid-footer__content--copyright">
            <ul>
              <li>© empathy.co</li>
              <li>
                {t("footer.version")}
                {""} <span className="build-value">1.0.1</span>
              </li>
              <li>
                {" "}
                <TextButton
                  action={() => setShowFAQ(true)}
                  color="main"
                  label="FAQ"
                ></TextButton>
              </li>
            </ul>
          </div>

          <div className="solid-footer__content--links">
            <ul>
              <li>
                <a
                  href="https://github.com/empathyco/solid-pods-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="link-icon" icon={githubIconDef} />
                  Our repository on github
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
      {showFAQ && (
        <PopUpFAQ>
          <FAQComponent
            isLogin={false}
            about={false}
            closeButton={() => setShowFAQ(false)}
          ></FAQComponent>
        </PopUpFAQ>
      )}
    </Fragment>
  );
};

export default withTranslation()(Footer);
