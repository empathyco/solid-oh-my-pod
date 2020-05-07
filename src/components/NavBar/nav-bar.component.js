import React, { useEffect, useState, Fragment } from "react";

import {
  Navigation,
  Toolbar,
  HamburgerButton,
  MobileNavigation,
} from "./children";
import { MyLink, MyLogo, NavSection,LogoBlock } from "./nav-bar.style";

const NavBar = (props) => {
  const { navigation, toolbar, sticky, t } = props;
  const [isOpenMobile, setOpenMobile] = useState(false);
  const [profileOptions, setProfileOption] = useState([]);
  const componentElement = React.createRef();

  const setNavFixed = () => {
    if (componentElement) {
      const navHeight = componentElement.clientHeight;
      const content = document.getElementsByClassName("contentApp");
      if (content.length > 0) {
        content[0].style["padding-top"] = `${navHeight}px`;
      }
    }
  };

  const onComponentResize = () => {
    setNavFixed();
    window.addEventListener("resize", () => {
      setNavFixed();

      if (window.innerWidth >= 1024 && isOpenMobile) {
        setOpenMobile(false);
      }
    });
  };

  const getUserProfileOptions = () => {
    const profile = toolbar
      ? toolbar.filter((bar) => bar.id !== "language")
      : [];
    setProfileOption(profile);
  };

  useEffect(() => {
    if (sticky) {
      onComponentResize();
    }

    getUserProfileOptions();
  }, [props, isOpenMobile]);

  const toggleMobileMenu = () => {
    setOpenMobile(!isOpenMobile);
  };

  return (
    <header
      role="navigation"
      className="header header__desktop fixed"
      ref={componentElement}
    >
      <NavSection className="header-wrap">
        <LogoBlock className="logo-block">
          <MyLink to="/welcome">
            <MyLogo>
              {" "}
              <img className="podlogo" src="/img/pod_logo.svg" alt="ohmypod!" />
            </MyLogo>
          </MyLink>
        </LogoBlock>

        {isOpenMobile ? (
          <MobileNavigation
            navigation={navigation}
            toolbar={toolbar}
            isOpenMobile={isOpenMobile}
            toggleMobileMenu={toggleMobileMenu}
            t={t}
          >
            <Navigation navigation={navigation} />
            <Toolbar toolbar={profileOptions} open customClass="profile-list" />
          </MobileNavigation>
        ) : (
          <Fragment>
            {navigation && <Navigation navigation={navigation} />}
            {toolbar && <Toolbar toolbar={toolbar} />}
          </Fragment>
        )}
        <HamburgerButton toggleMobileMenu={toggleMobileMenu} />
      </NavSection>
    </header>
  );
};

NavBar.defaultProps = {
  sticky: true,
};

export default NavBar;
