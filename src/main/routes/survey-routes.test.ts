import request from 'supertest'
import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'

let surveyCollection: Collection

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL ?? '')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
  })

  describe('POST /surveys', () => {
    it('Should return 204 on add survey success', async () => {
      const response = await request(app)
        .post('/api/surveys')
        .send({
          question: 'Question',
          answers: [
            { answer: 'Answer 1', image: 'http://image-name.com' },
            { answer: 'Answer 2' }
          ]
        })
        .expect(204)
    })
  })
})
