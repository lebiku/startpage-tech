import { ITaxonomyItem } from "./SPLists";
import { ITaxonomyItemsLists } from "./SPLists";
import * as pnp from "sp-pnp-js";

import "whatwg-fetch";
// what a comment
export default class TaxonomyClient {

  public static get(termSetId: string, options?: any): Promise<ITaxonomyItemsLists[]> {

    return new Promise<ITaxonomyItemsLists[]>((resolve: any) => {
      resolve(this._getTermSet(termSetId));
    });
  }

  private static _getTermSet(termSetId: string): Promise<ITaxonomyItemsLists[]> {

    return new Promise<ITaxonomyItemsLists[]>((resolve: any, reject: any) => {

      this._loadTermstore(function () {
        let context = SP.ClientContext.get_current();
        let taxonomySession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
        let termStore = taxonomySession.getDefaultSiteCollectionTermStore();
        let term = termStore.getTerm(new SP.Guid(termSetId));

        let subterms = term.get_terms();

        context.load(subterms);

        context.executeQueryAsync(function () {
          let items: ITaxonomyItem[] = [];

          let termsEnumerator = subterms.getEnumerator();

          while (termsEnumerator.moveNext()) {
            let currentTerm = termsEnumerator.get_current();
            let name = currentTerm.get_name();
            let id = currentTerm.get_id();
            let url = currentTerm.get_localCustomProperties()["URL"];
            let extra = _spPageContextInfo.currentLanguage === 1036 ? currentTerm.get_localCustomProperties()["ExtraFr"] : currentTerm.get_localCustomProperties()["ExtraDe"];
            let target = currentTerm.get_localCustomProperties()["Target"];

            items.push({ Title: name, Id: id.toString(), Url: url, Extra: extra, Target: target });
          }

          resolve(items);

        }, reject);
      });
    });
  };

  private static _loadTermstore(callback: any): void {
    SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () { });

    SP.SOD.executeOrDelayUntilScriptLoaded(function () {

      SP.SOD.registerSod("sp.taxonomy.js", "/_layouts/15/sp.taxonomy.js");
      SP.SOD.executeFunc("sp.taxonomy.js", "sp.taxonomy", function () { });

      SP.SOD.executeOrDelayUntilScriptLoaded(function () {
        callback();
      }, "sp.taxonomy.js");
    }, "SP.js");
  }
}
