describe('products api', () => {
  const env = Cypress.env();

  before(() => {
  });

  describe('get products', () => {
    context('check that user can get products', () => {
      it('get all products', () => {
        cy.request(
          {
            method: 'GET',
            url: 'products',

            headers: {
            },

            body: {
              name: 'string',
              type: 'string',
              price: 0,
              shipping: 0,
              upc: 'string',
              description: 'string',
              manufacturer: 'string',
              model: 'string',
              url: 'string',
              image: 'string',
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data).not.be.empty;
        });
      });
    });
  });

  describe('create new product', () => {
    context('check that user can create new product', () => {
      it('get all products count', () => {
        cy.request(
          {
            method: 'GET',
            url: 'products',

            headers: {
            },

            body: {
              name: 'string',
              type: 'string',
              price: 0,
              shipping: 0,
              upc: 'string',
              description: 'string',
              manufacturer: 'string',
              model: 'string',
              url: 'string',
              image: 'string',
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200);
          env.products_count = response.body.total;
        });
      });

      it('create new product', () => {
        cy.request(
          {
            method: 'POST',
            url: 'products',

            headers: {
            },

            body: {
              name: env.new_product.name,
              type: env.new_product.type,
              price: env.new_product.price,
              shipping: env.new_product.shipping,
              upc: 'string',
              description: env.new_product.description,
              manufacturer: env.new_product.manufacturer,
              model: env.new_product.model,
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(201); // supposed to be 200
          expect(response.body.name).to.eq(env.new_product.name);
          expect(response.body.type).to.eq(env.new_product.type);
          expect(response.body.price).to.eq(env.new_product.price);
          expect(response.body.shipping).to.eq(env.new_product.shipping);
          expect(response.body.description).to.eq(env.new_product.description);
          expect(response.body.manufacturer).to.eq(env.new_product.manufacturer);
          expect(response.body.model).to.eq(env.new_product.model);

          env.new_product.id = response.body.id;
        });
      });

      it('check products count is increased', () => {
        cy.request(
          {
            method: 'GET',
            url: 'products',

            headers: {
            },

            body: {
              name: 'string',
              type: 'string',
              price: 0,
              shipping: 0,
              upc: 'string',
              description: 'string',
              manufacturer: 'string',
              model: 'string',
              url: 'string',
              image: 'string',
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.total).to.eq(env.products_count + 1);
        });
      });
    });
  });

  describe('update product', () => {
    context('check that user can update product', () => {
      it('update product', () => {
        cy.request(
          {
            method: 'PATCH',
            url: `products/${env.new_product.id}`,

            headers: {
            },

            body: {
              name: env.updated_product.name,
              type: env.updated_product.type,
              price: env.updated_product.price,
              shipping: env.updated_product.shipping,
              model: env.updated_product.model,
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200); // supposed to be 200
          expect(response.body.name).to.eq(env.updated_product.name);
          expect(response.body.type).to.eq(env.updated_product.type);
          expect(response.body.price).to.eq(env.updated_product.price);
          expect(response.body.shipping).to.eq(env.updated_product.shipping);
          expect(response.body.description).to.eq(env.new_product.description);
          expect(response.body.manufacturer).to.eq(env.new_product.manufacturer);
          expect(response.body.model).to.eq(env.updated_product.model);
        });
      });
    });
  });

  describe('get product by id', () => {
    context('check that user can view product by id', () => {
      it('get product', () => {
        cy.request(
          {
            method: 'GET',
            url: `products/${env.new_product.id}`,

            headers: {
            },

            body: {
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(env.updated_product.name);
          expect(response.body.type).to.eq(env.updated_product.type);
          expect(response.body.price).to.eq(env.updated_product.price);
          expect(response.body.shipping).to.eq(env.updated_product.shipping);
          expect(response.body.description).to.eq(env.new_product.description);
          expect(response.body.manufacturer).to.eq(env.new_product.manufacturer);
          expect(response.body.model).to.eq(env.updated_product.model);
        });
      });
    });
  });

  describe('delete product by id', () => {
    context('check that user can delete product by id', () => {
      it('delete product', () => {
        cy.request(
          {
            method: 'DELETE',
            url: `products/${env.new_product.id}`,

            headers: {
            },

            body: {
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(200);
        });
      });

      it('search for deleted product', () => {
        cy.request(
          {
            method: 'GET',
            url: `products/${env.new_product.id}`,
            failOnStatusCode: false,

            headers: {
            },

            body: {
            },
          },
        ).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body.message).to.eq(`No record found for id '${env.new_product.id}'`);
        });
      });
    });
  });
});
