import { ListKnowledgeAreaController } from '../../presentation/controllers/knowledge-area/list-knowledge-area'
import { ListKnowledgeArea } from '../../data/usecases/knowledge-area/db-list-knowledge-area'
import { KnowledgeAreaMongoRepository } from '../../infra/db/mongodb/knowledge-area-repository/knowledge-area'
import { Controller } from '../../presentation/protocols'

export const makeKnowledgeAreaController = (): Controller => {
  const knowledgeAreaRepository = new KnowledgeAreaMongoRepository()
  const listKnowledgeArea = new ListKnowledgeArea(knowledgeAreaRepository)
  return new ListKnowledgeAreaController(listKnowledgeArea)
}
