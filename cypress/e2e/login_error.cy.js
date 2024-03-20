describe('template spec', () => {
    it('None-existent login test', () => {
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/login"] > .button').click()
        cy.get('.form-input--text').type('testerStudent10')// Ввод несуществующего логина
        cy.log('Ввод несуществующего пароля')
        cy.get('.form-input--password').type('Password123')

        cy.get(':nth-child(3) > .button').click()//Нажатие кнопки входа
        cy.log('Проверка что появился элемент сиглализирующий об ошибке')
        cy.get('.form-error')
            .should('exist')


    })
})