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
});