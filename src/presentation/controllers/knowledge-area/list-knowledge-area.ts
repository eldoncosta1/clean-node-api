import { Controller, HttpRequest, HttpResponse, ListKnowledgeArea } from './knowledge-area-protocols'
import { ok, serverError } from '../../helpers/http-helper'

export class ListKnowledgeAreaController implements Controller {
  private readonly listKnowledgeArea: ListKnowledgeArea

  constructor (listKnowledgeArea: ListKnowledgeArea) {
    this.listKnowledgeArea = listKnowledgeArea
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const listKnowledgeArea = await this.listKnowledgeArea.handle()
      return ok(listKnowledgeArea)
    } catch (error) {
      return serverError(error)
    }
  }
}
