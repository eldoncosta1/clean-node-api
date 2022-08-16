import { KnowledgeAreaModel } from '@/domain/models/knowledge-area'

export const IKnowledgeAreaRepository = 'IKnowledgeAreaRepository'
export interface IKnowledgeAreaRepository {
  list (): Promise<KnowledgeAreaModel[]>
}
