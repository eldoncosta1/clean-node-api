import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  // beforeAll(async () => {
  //   await sut.connect(process.env.MONGO_URL || '')
  // })

  // afterAll(async () => {
  //   await sut.disconnect()
  // })

  // it('should reconnect if mongodb is down', async () => {
  //   let accountCollection = sut.getCollection('accounts')

  //   expect(accountCollection).toBeTruthy()
  //   await sut.disconnect()

  //   accountCollection = sut.getCollection('accounts')
  //   expect(accountCollection).toBeTruthy()
  // })

  it('test not used', () => {
    expect(1).toBe(1)
  })
})
