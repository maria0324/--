describe('template spec', () => {
  it('passes', () => {
      cy.visit('https://dev.profteam.su/')
      cy.get('[href="/login"] > .button').click() // Авторизация
      cy.get('.form-input--text').type('testerEmployer')
      cy.get('.form-input--password').type('Password1')

      cy.get(':nth-child(3) > .button').click() // Нажатие кнопки входа
      cy.get(':nth-child(7) > .menu-item__item-name').click() // Переключение в раздел вакансий
      cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click() // Нажатие кнопки создания вакансии
      
      
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('Кладовщица',{force: true })
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('Приходить на работу',{force: true })
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('Работать',{force: true })


      cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click()
      





  })
})