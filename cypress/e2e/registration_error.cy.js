describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/registration"] > .button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('qwe rty')// Ввод некорректного догина
        cy.get(':nth-child(1) > :nth-child(2) > .form-control--medium').type('qwerty@gmail.com')// Ввод почты
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Qwerty123')// Ввод пароля
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Qwerty123')// Повторный ввод пароля
        
       
        cy.log('Проверка что появился элемент сиглализирующий об ошибке')
        cy.get('.form-error')
            .should('exist')




    })
})