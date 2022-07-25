import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  it('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Eldon',
        email: 'eldoncosta1@gmail.com',
        password: '123',
        passwordConfirmation: '12'
      })
      .expect(200)
  })
})
