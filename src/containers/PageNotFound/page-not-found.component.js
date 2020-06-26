/* eslint-disable constructor-super */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {Back,OhGirl,MyBoy, PodGirl,PageNotFoundWrapper,OhmyPodlogo, PageNotFoundContent } from './page-not-found.style';

/**
 * A React component page that is displayed when there's no valid route. Users can click the button
 * to get back to the home/welcome page.
 *
 *
 *
 <PageNotFoundWrapper>
 <div>
 <OhmyPodlogo>
 <OhGirl>
 <img src="/img/icon/404-girl-green-oh.svg" alt="Oh icon"></img>
 </OhGirl>
 <MyBoy>
 <img src="/img/icon/404-boy-my.svg" alt="pod icon"></img>

 </MyBoy>
 <PodGirl>
 <img src="/img/icon/404-girl-pod.svg" alt="pod icon"></img>

 </PodGirl>
 </OhmyPodlogo>
 </div>
 <div>
 <PageNotFoundContent>
 <h3>{t('notFound.title')}</h3>
 <p>{t('notFound.content')}</p>
 <p>
 <Link to="/" className="ids-link">
 {t('notFound.redirectButton')}
 </Link>
 </p>
 </PageNotFoundContent>
 </div>
 </PageNotFoundWrapper>
 */
const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <Back>
     <PageNotFoundWrapper>
       <div>
         <OhmyPodlogo>
           <OhGirl>
             <img src="/img/icon/404-girl-green-oh.svg" alt="Oh icon"></img>
           </OhGirl>
           <MyBoy>
             <img src="/img/icon/404-boy-my.svg" alt="pod icon"></img>

           </MyBoy>
           <PodGirl>
             <img src="/img/icon/404-girl-pod.svg" alt="pod icon"></img>

           </PodGirl>
         </OhmyPodlogo>
       </div>
       <div className="notcontent">
         <PageNotFoundContent>
           <h3>{t('notFound.title')}</h3>

           <p>
             <Link to="/" className="redirect">
               {t('notFound.redirectButton')}
             </Link>
           </p>
         </PageNotFoundContent>
       </div>
     </PageNotFoundWrapper>
    </Back>

  );
};

export default PageNotFound;
