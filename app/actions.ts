'use server';

import { redirect } from 'next/navigation';

export async function buyProduct(productId: number) {
  redirect(`https://google.com/?q=${productId}`);
}
