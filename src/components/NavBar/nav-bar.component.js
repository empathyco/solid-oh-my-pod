import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Navigation,
  Toolbar,
  HamburgerButton,
  MobileNavigation
} from "./children";
import styled from "styled-components";

type Props = {
  t: Function,
  navigation: Array<Object>,
  toolbar: Array<React.Node>,
  sticky?: boolean
};

const NavBar = (props: Props) => {
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
    const profile = toolbar ? toolbar.filter(bar => bar.id !== "language") : [];
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

  const MyLogo = styled.p`
     
    max-width: 5em;
    font-weight: bold;
    text-decoration: none;
    background: white;
  `;

  const NavSection = styled.section`
     
 
 
  ul {
  
    li{
      a:hover,a:active, button:hover, button:active{
        background: rgb(196, 230, 237) !important;
      }
      .active{
      background: #f4f4f4 !important;
      }
    }
  
 }

  `;

  const MyLink = styled(Link)`
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 34px;
    background: white;
    &:link {
      text-decoration: none;
      color: #083575;
    }
    &:visited {
      text-decoration: none;
      color: #083575;
    }
    &:hover {
      text-decoration: none;
      color: #083575;
    }
    &:active {
      text-decoration: none;
      color: #083575;
    }
  `;

  return (
    <header
      role="navigation"
      className="header header__desktop fixed"
      ref={componentElement}
    >
      <NavSection className="header-wrap">
        <div className="logo-block">
          <MyLink to="/welcome">
            <MyLogo>          <img className="podlogo" src="/img/pod_logo.svg" alt="ohmypod!" />
            </MyLogo>
          </MyLink>
        </div>

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
  sticky: true
};

export default NavBar;
