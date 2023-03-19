import { DATABASE } from '../config/config.js'
import { createFactory } from '../db/factory.js'

// const {userDaoContainer, productDaoContainer, orderDaoContainer} = await createFactory(DATABASE)
export const { productDaoContainer } = await createFactory(DATABASE)

