import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

enum CartStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED'
}

@Entity({ name: 'carts', schema: 'readthebook' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'enum', enum: CartStatus, nullable: false })
  status: string;

  @OneToMany(() => CartItem, item => item.cart)
  items: CartItem[]
}

@Entity({ name: 'cart_items', schema: 'readthebook' })
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  cart_id: string;

  @Column({ type: 'uuid', nullable: false })
  product_id: string;

  @Column({ type: 'integer', nullable: false })
  count: number;

  @ManyToOne(() => Cart, cart => cart.items)
  cart: Cart
}

