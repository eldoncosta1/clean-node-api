import { ListKnowledgeAreaController } from '../../presentation/controllers/knowledge-area/list-knowledge-area'
import { DbListKnowledgeArea } from '../../data/usecases/knowledge-area/db-list-knowledge-area'
import { KnowledgeAreaMongoRepository } from '../../infra/db/mongodb/knowledge-area-repository/knowledge-area'
import { Controller } from '../../presentation/protocols'
import { container } from 'tsyringe'

export const makeKnowledgeAreaController = (): Controller => {
  // const knowledgeAreaRepository = new KnowledgeAreaMongoRepository()
  // const listKnowledgeArea = new ListKnowledgeArea(knowledgeAreaRepository)
  const listKnowledgeArea = container.resolve(DbListKnowledgeArea)
  return new ListKnowledgeAreaController(listKnowledgeArea)
}
