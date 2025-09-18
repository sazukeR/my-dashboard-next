import { CartCounter } from "@/app/shopping-cart/components";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
 title: "Shopping Cart",
 description: "Un simple contador",
};

export default function NamePage() {
 return (
  <div className="flex flex-col items-center justify-center w-full h-full">
   <span>Productos en el carrito</span>

   <CartCounter count={20} />
  </div>
 );
}
