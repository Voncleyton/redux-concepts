import { table } from "console";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import cart from "../../store/modules/cart/reducer";
import { ICartItem } from "../../store/modules/cart/types";

export default function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <th>{item.product.title}</th>
            <th>{item.product.price}</th>
            <th>{item.quantity}</th>
            <th>{(item.product.price * item.quantity).toFixed(2)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
