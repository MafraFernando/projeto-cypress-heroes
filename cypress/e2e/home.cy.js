import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

const login = new loginPage();
const home = new homePage();

describe("Home sem login", () => {
  it("Não deve poder dar like e comprar heroes", () => {
    login.accessLoginPage();
    home.homeWithoutLogin();
  });
  
describe("Like Hero", () => {
    it("Deve poder dar like", () => {
      login.accessLoginPage();
      login.loginButton();
      login.loginWithAnyUser("admin@test.com", "test123");
      login.loginSucessfulPage();
      home.likeHero();
    });
    
describe("Buy Hero", () => {
      it("Deve poder comprar", () => {
        login.accessLoginPage();
        login.loginButton();
        login.loginWithAnyUser("admin@test.com", "test123");
        login.loginSucessfulPage();
        home.buyHero();
      });

describe("Edit Hero", () => {
    it("Deve poder editar heroes", () => {
      login.accessLoginPage();
      login.loginButton();
      login.loginWithAnyUser("admin@test.com", "test123");
      login.loginSucessfulPage();
      home.editHero('Super Logistics');
      home.confirmationHero();
    });

describe("Delet Hero", () => {
      it("Deve poder deletar heroes", () => {
        login.accessLoginPage();
        login.loginButton();
        login.loginWithAnyUser("admin@test.com", "test123");
        login.loginSucessfulPage();
        home.deletHero();
        
      });

describe("Home Button", () => {
        it("Deve ir para a página home", () => {
          login.accessLoginPage();
          login.loginButton();
          login.loginWithAnyUser("admin@test.com", "test123");
          login.loginSucessfulPage();
          home.homeButton();
          
        });

describe("Logout Button", () => {
          it("Deve ir para a página de login", () => {
            login.accessLoginPage();
            login.loginButton();
            login.loginWithAnyUser("admin@test.com", "test123");
            login.loginSucessfulPage();
            home.logoutButton();
            
            
          });
        });
      });
    });
  });
});
});
});

