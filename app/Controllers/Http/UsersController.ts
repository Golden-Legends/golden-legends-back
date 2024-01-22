// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {

  public async me({ auth }: HttpContextContract) {
    return auth.user
  }

  public async register ({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const name = request.input('name')
    const user = await User.create({ email, password, name })
    await auth.login(user)
    return user
  }

  public async login ({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    return await auth.attempt(email, password)
  }

  public async logout ({ auth }: HttpContextContract) {
    await auth.logout()
    return 'Logged out successfully'
  }
}
