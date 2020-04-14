import React from "react";
import { fileExplorerService } from "@services";
import * as data from 'json/mockup.json';
import CenterContainer from "../../components/Utils/CenterContainer";
import {ShopWrapper}  from "./shop.style";


export default class ShopComponent extends React.Component {

  constructor()
  {
      super();
      this.state = {}
  }
   componentDidMount() {
     const script = document.createElement("script");
     script.async = true;
     script.src = "https://preassets.empathybroker.com/empathyx/gocco/app.js";
     let script2 = document.createElement("script");
     script2.textContent  = `
 
     function writeinPOD(data)
      {
       let contentjson = JSON.stringify(data);
      console.log('calling function');
      
      console.log(contentjson);
       service.writejsoninpod(contentjson,data.session)
      console.log(res);

      console.log(data.session);
        return data;
       }
     
     
     
     function initEmpathyX(service) {
       EmpathyX.init({
         instance:  'gocco',
         env:       'staging',
         lang:      'es',
         store:     'es',
         scope:      'default',
         consent:    true,
         catalog:   'general',
         eventCallbacks: {
           click: function(data) {
             console.log('[CLIENT_EVENT]', '[CLICK]', data);
           },
           query: function(data) {
             console.log('[CLIENT_EVENT]', '[QUERY]', data);
               writeinPOD(data, service)          
           },
           add2cart: function(data) {
             console.log('[CLIENT_EVENT]', '[ADD2CART]', data);
            
           }
         }
         
       });
     } `;
     this.div.appendChild(script);
     this.div.appendChild(script2);

   }
  async writeinPOD(data)
  {
    //let contentjson = JSON.stringify(data.default);
    let contentjson = JSON.stringify(data);
    console.log('calling function');

    console.log(contentjson);

   // await fileExplorerService.writejsoninpod(contentjson);
  }
  async callingempathyx()
  {
    console.log('fetching');
    let service = fileExplorerService;
    console.log(service)
    await window.initEmpathyX(service); // eslint-disable-line no-extend-native
    console.log('returned');

    }
  render(){
  return (
    <ShopWrapper>
    <CenterContainer>
   <div ref={el => (this.div = el)}>

     <p> <button onClick={async () => await this.writeinPOD()}>Load fake json into pod</button> </p>
     <p> <button class="mini-search form-search" onClick={async () => await this.callingempathyx()}>call empathysearch</button> </p>


   </div>
    </CenterContainer>
    </ShopWrapper>
  );
  }

}
