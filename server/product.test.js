const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /:id', () => {
    it('successfully returns a single product', () =>
      request(app)
        .get(`/api/products/1`)
        .expect(200)
    )
  })

   describe('GET /', () => {
    it('successfully returns a list of products', () =>
      request(app)
        .get(`/api/products`)
        .expect(200)
    )
  })

})
