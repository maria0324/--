describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/registration"] > .button').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('qwerty')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control--medium').type('qwerty@gmail.com')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Qwerty123')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Qwerty123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Иванов')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Иван')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Иванович')

        cy.get(':nth-child(3) > .button').click()

        cy.log('Проверка что появилась кнопка выхода')
        cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button')
            .should('exist')




    })
})