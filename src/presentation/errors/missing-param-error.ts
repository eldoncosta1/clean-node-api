export class MissingParamError extends Error {
  constructor (paramsName: string) {
    super(`Missing params: ${paramsName}`)
    this.name = 'MissingParamError'
  }
}
