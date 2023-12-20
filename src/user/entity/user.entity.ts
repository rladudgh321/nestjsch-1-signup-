import { RefreshToken } from 'src/auth/entity/refresh.entity';
import { Video } from 'src/video/entity/video.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../enum/user.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role })
  role: Role = Role.User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Video, (video) => video.user)
  videos: Video[];

  @OneToOne(() => RefreshToken, (refreshToken) => refreshToken.user)
  refreshToken: RefreshToken;
}

/**
 * docker ps --all //docker 컨테이너 확인
 *
 * docker exec -it <DOCKER CONTAINER ID> psql -U postgres //컨테이너 psql 접속
 *
 *   \dt    // 스키마 확인
 *
 *   \d+ user  // user 스키마 컬럼 속성 확인
 *
 *   select * from "user"; //user스키마의 데이터 확인
 *
 *   update "user" set role='USER';  //update user
 */
