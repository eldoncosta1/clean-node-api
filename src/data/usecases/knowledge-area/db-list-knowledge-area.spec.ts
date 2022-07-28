import { IKnowledgeAreaRepository } from './db-knowledge-area-protocols'
import { ListKnowledgeArea } from './db-list-knowledge-area'

class KnowledgeAreaRepositoryStub implements IKnowledgeAreaRepository {
  async list (): Promise<any[]> {
    return new Promise(resolve => resolve([]))
  }
}

interface SutTypes {
  sut: ListKnowledgeArea
  knowledgeAreaRepositoryStub: IKnowledgeAreaRepository
}

const makeSut = (): SutTypes => {
  const knowledgeAreaRepositoryStub = new KnowledgeAreaRepositoryStub()
  const sut = new ListKnowledgeArea(knowledgeAreaRepositoryStub)
  return {
    sut,
    knowledgeAreaRepositoryStub
  }
}

describe('ListKnowledgeArea Usecase', () => {
  it('Should call ListKnowledgeAreaRepository correctly', async () => {
    const { sut, knowledgeAreaRepositoryStub } = makeSut()

    const listSpy = jest.spyOn(knowledgeAreaRepositoryStub, 'list')

    await sut.handle()
    expect(listSpy).toHaveBeenCalled()
  })

  it('Should throw if method ListKnowledgeArea throws', async () => {
    const { sut, knowledgeAreaRepositoryStub } = makeSut()

    jest.spyOn(knowledgeAreaRepositoryStub, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))

    const promise = sut.handle()

    await expect(promise).rejects.toThrow()
  })
})
