import { FrontSrcPage } from './app.po';

describe('front-src App', function() {
  let page: FrontSrcPage;

  beforeEach(() => {
    page = new FrontSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
