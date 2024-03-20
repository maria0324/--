describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/login"] > .button').click()
        cy.get('.form-input--text').type('testerEmployer')
        cy.get('.form-input--password').type('Password1')
  
        cy.get(':nth-child(3) > .button').click()

        cy.get(':nth-child(5) > .menu-item__item-name').click()
        cy.get(':nth-child(2) > .navigation-item__title--active').click()

        cy.get(':nth-child(5) > .menu-item__item-name').click()

        cy.get(':nth-child(5) > .menu-item__item-name').click()

        cy.get('.responses-page__tabs > .navigation-workspace > :nth-child(2) > .navigation-item__title').click()
        
        
  
  
  
  
    })
  })