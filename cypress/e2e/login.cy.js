describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://dev.profteam.su/')
      cy.get('[href="/login"] > .button').click()
      cy.get('.form-input--text').type('testerStudent')// Ввод  логина
      cy.get('.form-input--password').type('Password1')// Ввод  пароля
  
      cy.get(':nth-child(3) > .button').click()//Нажатие кнопки входа
      cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button')
        .should('exist')
  
    })
  })