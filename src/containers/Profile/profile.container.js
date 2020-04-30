import React, { Fragment,useState, useEffect, } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShexFormBuilder } from '@inrupt/solid-react-components';
import { successToaster, errorToaster } from '@utils';
import {
  Header,
  ProfileContainer,
  ProfileWrapper,
  ShexForm,
  AutoSaveNotification,
  WebId,
  SectionProfile,
  Title,
  Submitdelete
} from './profile.style';
import { Image } from './components';
import {  Provider} from "@services";

const defaultProfilePhoto = '/img/icon/empty-profile.svg';

/**
 * We are using ldflex to fetch profile data from a solid pod.
 * ldflex libary is using json-LD for this reason you will see async calls
 * when we want to get a field value, why ? becuase they are expanded the data
 * this means the result will have a better format to read on Javascript.
 * for more information please go to: https://github.com/solid/query-ldflex
 */

const Profile = ({ webId }) => {
  const { t, i18n } = useTranslation();
  let state = {value: 'https://solid.community/account/delete'};



  const successCallback = () => {
    successToaster(t('profile.successCallback'), t('profile.successTitle'));
  };

  const errorCallback = e => {
    const code = e.code || e.status;
    const messageError = code ? `profile.errors.${code}` : 'profile.errors.default';
    if (code && code !== 200) {
      errorToaster(t(messageError), 'Error');
    }
  };


  function  handleChangeSelector(event) {
    state ={value: event.target.value};
  }
  function  handleSubmit(event) {
     window.open(state.value, "_blank")
    event.preventDefault();
  }

  return (
    <ProfileWrapper data-testid="profile-component">
      {webId && (
      <ProfileContainer>

          <main>
            <Header>

              <Image
                {...{
                  webId,
                  defaultProfilePhoto
                }}
              />
              <Title>
              <h2>Your PROFILE</h2>
              </Title>
            </Header>

            <SectionProfile >

          <Fragment  >


            <AutoSaveNotification className="banner-wrap--warning banner">
              <div className="banner-wrap__content">
                <i className="icon fa fa-exclamation-circle" />
                {t('profile.autosaveNotification')}
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
                  shexUri: 'https://shexshapes.inrupt.net/public/userprofile.shex',
                  theme: {
                    form: 'shexForm',
                    shexPanel: 'shexPanel',
                    shexRoot: 'shexRoot',
                    deleteButton: 'deleteButton ids-button-stroke ids-button-stroke--secondary',
                    inputContainer: 'inputContainer',
                    addButtonStyle: 'addButton ids-button-stroke ids-button-stroke--secondary'
                  },
                  languageTheme: {
                    language: i18n.language.substring(0, 2),
                    saveBtn: t('profile.saveBtn'),
                    resetBtn: t('profile.resetBtn'),
                    addButtonText: t('profile.addBtn'),
                    deleteButton: t('profile.deleteBtn'),
                    dropdownDefaultText: t('profile.dropdownDefaultText'),
                    warningResolution: t('profile.warningResolution'),
                    formValidate: {
                      minMxNumberInclusive: t('profile.minMxNumberInclusive'),
                      minMxNumberExclusive: t('profile.minMxNumberExclusive'),
                      minMaxString: t('profile.minMaxString'),
                      default: t('profile.defaultError')
                    }
                  },
                  successCallback,
                  errorCallback,
                  autoSaveMode: true
                }}
              />
             </ShexForm>
            <br></br>
            <Submitdelete> <div> <br></br><p>{t('profile.deletePod') }:</p> </div>
              <select

                value={ state.value}
                onChange={handleChangeSelector}
                onSubmit={ handleSubmit}>
                {Provider.getIdentityProviders().map((e, key) => {
                  return (
                    <option key={key} value={e.delete}>
                      {e.label}
                    </option>
                  );
                })}
              </select>

              <p> <button onClick={ handleSubmit}>{t('profile.select')}</button> </p></Submitdelete>

          </Fragment>

            </SectionProfile>

          </main>


      </ProfileContainer>
      )}
    </ProfileWrapper>

  );
};

export default Profile;
