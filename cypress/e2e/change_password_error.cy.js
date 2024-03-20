describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/login"] > .button').click() // Авторизация
        cy.get('.form-input--text').type('testerInstitution')
        cy.get('.form-input--password').type('Password1')

        cy.get(':nth-child(3) > .button').click() // Нажатие кнопки входа
        cy.wait(2000)

        cy.get(':nth-child(1) > .form-input--password').type('Password1') // Ввод измененного пароля
        cy.wait(2000)
        cy.get(':nth-child(2) > .form-input--password').type('Password12') // Повторный ввод пароля с ошибкой
        cy.wait(2000)
        


        cy.log('Проверка что появился элемент сиглализирующий об ошибке')
        cy.get('.form-error > span')
            .should('exist')




    })
})