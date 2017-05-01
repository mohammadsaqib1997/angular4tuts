import { Pro1Page } from './app.po';

describe('pro1 App', () => {
  let page: Pro1Page;

  beforeEach(() => {
    page = new Pro1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
