import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class HealthController {

  public async health({ response }: HttpContextContract) {
    return response.status(200).send('OK')
  }
}
