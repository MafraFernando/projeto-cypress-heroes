import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

const login = new loginPage();
const home = new homePage();

describe("Home sem login", () => {
  it("Não deve poder dar like e comprar heroes", () => {
    login.accessLoginPage();
    home.homeWithoutLogin();
  });

  describe("Home com login", () => {
    it.only("Deve poder dar like, comprar, editar e deletar heroes", () => {
      login.accessLoginPage();
      login.loginButton();
      login.loginWithAnyUser("admin@test.com", "test123");
      login.loginSucessfulPage();
      home.likeHero();
      home.buyHero();
      home.editHero();
    });
  });
});
