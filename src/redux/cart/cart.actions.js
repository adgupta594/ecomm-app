import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});
