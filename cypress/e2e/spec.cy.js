describe('Avaliação e Comentário de Produto', () => {
    it('Deve permitir deixar uma avaliação e comentário em um produto', () => {
      cy.visit('https://demo.opencart.com/index.php?route=product/product&product_id=43');
  
      // Escrever uma avaliação e fornecer uma classificação
      cy.contains('Reviews').click()
      cy.get('input[name = "name"]').type('Isac')
      cy.get('textarea[name = "text"]').type('O produto possui uma boa tela e é compacto!')
      cy.get('input[type = "radio"]').first().check()
      cy.contains('Continue').click()
    });
  });

  describe('Entrar em contato com o suporte ao cliente', () => {
    it('Deve permitir entrar em contato com o suporte ao cliente', () => {
      cy.visit('https://demo.opencart.com/index.php?route=information/contact');
  
      // Escrever uma reclamação
      cy.get('input[name = "name"]').type('Isac')
      cy.get('input[name = "email"]').type('isac@email.com')
      cy.get('textarea[name = "enquiry"]').type('Estou com um problema com cupons.')
      cy.contains('Submit').click()
      cy.contains('Continue').click()
    });

  });

  describe('Buscar por uma marca específica', () => {
    it('Buscar produtos de uma marca espeífica', () => {
      cy.visit('https://demo.opencart.com/index.php?route=product/manufacturer&language=en-gb');
      //Buscar produtos da Apple
      cy.contains('Apple').click()

    });
  });
