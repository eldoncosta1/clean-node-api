import {
  DependencyContainer,
  InjectionToken,
  instanceCachingFactory,
  Lifecycle
} from 'tsyringe'

import { IKnowledgeAreaRepository } from '../data/protocols/knowledge-area-repository'
import { KnowledgeAreaMongoRepository } from './db/mongodb/knowledge-area-repository/knowledge-area'

export function registerInfrastrucutureServices (container: DependencyContainer): void {
  container.register(IKnowledgeAreaRepository, KnowledgeAreaMongoRepository, {
    lifecycle: Lifecycle.ContainerScoped
  })
}
