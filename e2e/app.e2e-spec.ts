import { RecipeBookShopListPage } from './app.po';

describe('recipe-book-shop-list App', () => {
  let page: RecipeBookShopListPage;

  beforeEach(() => {
    page = new RecipeBookShopListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
