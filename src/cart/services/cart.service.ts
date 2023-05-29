import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { v4 } from 'uuid';

import { Cart, CartItem } from '../models';

@Injectable()
export class CartService {
  constructor(
      @InjectRepository(Cart)
      private readonly cartRepo: Repository<Cart>,

      @InjectRepository(CartItem)
      private readonly cartItemRepo: Repository<CartItem>,
  ) {}

  findByUserId(userId: string): Promise<Cart>  {
    return this.cartRepo
        .createQueryBuilder('cart')
        .leftJoinAndSelect('cart.items', 'item')
        .where('cart.user_id = :userId', { userId })
        .getOne();
  }

  async createByUserId(userId: string) {
    const id = v4();
    const userCart: Cart = {
      id,
      user_id: userId,
      created_at: new Date(),
      updated_at: new Date(),
      status: 'OPEN',
      items: [],
    };

    const result = await this.cartRepo.insert(userCart);
    return result.raw;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }): Promise<Cart> {
    const { id, ...rest } = await this.findOrCreateByUserId(userId);

    console.log(id, rest, items);

    const updatedCart: Partial<Cart> = {
      id,
      ...rest,
      items: [ ...items ],
    }

    return await this.cartRepo.save({ ...updatedCart });
  }

  async removeByUserId(userId: string): Promise<Cart> {
    const result = await this.cartRepo.delete({id: userId});
    return result.raw;
  }

}
