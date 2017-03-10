import * as React from "react";
import { Overlay } from "office-ui-fabric-react";

import Kachel from "./Kachel";

export interface OverlayProps { imageUrl: string; termSetId: string; }

export default class OverlayDark extends React.Component<OverlayProps, any> {
  constructor(props: OverlayProps) {
    super(props);

    this._onClick = this._onClick.bind(this);

    this.state = {
      isOverlayVisible: false,
      imageUrl : this.props.imageUrl,
      termSetId: this.props.termSetId
    };
  }

  public render() {
    let { isOverlayVisible } = this.state;
    let { imageUrl } = this.state;
    let { termSetId } = this.state;

    return (
      <div className="kapo-Overlay">
        <img src={imageUrl}  onClick={ this._onClick }/>
        
        { isOverlayVisible && (
          <Overlay isDarkThemed={ false } onClick={ this._onClick }>
            <Kachel termSetId={termSetId}/>
          </Overlay>
        ) }
      </div>
    );
  }

  public _onClick() {
    this.setState({
      isOverlayVisible: !this.state.isOverlayVisible
    });
  }
}
