import * as React from "react";
import { Overlay } from "office-ui-fabric-react";

import Kachel from "./Kachel";

export interface OverlayProps { imageUrl: string; termSetId: string; imageWidth: number; }

export default class OverlayDark extends React.Component<OverlayProps, any> {
  constructor(props: OverlayProps) {
    super(props);

    this._onClick = this._onClick.bind(this);

    this.state = {
      isOverlayVisible: false,
      imageUrl : this.props.imageUrl,
      termSetId: this.props.termSetId,
      imageWidth: this.props.imageWidth
    };
  }

  public render() {
    let { isOverlayVisible } = this.state;
    let { imageUrl } = this.state;
    let { termSetId } = this.state;
    let { imageWidth } = this.state;

    return (
      <div className="kapo-Overlay">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={"0 0 " + imageWidth + " 500"} onClick={ this._onClick }>
          <image id="Ebene_0" data-name="Ebene 0" width={imageWidth} height="500" xlinkHref={imageUrl}/>
        </svg>
        
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
