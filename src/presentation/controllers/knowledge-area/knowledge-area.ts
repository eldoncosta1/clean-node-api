import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class KnowledgeAreaController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = {
      statusCode: 200,
      body: [
        {
          id: '1'
        }
      ]
    }

    return new Promise(resolve => resolve(httpResponse))
  }
}
