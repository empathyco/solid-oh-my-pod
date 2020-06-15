import React from "react";
import {
  VocabularyCard,
  VocabularyWrapper,
  VocabularyItem}
  from "./vocabulary.style"

export default class VocabularyComponent extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  render(){
    const { t } = this.props;

    return (
      <VocabularyWrapper>
        <VocabularyCard>
          <VocabularyItem id="instace"> <h1>instance</h1>
            <p>{t('v1.instance')}</p>
          </VocabularyItem>
          <VocabularyItem id="sink"> <h1>sink</h1>
            <p>{t('v1.sink')}</p>
          </VocabularyItem>
          <VocabularyItem id="data"> <h1>Data </h1>
            <p>{t('v1.data')}</p>
          </VocabularyItem>
          <VocabularyItem id="ip"> <h1>IP</h1>
            <p>{t('v1.ip')}</p>
          </VocabularyItem>
          <VocabularyItem id="endpoint"> <h1>endpoint</h1>
            <p>{t('v1.endpoint')}</p>
          </VocabularyItem>
          <VocabularyItem id="service"> <h1>service</h1>
            <p>{t('v1.service')}</p>
          </VocabularyItem>
          <VocabularyItem id="productId"> <h1>productId</h1>
            <p>{t('v1.productid')}</p>
          </VocabularyItem>
          <VocabularyItem id="host_referrer"> <h1>host referrer</h1>
            <p>{t('v1.host')}</p>
          </VocabularyItem>
          <VocabularyItem id="user_agent"> <h1> user agent</h1>
            <p>{t('v1.usera')}</p>

          </VocabularyItem>
          <VocabularyItem id="timestamp"> <h1>timestamp </h1>
            <p>{t('v1.timestamp')}</p>
          </VocabularyItem>
          <VocabularyItem id="q"> <h1> Query</h1>
            <p>{t('v1.q')}</p>
          </VocabularyItem>
          <VocabularyItem id="totalHits"> <h1> total hits</h1>
            <p>{t('v1.totalhits')}</p>
          </VocabularyItem>
          <VocabularyItem id="session"> <h1>session </h1>
            <p>{t('v1.session')}</p>
          </VocabularyItem>
          <VocabularyItem id="page"> <h1>page</h1>
            <p>{t('v1.page')}</p>
          </VocabularyItem>
          <VocabularyItem id="user"> <h1>user</h1>
            <p>{t('v1.user')}</p>
          </VocabularyItem>
          <VocabularyItem id="filters"> <h1>filters</h1>
            <p>{t('v1.filters')}</p>
          </VocabularyItem>
          <VocabularyItem id="catalog"> <h1>catalog</h1>
            <p>{t('v1.catalog')}</p>
          </VocabularyItem>
          <VocabularyItem id="scope"> <h1>scope</h1>
            <p>{t('v1.scope')}</p>
          </VocabularyItem>
          <VocabularyItem id="lang"> <h1>lang</h1>
            <p>{t('v1.lang')}</p>
          </VocabularyItem>
          <VocabularyItem id="extra_fields"> <h1>extra fields</h1>
            <p>{t('v1.extraf')}</p>
          </VocabularyItem>
          <VocabularyItem id="user_type"> <h1>user type</h1>
            <p>{t('v1.usert')}</p>
          </VocabularyItem>
          <VocabularyItem id="origin"> <h1>origin</h1>
            <p>{t('v1.origin.title')}</p>

            <ul>
               <li>{t('v1.origin.default')}</li>
              <li>{t('v1.origin.variables')}</li>
              <li>{t('v1.origin.linked')}</li>
              <li>{t('v1.origin.partial')}</li>
              <li>{t('v1.origin.next')}</li>
              <li>{t('v1.origin.related')}</li>
              <li>{t('v1.origin.history')}</li>
              <li>{t('v1.origin.spellcheck')}</li>

            </ul>
          </VocabularyItem>
          <VocabularyItem id="position"> <h1>position</h1>
            <p>{t('v1.position')}</p>
          </VocabularyItem>
          <VocabularyItem id="spellcheck"> <h1>spellcheck</h1>
            <p>{t('v1.spellcheck')}</p>
          </VocabularyItem>
          <VocabularyItem id="filtered"> <h1>filtered</h1>
            <p>{t('v1.filtered')}</p>
          </VocabularyItem>
          <VocabularyItem id="contextualize"> <h1>contextualize</h1>
            <p>{t('v1.con')}</p>
          </VocabularyItem>
          <VocabularyItem id="contextualizeEnabled"> <h1>contextualize Enabled</h1>
            <p>{t('v1.cone')}</p>

          </VocabularyItem>
          <VocabularyItem id="contextualizeApplied"> <h1>contextualize Applied</h1>
            <p>{t('v1.cona')}</p>

          </VocabularyItem>
          <VocabularyItem id="revenue"> <h1>revenue</h1>
            <p>{t('v1.revenue')}</p>
          </VocabularyItem>
          <VocabularyItem id="currency"> <h1>currency</h1>
            <p>{t('v1.currency')}</p>
          </VocabularyItem>
          <VocabularyItem id="transaction_id"> <h1>transaction id</h1>
            <p>{t('v1.trans')}</p>
          </VocabularyItem>
          <VocabularyItem id="categoryId"> <h1>category Id</h1>
            <p>{t('v1.catid')}</p>
          </VocabularyItem>
          <VocabularyItem id="title"> <h1>title</h1>
            <p>{t('v1.title')}</p>
          </VocabularyItem>
          <VocabularyItem id="url"> <h1>url</h1>
            <p>{t('v1.url')}</p>
          </VocabularyItem>
          <VocabularyItem id="topclicked"> <h1>topclicked</h1>
            <p>{t('v1.topclicked')}</p>
          </VocabularyItem>
          <VocabularyItem id="synonymize"> <h1>synonymize</h1>
            <p>{t('v1.synonymize')}</p>
          </VocabularyItem>
          <VocabularyItem id="boosted"> <h1>boosted</h1>
            <p>{t('v1.boosted')}</p>
          </VocabularyItem>
          <VocabularyItem id="boostedId"> <h1>boostedId</h1>
            <p>{t('v1.boostedid')}</p>
          </VocabularyItem>
        </VocabularyCard>

        </VocabularyWrapper>
  );
  }
}
