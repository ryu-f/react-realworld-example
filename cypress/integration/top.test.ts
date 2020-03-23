/// <reference types="cypress"/>

describe('日本語テイスティング', () => {
  it('TOPに遷移', () => {
    cy.visit('/').wait(4000)
    cy.url().should('include', '/')
    cy.matchImageSnapshot('TOP')
  })
})
