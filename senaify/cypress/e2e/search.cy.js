describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('Redireciona a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  })

  it('Procura por uma musica', () => {
    const pesquisa = cy.get("[data-testid='campoBusca']").type("THE BOX MEDLEY FUNK 2")
    cy.wait(2000)
  })

  // it('Clica na musica que tem o mesmo nome buscado', () => {
  //   cy.wait(500)
  //   cy.get("[aria-label='music-item']").filter(':contains("THE BOX MEDLEY FUNK 2")').click()
  // })

  it('Clicou no botao de curtir', async () => {
    cy.wait(1500)
    let musicaProdurada;
    cy.get("[aria-label='music-item']").filter(':contains("THE BOX MEDLEY FUNK 2")').then((item) => {
      cy.wait(1000)

      if (cy.wrap(item).find("[aria-label='icon-deslike']") ) {
        cy.wrap(item).find("[data-testid='icon-button']").click();
      }
      else{

        cy.wrap(item).click()
      }
    })




  })
})