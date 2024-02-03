import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Score from "App/Models/Score";

export default class Record extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Score)
  public score: BelongsTo<typeof Score>
}
