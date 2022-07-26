import { MongoHelper } from '../helpers/mongo-helper'
import { AddAccountModel } from '@/domain/usecases/add-account'
import { AccountModel } from '@/domain/models/account'
import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { LoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '@/data/protocols/db/account/update-access-token-repository'

interface AccountMongo {
  _id: string
  name: string
  email: string
  password: string
}

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne<AccountMongo>(result.insertedId)

    return MongoHelper.map(account)
  }

  async loadByEmail (email: string): Promise<AccountModel | null> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne<AccountMongo>({ email })

    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }
}
