import { ITaxonomyItem } from "./SPLists";

export default class MockTaxonomyClient {

  private static _items: ITaxonomyItem[] = [
    {
      Title: "Ticket",
      Id: "1",
      Url: "http://www.example.com",
      Extra: undefined,
      Target: undefined
    },
    {
      Title: "System-Probleme",
      Id: "2",
      Url: "http://www.example.com",
      Extra: undefined,
      Target: undefined
    },
    {
      Title: "Passwortpflege",
      Id: "3",
      Url: "http://www.example.com",
      Extra: undefined,
      Target: undefined
    }
  ];

  public static get(termSetId: string, options?: any): Promise<ITaxonomyItem[]> {
    return new Promise<ITaxonomyItem[]>((resolve) => {
      resolve(MockTaxonomyClient._items);
    });
  }
}
