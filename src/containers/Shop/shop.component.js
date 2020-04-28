import React from "react";
import { fileExplorerService } from "@services";
import * as contextf from 'json/context.txt';

import CenterContainer from "../../components/Utils/CenterContainer";
import {ShopWrapper}  from "./shop.style";


export default class ShopComponent extends React.Component {

  constructor()
  {
      super();
      this.state = {};
      window.shop =this;

  }
   componentDidMount() {
     const script = document.createElement("script");
     script.async = true;
     //script.src = "https://preassets.empathybroker.com/empathyx/gocco/app.js";
     script.src = "https://preassets.empathybroker.com/empathyx/demosolid/app.js";

     let script2 = document.createElement("script");
     script2.textContent  = `   
     
     
     
     function initEmpathyX() {
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
               shop.writeinPOD(data)          
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
 /* async writeinPOD(data)
  {
    //let contentjson = JSON.stringify(data.default);
    let contentjson = JSON.stringify(data);
    console.log('calling function');

    console.log(contentjson);

   // await fileExplorerService.writejsoninpod(contentjson);
  }*/

    logFileText = async file => {
    let response = await fetch(file)
    let text = await response.text()

      return   text;
  }

  async writeinPOD(data)
  {
    let content = JSON.stringify(data).substring(1);
    console.log('calling function');

    let context = await this.logFileText(contextf);

    let contentjson = context + content + '}';

    let d = new Date();
    let title = data.session +'-'+ d.getTime();

    await fileExplorerService.writejsoninpod(contentjson,title);

    }


  render(){
  return (
    <ShopWrapper>
    <CenterContainer>
   <div ref={el => (this.div = el)}>

      <p> <button class="open"  >call empathysearch</button> </p>


   </div>
    </CenterContainer>
    </ShopWrapper>
  );
  }

}
