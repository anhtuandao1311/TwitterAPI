import { body } from 'express-validator'
import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersServices from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'tuan' && password === 'ok') {
    res.json({
      message: 'Login succeeded'
    })
  }
  return res.status(400).json({
    message: 'Login failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersServices.register(req.body)
    return res.json({
      message: 'Registered successfully',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Login failed',
      error
    })
  }
}
