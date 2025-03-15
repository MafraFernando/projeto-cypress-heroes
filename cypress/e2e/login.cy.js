import loginPage from "../pages/loginPage";

const login = new loginPage()



describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    login.accessLoginPage()
    login.loginButton()
    login.loginWithAnyUser('admin@test.com', 'test123')
    login.loginSucessfulPage()
    
  });

  
describe('Login sem sucesso', () => {
    it('Não deve fazer login sem um usuário e senha válidos', () => {
      login.accessLoginPage()
      login.loginButton()
      login.loginWithAnyUser('testesem@sucesso', 'teste123456')
      login.loginWithErrorAlert()
      
      
    });

    describe('Login sem email', () => {
      it('Não deve fazer login sem um email', () => {
        login.accessLoginPage()
        login.loginButton()
        login.loginWithoutUser('12345')
        login.loginWithRequiredAlert()
        
      });

      describe('Login sem senha', () => {
        it('Não deve fazer login sem um password', () => {
          login.accessLoginPage()
          login.loginButton()
          login.loginWithoutPassword('abcdefg@teste.com')
          login.loginWithRequiredAlert()
          
        });

});
});
});
});