import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('KnowledgeArea Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL ?? '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('knowledge_areas')
    await accountCollection.deleteMany({})
  })

  it('should return a list of kwnoledge areas on success', async () => {
    await request(app)
      .get('/api/knowledge-area')
      .expect(200)
  })
})
