import { Column, Entity, PrimaryColumn } from "typeorm";

// Faz a ligação com a tabela users no db
@Entity("users")
class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}

export { UserEntity };
