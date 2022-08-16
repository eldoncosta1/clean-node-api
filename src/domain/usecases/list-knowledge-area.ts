import { KnowledgeAreaModel } from '@/domain/models/knowledge-area'

export interface ListKnowledgeAreaModel {
  id: string
  code: string
  title: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface ListKnowledgeArea {
  handle: () => Promise<KnowledgeAreaModel[]>
}
