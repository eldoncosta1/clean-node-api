import { IKnowledgeAreaRepository } from './db-knowledge-area-protocols'

export class ListKnowledgeArea implements ListKnowledgeArea {
  private readonly knowledgeAreaRepository: IKnowledgeAreaRepository

  constructor (knowledgeAreaRepository: IKnowledgeAreaRepository) {
    this.knowledgeAreaRepository = knowledgeAreaRepository
  }

  async handle (): Promise<any[]> {
    return await this.knowledgeAreaRepository.list()
  }
}
