import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { makeKnowledgeAreaController } from '@/main/factories/knowledge-area'

export default (router: Router): void => {
  router.get('/knowledge-area', adaptRoute(makeKnowledgeAreaController()))
}
