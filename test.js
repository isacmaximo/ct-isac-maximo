describe('Avaliação e Comentário de Produto', () => {
    it('Deve permitir deixar uma avaliação e comentário em um produto', () => {
      cy.visit('https://demo.opencart.com/index.php?route=product/product&product_id=43');
  
      // Escrever uma avaliação e fornecer uma classificação
      cy.get('#input-review').type('Ótimo produto!');
      cy.get('input[name="rating"][value="4"]').check();
  
      // Enviar a avaliação
      cy.get('#button-review').click();
  
      // Verificar se a avaliação é exibida corretamente na página do produto
      cy.contains('Thank you for your review');
      cy.contains('Ótimo produto!');
      cy.contains('4');
    });
  });
  
  describe('Contato com o Suporte ao Cliente', () => {
    it('Deve permitir entrar em contato com o suporte ao cliente', () => {
      cy.visit('https://demo.opencart.com/index.php?route=information/contact');
  
      // Encontrar informações de contato do suporte ao cliente
      cy.contains('Contact Us').should('be.visible');
  
      // Enviar uma mensagem para o suporte ao cliente
      cy.get('#input-name').type('John Doe');
      cy.get('#input-email').type('johndoe@example.com');
      cy.get('#input-enquiry').type('Tenho uma dúvida sobre um produto.');
      cy.get('input[type="submit"]').click();
  
      // Verificar se o suporte responde adequadamente e de forma útil
      cy.contains('Your enquiry has been successfully sent');
      cy.contains('We will respond to your enquiry as soon as possible.');
    });
  });
  
  describe('Compartilhamento de Produto em Redes Sociais', () => {
    it('Deve permitir compartilhar um produto em uma rede social', () => {
      cy.visit('https://demo.opencart.com/index.php?route=product/product&product_id=43');
  
      // Encontrar opções para compartilhamento de redes sociais
      cy.get('.share').click();
  
      // Compartilhar o produto em uma rede social escolhida (por exemplo, Twitter)
      cy.get('.fa-twitter').click();
  
      // Verificar se o compartilhamento é realizado corretamente e exibe informações relevantes sobre o produto
      cy.url().should('include', 'twitter.com');
      cy.get('textarea[name="tweet"]').should('have.value', 'Check out this amazing product!');
      cy.get('.fa-star').should('have.class', 'active');
    });
  });
  