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
    return (
      <VocabularyWrapper>
        <VocabularyCard>
          <VocabularyItem id="instace"> <h1>instance</h1>
          </VocabularyItem>
          <VocabularyItem id="sink"> <h1>sink</h1>
          </VocabularyItem>
          <VocabularyItem id="data"> <h1>Data </h1> </VocabularyItem>
          <VocabularyItem id="ip"> <h1>IP</h1>
          </VocabularyItem>
          <VocabularyItem id="endpoint"> <h1>endpoint</h1>
          </VocabularyItem>
          <VocabularyItem id="service"> <h1>service</h1>
          </VocabularyItem>
          <VocabularyItem id="productId"> <h1>productId</h1>
          </VocabularyItem>
          <VocabularyItem id="host_referrer"> <h1>host referrer</h1>
          </VocabularyItem>
          <VocabularyItem id="user_agent"> <h1> user agent</h1>
          </VocabularyItem>
          <VocabularyItem id="timestamp"> <h1>timestamp </h1>
          </VocabularyItem>
          <VocabularyItem id="q"> <h1> Query</h1>
          </VocabularyItem>
          <VocabularyItem id="totalHits"> <h1> total hits</h1>
          </VocabularyItem>
          <VocabularyItem id="session"> <h1>session </h1>
          </VocabularyItem>
          <VocabularyItem id="page"> <h1>page</h1>
          </VocabularyItem>
          <VocabularyItem id="user"> <h1>user</h1>
          </VocabularyItem>
          <VocabularyItem id="filters"> <h1>filters</h1>
          </VocabularyItem>
          <VocabularyItem id="catalog"> <h1>catalog</h1>
          </VocabularyItem>
          <VocabularyItem id="scope"> <h1>scope</h1>
          </VocabularyItem>
          <VocabularyItem id="lang"> <h1>lang</h1>
          </VocabularyItem>
          <VocabularyItem id="extra_fields"> <h1>extra fields</h1>
          </VocabularyItem>
          <VocabularyItem id="user_type"> <h1>user type</h1>
          </VocabularyItem>
          <VocabularyItem id="origin"> <h1>origin</h1>
          </VocabularyItem>
          <VocabularyItem id="position"> <h1>position</h1>
          </VocabularyItem>
          <VocabularyItem id="spellcheck"> <h1>spellcheck</h1>
          </VocabularyItem>
          <VocabularyItem id="filtered"> <h1>filtered</h1>
          </VocabularyItem>
          <VocabularyItem id="contextualize"> <h1>contextualize</h1>
          </VocabularyItem>
          <VocabularyItem id="contextualizeEnabled"> <h1>contextualize Enabled</h1>
          </VocabularyItem>
          <VocabularyItem id="contextualizeApplied"> <h1>contextualize Applied</h1>
          </VocabularyItem>
          <VocabularyItem id="revenue"> <h1>revenue</h1>
          </VocabularyItem>
          <VocabularyItem id="currency"> <h1>currency</h1>
          </VocabularyItem>
          <VocabularyItem id="transaction_id"> <h1>transaction id</h1>
          </VocabularyItem>
          <VocabularyItem id="categoryId"> <h1>category Id</h1>
          </VocabularyItem>
          <VocabularyItem id="title"> <h1>title</h1>
          </VocabularyItem>
          <VocabularyItem id="url"> <h1>url</h1>
          </VocabularyItem>
        </VocabularyCard>

        </VocabularyWrapper>
  );
  }
}
