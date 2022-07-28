import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account'

export const AddAccountRepository = 'AddAccountRepository'
export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
