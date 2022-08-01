import { Controller, HttpRequest, HttpResponse, ListKnowledgeArea } from './knowledge-area-protocols'
import { ok, serverError } from '../../helpers/http/http-helper'

export class ListKnowledgeAreaController implements Controller {
  constructor (
    private readonly listKnowledgeArea: ListKnowledgeArea) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const listKnowledgeArea = await this.listKnowledgeArea.handle()
      return ok(listKnowledgeArea)
    } catch (error) {
      return serverError(error)
    }
  }
}
