import { KnowledgeAreaController } from '../../../../../src/presentation/controllers/knowledge-area/knowledge-area'
import { HttpRequest } from '../../../../../src/presentation/protocols'

const makeFakeRequest = (): HttpRequest => ({
  body: {}
})

describe('KnowledgeArea Controller', () => {
  it('Should return 200 if valida data is provided ', async () => {
    const sut = new KnowledgeAreaController()

    const httpResponse = await sut.handle(makeFakeRequest())

    expect(httpResponse).toEqual({
      statusCode: 200,
      body: [
        {
          id: '1'
        }
      ]
    })
  })
})
