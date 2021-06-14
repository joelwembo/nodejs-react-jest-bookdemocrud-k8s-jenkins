const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/books/firstname/john')
      .send({
      //  firstname: "testuser",
      //  title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('{}')
  })
})
