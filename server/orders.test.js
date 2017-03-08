const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const app = require('./start')

describe('/api/orders', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('POST /', () => {
    it('creates an order', () =>
      request(app)
        .post(`/api/orders`)
        .send({
            products: [1, 2, 3],
            prices: [1000, 2000, 3000],
            quantities: [1, 2, 3]
        })
        .expect(201)
    )
  })
  
})
