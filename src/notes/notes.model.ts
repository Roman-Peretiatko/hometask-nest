import {Column, DataType, Model, Table} from "sequelize-typescript";

interface NoteCreationAttributes {
    noteName: string
    category: string
    content?: string
}


@Table({tableName: 'notes'})
export class Note extends Model<Note, NoteCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    noteName: string

    @Column({type: DataType.STRING, allowNull: true})
    creationDate: string

    @Column({type: DataType.STRING, allowNull: false})
    category: string

    @Column({type: DataType.STRING, allowNull: true})
    content: string

    @Column({type: DataType.STRING, allowNull: true})
    dates: string
}

