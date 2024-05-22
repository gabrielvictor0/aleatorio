describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })

  it('Verificar se o header está visivel', () => {
    // capturar o elemento title, e ver se está visivel
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
  })

  it('Verificar se existe itens na listagem de playlist',  () => {
    cy.wait(2000);
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  })

  it("Clicar no primeiro album ", () => {
    cy.get("[aria-label='playlist-item']").first().click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it("Clicar na primeira música do album", () => {
    cy.wait(1000)
    cy.get("[aria-label='music-item']").contains("").click()
  })
})