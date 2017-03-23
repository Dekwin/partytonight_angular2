import { PartytonightPage } from './app.po';

describe('partytonight App', () => {
  let page: PartytonightPage;

  beforeEach(() => {
    page = new PartytonightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
