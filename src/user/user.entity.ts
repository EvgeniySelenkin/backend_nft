import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Nft } from 'src/nft/nft.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  username: string;

  @Exclude({ toPlainOnly: true })
  @Column('varchar')
  password: string;

  @Column('varchar')
  photo: string;

  @Column('varchar')
  description: string;

  @OneToOne(type => Nft, nft => nft.user, { cascade: true})
  collection: Nft[]; 
}
