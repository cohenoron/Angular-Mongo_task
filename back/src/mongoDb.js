import dotenv from 'dotenv'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

dotenv.config()

const bankSchema = new Schema({
  accountNo: { type: Number, required: true },
  action: { type: String, required: true },
  amount: { type: Number, required: true },
  payments: { type: Number, required: false },
  rate: { type: Number, required: false },
})

export const AccountOperations = mongoose.model('AccountOperations', bankSchema)

const createNewAction = async (accountNo, action, amount, payments, rate) => {
  const newAction = new AccountOperations({
    accountNo,
    action,
    amount,
    payments,
    rate,
  })
  const addAction = await newAction.save()
  return addAction
}

export { createNewAction }
