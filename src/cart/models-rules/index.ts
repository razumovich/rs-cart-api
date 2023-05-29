import { Cart } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  // This is yet to be fixed
  return 1;
  // return cart ? cart.items.reduce((acc: number, { product: { price }, count }: CartItem) => {
  //   return acc += price * count;
  // }, 0) : 0;
}
