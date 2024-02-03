import { DateTime } from 'luxon'
import {BaseModel, belongsTo, BelongsTo, column, HasMany} from '@ioc:Adonis/Lucid/Orm'
import User from "App/Models/User";
import Game from "App/Models/Game";
import {hasMany} from "@adonisjs/lucid/build/src/Orm/Decorators";
import Record from "App/Models/Record";
export default class Score extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Game)
  public game: BelongsTo<typeof Game>

  @column()
  public score: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @hasMany(() => Record)
  public records: HasMany<typeof Record>
}
