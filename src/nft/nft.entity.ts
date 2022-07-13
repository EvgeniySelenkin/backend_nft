import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nfts')
export class Nft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  name: string;

  @Column('varchar')
  photo: string;

  @Column('varchar')
  description: string;

  @Column('int', {nullable: true})
  userId: User['id']

  @ManyToOne(type => User, user => user.collection, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'userId'})
  user: User;

  @Column('float')
  price: number;

}