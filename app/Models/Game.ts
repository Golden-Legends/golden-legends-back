import {BaseModel, column, HasMany} from '@ioc:Adonis/Lucid/Orm'
import {hasMany} from "@adonisjs/lucid/build/src/Orm/Decorators";
import Score from "App/Models/Score";

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @hasMany(() => Score)
  public scores: HasMany<typeof Score>
}
