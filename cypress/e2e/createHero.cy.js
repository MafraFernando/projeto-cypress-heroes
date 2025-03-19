import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import createPage from "../pages/createPage";

const login = new loginPage();
const home = new homePage();
const create = new createPage();

describe("Create Hero", () => {
  it.only("Deve criar novo herói", () => {
    login.accessLoginPage();
    login.loginButton();
    login.loginWithAnyUser("admin@test.com", "test123");
    login.loginSucessfulPage();
    create.createNewHero('Mind Control');
  });
  
describe("Create Hero without name", () => {
    it("Não deve criar novo herói", () => {
      login.accessLoginPage();
      login.loginButton();
      login.loginWithAnyUser("admin@test.com", "test123");
      login.loginSucessfulPage();
      create.createNewHeroWithoutName('Mind Control');
    });

describe("Create Hero without price", () => {
        it("Não deve criar novo herói", () => {
          login.accessLoginPage();
          login.loginButton();
          login.loginWithAnyUser("admin@test.com", "test123");
          login.loginSucessfulPage();
          create.createNewHeroWithoutPrice('Mind Control');
        });
  });

describe("Create Hero without fans", () => {
    it("Não deve criar novo herói", () => {
      login.accessLoginPage();
      login.loginButton();
      login.loginWithAnyUser("admin@test.com", "test123");
      login.loginSucessfulPage();
      create.createNewHeroWithoutFans('Mind Control');
    });

describe("Create Hero without price", () => {
        it("Não deve criar novo herói", () => {
          login.accessLoginPage();
          login.loginButton();
          login.loginWithAnyUser("admin@test.com", "test123");
          login.loginSucessfulPage();
          create.createNewHeroWithoutPrice('Mind Control');
        });

describe("Create Hero without saves", () => {
            it("Não deve criar novo herói", () => {
              login.accessLoginPage();
              login.loginButton();
              login.loginWithAnyUser("admin@test.com", "test123");
              login.loginSucessfulPage();
              create.createNewHeroWithoutSaves('Mind Control');
            });

describe("Create Hero without super powers", () => {
                it("Não deve criar novo herói", () => {
                  login.accessLoginPage();
                  login.loginButton();
                  login.loginWithAnyUser("admin@test.com", "test123");
                  login.loginSucessfulPage();
                  create.createNewHeroWithoutPower();
                });
          });
      });
  });
});
});
});