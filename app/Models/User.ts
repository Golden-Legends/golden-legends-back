import { DateTime } from 'luxon'
import {BaseModel, column, HasMany} from '@ioc:Adonis/Lucid/Orm'
import {beforeSave, hasMany} from "@adonisjs/lucid/build/src/Orm/Decorators";
import Hash from "@ioc:Adonis/Core/Hash";
import Score from "App/Models/Score";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public name: string

  @column()
  public password: string

  @column()
  public remember_me_token: string

  @hasMany(() => Score)
  public scores: HasMany<typeof Score>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
