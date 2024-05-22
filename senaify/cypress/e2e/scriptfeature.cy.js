describe('Fluxo do Usuário na Aplicação de Música', () => {
  it('entrar no senafy', () => {
    cy.visit('/')
  })

  it('Verificando Good Morning', () => {
    cy.get("[aria-label='title-head']")
  })

  it('Verificar lista de playlist', () => {
    cy.get('[aria-label="list-playlist"]')
  })

  it('Clicar na primeira playlist', () => {
    cy.get('[aria-label="playlist-item"').first().click()
  })

  it('Verificar lista de musica', () => {
    cy.get("[aria-label='list-music'")
  })

  it('Clicar na primeira musica da playlist', () => {
    cy.wait(1000)
    const listMusic = cy.get("[aria-label='list-music'")

    listMusic.get("[aria-label='music-item'").eq(1).click()
  })

  it('Voltar para a listagem de playlist', () => {
    cy.wait(1000)
    cy.visit('/')
    cy.get("[aria-label='list-playlist'")
  })


  it('Clicar na segunda playlist', () => {
    cy.wait(300)
    cy.get("[aria-label='playlist-item'").eq(1).click()
  })


  it('Verificar se existe uma lista de musica', () => {
    cy.get("[aria-label='list-music'")
  })

  it('Clicar na primeira musica da segunda playlist', () => {
    const listMusic = cy.get("[aria-label='list-music'")
    listMusic.get("[aria-label='music-item'").eq(1).click()
  })

  it('Ir pra tela de pesquisa', () => {
    cy.wait(1000)
    cy.get("[href='/Search']").click()
  })

  it('Procurar por uma musica', () => {
    cy.wait(100)
    cy.get("[data-testid='campoBusca']").type("THE BOX MEDLEY FUNK 2")
    cy.wait(500)
    cy.get("[aria-label='list-search'")
  })

  it('Clicar na primeira musica do resultado da pesquisa', () => {
    const listMusic = cy.get("[aria-label='list-search'")
  })
})
