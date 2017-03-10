import * as React from "react";
import {
  List
} from "office-ui-fabric-react";;
import { css } from "office-ui-fabric-react/lib/utilities/css";
import { getRTL } from "office-ui-fabric-react/lib/utilities/rtl";

import { ITaxonomyItemsLists, ITaxonomyItem } from "./services/SPLists";
import MockTaxonomyClient from "./services/MockTaxonomyClient";
import TaxonomyClient from "./services/TaxonomyClient";

export interface KachelProps { termSetId: string; }

export default class Kachel extends React.Component<KachelProps, any> {

  constructor(props: KachelProps) {
    super(props);

    this.state = {
      items: [],
      termSetId: this.props.termSetId
    };
  }

  public componentDidMount() {
    this._renderListAsync();
  }

  public render() {
    let { items } = this.state;

    return (
      <List className="kapo-Overlay-Content"
        items={items}
        onRenderCell={(item: any, index: any) => (
          item.id = index,
          <div>
            {item.Extra !== undefined ? <div className="kapo-extra">{item.Extra}</div> : null}
            <a id={"Link_" + index} href={item.Url} target={item.Target}>{item.Title}</a>
          </div>)}
      />
    );
  }

  private _renderListAsync(): void {
    // Local environment
    if (typeof _spBodyOnLoadFunctionNames === "undefined") {
      // no SharePoint
      this._getMockListData().then((response) => {
        this._renderList(response.value);
      });
    } else {
      // SharePoint
      let { termSetId } = this.state;

      TaxonomyClient.get(termSetId).then((response: any) => {
        this._renderList(response);
      });
    }
  }

  private _getMockListData(): Promise<ITaxonomyItemsLists> {
    return MockTaxonomyClient.get("00000000-0000-0000-0000-000000000000")
      .then((data: ITaxonomyItem[]) => {
        let listData: ITaxonomyItemsLists = { value: data };
        return listData;
      }) as Promise<ITaxonomyItemsLists>;
  }

  private _renderList(items: ITaxonomyItem[]): void {
    this.setState({
      items: items
    });
  }
}
