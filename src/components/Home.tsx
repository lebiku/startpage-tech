import * as React from "react";
// import { css } from 'office-ui-fabric-react';
import "office-ui-fabric-react/dist/css/fabric.min.css";

import OverlayDark from "./Overlay";

import { Translations } from "../assets/icons";

export interface HomeProps { compiler: string; framework: string; }

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return <div className="ms-Grid kapo-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl2">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Stoerungen")} termSetId="1eacff41-c02c-4d43-90ee-b5089476fe0a" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl2">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Material")} termSetId="00F4E2E5-7F0C-4D2A-A0D9-54C0656D34C7" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl2">
            <OverlayDark imageUrl={Translations.getByKey("Icons.SchalterLogistik")} termSetId="97B065F6-B009-4EB1-B392-A06398DF0770" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl2">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Garagenbetriebe")} termSetId="A9486BFC-FD87-4D04-B53D-2EBA29472109" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl2">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Beschaffungen")} termSetId="1975B549-84B6-4D95-B5C3-AF23C6E3A960" />
          </div>
        </div>   
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl4">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Wissen")} termSetId="b880b1bd-e8a5-48fa-af22-377ddeed8282" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl4">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Leistungen")} termSetId="BE4713C8-23D3-423D-9EB7-10AA6CF90271" />
          </div>
          <div className="ms-Grid-col ms-u-sm12 ms-u-lg4 ms-u-xl4">
            <OverlayDark imageUrl={Translations.getByKey("Icons.Media")} termSetId="4E0B8376-6C1E-4D2F-8A48-BB1A432BF612" />
          </div>
        </div>              
      </div>;
  }
}
