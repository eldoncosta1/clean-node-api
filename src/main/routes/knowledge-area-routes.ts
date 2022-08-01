import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeKnowledgeAreaController } from '../factories/knowledge-area'

export default (router: Router): void => {
  router.get('/knowledge-area', adaptRoute(makeKnowledgeAreaController()))
}
