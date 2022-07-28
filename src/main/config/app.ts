import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import { registerInfrastrucutureServices } from '../../infra/dependency-injection'

import { container } from 'tsyringe'

registerInfrastrucutureServices(container)

const app = express()
setupMiddlewares(app)
setupRoutes(app)

export default app
