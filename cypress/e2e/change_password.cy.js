describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/') // Авторизация
        cy.get('[href="/login"] > .button').click()
        cy.get('.form-input--text').type('testerInstitution')
        cy.get('.form-input--password').type('Password1')

        cy.get(':nth-child(3) > .button').click() // Нажатие кнопки входа
        cy.wait(2000)

        cy.get(':nth-child(1) > .form-input--password').type('Password1') // Ввод измененного пароля
        cy.wait(2000)
        cy.get(':nth-child(2) > .form-input--password').type('Password1') // Повторный ввод пароля
        cy.wait(2000)

        cy.get('.form__buttons > div > .button').click() // Нажатие кнопки изменения



        cy.log('Проверка что появился элемент сиглализирующий об изменении пароля')
        cy.get('.form__buttons > div > p')
            .should('exist')
        



    })
})