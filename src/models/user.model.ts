import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: bigint;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
  })
  email: string;

  @Column({
    type: DataType.TEXT,
  })
  password: string;

  // @Column({
  //   type: DataType.ENUM,
  //   values: ['male', 'female'],
  //   allowNull: false,
  // })
  // gender: string;
}
