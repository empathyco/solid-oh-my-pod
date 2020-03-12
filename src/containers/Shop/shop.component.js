import React from "react";
import { fileExplorerService } from "@services";
import * as data from 'json/mockup.json';


export default class ShopComponent extends React.Component {

  constructor()
  {
      super();
      this.state = {}
  }

  async writeinPOD()
  {
    let contentjson = JSON.stringify(data.default);
     console.log(contentjson);

    await fileExplorerService.writejsoninpod(contentjson);
  }
  render(){
  return (
   <p> <button onClick={async () => await this.writeinPOD()}>Click Here</button> </p>
  );
  }

}
