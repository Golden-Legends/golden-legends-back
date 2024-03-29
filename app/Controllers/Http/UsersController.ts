// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Ws from "App/Services/Ws";

export default class UsersController {

  public async me({ auth }: HttpContextContract) {
    if (!auth.user) {
      return 'You are not logged in'
    }

    return {
      email: auth.user.email,
      name: auth.user.name,
    }
  }

  public async register ({  auth, request, response}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const name = request.input('name')
    if (!email || !password || !name) {
      return 'Missing information!'
    }

    // Check if the user email already exists in the database
    const existingUser: User | null = await User.query().where('email', email).first()
    if (existingUser) {
      return response.status(400).send('User already exists')
    }

    const user = await User.create({
      email,
      password,
      name,
    })
    await auth.login(user)
    return response.status(200).send({email, name})
  }

  public async login ({ request, auth }: HttpContextContract) {
    const name = request.input('name')
    const password = request.input('password')
    if (await auth.attempt(name, password)) {
      return {
        name,
        email: auth.user?.email,
      }
    }
  }

  public async logout ({ auth }: HttpContextContract) {
    await auth.logout()
    return 'Logged out successfully'
  }

  public async joinMainLobby ({ request }: HttpContextContract) {
    // Get player name from the request
    const playerName = request.input('playerName')

    // Emit an event to the main lobby
    Ws.io.emit('joinMainLobby', playerName)
  }
}
