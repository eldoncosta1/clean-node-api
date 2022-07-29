import { IKnowledgeAreaRepository } from '../../../../data/protocols/db/knowledge-area-repository'
import { KnowledgeAreaModel } from '../../../../domain/models/knowledge-area'
import { MongoHelper } from '../helpers/mongo-helper'

export class KnowledgeAreaMongoRepository implements IKnowledgeAreaRepository {
  async list (): Promise<KnowledgeAreaModel[]> {
    const knowledgeAreaCollection = MongoHelper.getCollection('knowledge_areas')
    const result = await knowledgeAreaCollection.find().toArray()
    const list = result.map(item => MongoHelper.map(item))
    return list
  }
}
