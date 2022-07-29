import { scoped, inject, Lifecycle } from 'tsyringe'
import { IKnowledgeAreaRepository } from './db-knowledge-area-protocols'

@scoped(Lifecycle.ContainerScoped)
export class ListKnowledgeArea {
  // private readonly knowledgeAreaRepository: IKnowledgeAreaRepository

  constructor (
    @inject(IKnowledgeAreaRepository)
    private readonly knowledgeAreaRepository: IKnowledgeAreaRepository
  ) {
    // this.knowledgeAreaRepository = knowledgeAreaRepository
  }

  async handle (): Promise<any[]> {
    return await this.knowledgeAreaRepository.list()
  }
}
