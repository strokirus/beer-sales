describe("All products items", () => {
  beforeEach(() => {
    cy.server();
    cy.route("/");  
  });  

  it("Initial Render All products", () => {
    cy.visit("/");

    cy.get(".item-product").within(items => {
      expect(items).to.have.length(133);
      expect(items[0]).to.contain("'Murican Pilsner");
      expect(items[1]).to.contain("12th Of Never");
    });
  });

  it("Search 'beer'", () => {
    cy.visit("/");

    cy.get('#search-box').type("Beer{enter}");

    cy.get(".item-product").within(items => {
      expect(items).to.have.length(24);
      expect(items[0]).to.contain("2017 Beer Camp");
      expect(items[1]).to.contain("Alt Route - Beer Camp Across America");
    });
  });

  it("Add cart 'beer'", () => {
    cy.visit("/");

    cy.get(".buy-item").within(items => {
      items[0].click();
      items[0].click();
    });

    cy.get(".item-cart-product").within(items => {
      expect(items).to.have.length(1);
      expect(items[0]).to.contain("Qtd: 2");
    });
  });

  it("Remove cart 'beer'", () => {
    cy.visit("/");

    cy.get(".buy-item").within(items => {
      items[0].click();
      items[0].click();
    });

    cy.get(".remove-qtd").within(items => {
      items[0].click();
    });    

    cy.get(".item-cart-product").within(items => {
      expect(items).to.have.length(1);
      expect(items[0]).to.contain("Qtd: 1");
    });

    cy.get(".total-cart").within(items => {
      expect(items[0]).to.contain("Total: €5,21");
    });    
  });  
});