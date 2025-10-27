'use client';

import { buyProduct } from './actions';

interface BuyButtonProps {
  productId: number;
}

export default function BuyButton({ productId }: BuyButtonProps) {
  return (
    <form action={() => buyProduct(productId)}>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Buy
      </button>
    </form>
  );
}
