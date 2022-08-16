import 'reflect-metadata'
import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import env from '@/main/config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    console.log('Connected to Mongo')
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running on http://localhost:${env.port}`))
  })
  .catch(console.error)
