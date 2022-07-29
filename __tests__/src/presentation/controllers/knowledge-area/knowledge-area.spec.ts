import { ListKnowledgeAreaController } from '../../../../../src/presentation/controllers/knowledge-area/list-knowledge-area'
import { ServerError } from '../../../../../src/presentation/errors/server-error'
import { HttpRequest, HttpResponse } from '../../../../../src/presentation/protocols'
import { ListKnowledgeArea, ListKnowledgeAreaModel } from '../../../../../src/presentation/controllers/knowledge-area/knowledge-area-protocols'
import { ok, serverError } from '../../../../../src/presentation/helpers/http-helper'

const mockDate = new Date()

const makeListKnowledgeArea = (): ListKnowledgeArea => {
  class ListKnowledgeAreaStub implements ListKnowledgeArea {
    async handle (): Promise<ListKnowledgeAreaModel[]> {
      return new Promise(resolve => resolve(makeFakeListKnowledgeArea()))
    }
  }

  return new ListKnowledgeAreaStub()
}

const makeFakeListKnowledgeArea = (): ListKnowledgeAreaModel[] => {
  return [
    { id: '1', code: 'any_code', title: 'any_title', createdAt: mockDate, deletedAt: mockDate, updatedAt: mockDate }
  ]
}

const makeFakeRequest = (): HttpRequest => ({
  body: {}
})

interface SutTypes {
  sut: ListKnowledgeAreaController
  listKnowledgeAreaStub: ListKnowledgeArea
}

const makeSut = (): SutTypes => {
  const listKnowledgeAreaStub = makeListKnowledgeArea()
  const sut = new ListKnowledgeAreaController(listKnowledgeAreaStub)

  return {
    sut,
    listKnowledgeAreaStub
  }
}

describe('KnowledgeArea Controller', () => {
  it('Should call ListKnowledgeArea correctly', async () => {
    const { sut, listKnowledgeAreaStub } = makeSut()

    const listSpy = jest.spyOn(listKnowledgeAreaStub, 'handle')

    const httpRequest = makeFakeRequest()
    await sut.handle(httpRequest)

    expect(listSpy).toHaveBeenCalled()
  })

  it('Should return 500 if ListKnowledgeArea throws', async () => {
    const { sut, listKnowledgeAreaStub } = makeSut()

    jest.spyOn(listKnowledgeAreaStub, 'handle').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })

    const httpResponse = await sut.handle(makeFakeRequest())

    expect(httpResponse.body).toEqual(new ServerError())
  })

  it('Should return 200 if valid data is provided ', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle(makeFakeRequest())

    expect(httpResponse).toEqual(ok(makeFakeListKnowledgeArea()))
  })
})
