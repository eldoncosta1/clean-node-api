import { MongoHelper } from '../helpers/mongo-helper'
import { KnowledgeAreaMongoRepository } from './knowledge-area'
import { IKnowledgeAreaRepository } from '../../../../data/protocols/db/knowledge-area-repository'

const makeSut = (): IKnowledgeAreaRepository => {
  return new KnowledgeAreaMongoRepository()
}

describe('KnowledgeArea Mongo Repository', () => {
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

  it('Should return a list of knowledge area', async () => {
    const sut = makeSut()

    const listKnowledgeArea = await sut.list()

    expect(listKnowledgeArea).toBeTruthy()
  })
})
