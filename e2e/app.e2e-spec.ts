import { NgAntdPage } from './app.po';

describe('ng-antd App', () => {
  let page: NgAntdPage;

  beforeEach(() => {
    page = new NgAntdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
