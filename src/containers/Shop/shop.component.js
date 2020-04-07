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
   <div><p> <button onClick={async () => await this.writeinPOD()}>Load fake json into pod</button> </p>
    <script src="https://preassets.empathybroker.com/empathyx/gocco/app.js" type="text/javascript"></script>


   </div>
  );
  }

}
