import { SoclePage } from './app.po';

describe('socle App', function() {
  let page: SoclePage;

  beforeEach(() => {
    page = new SoclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
