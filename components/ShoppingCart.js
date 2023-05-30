"use client";
import { useState } from "react";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";
export default function ShoppingCart() {
const { shouldDisplayCart, cartCount, cartDetails } = useShoppingCart();
const [status, setStatus] = useState("idle");
return (
<div
className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 w-
80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-
opacity duration-500 ${
shouldDisplayCart ? "opacity-100" : "opacity-0"
}`}
>
{cartCount && cartCount > 0 ? (
<>
{Object.values(cartDetails ?? {}).map((entry) => (
<CartItem key={entry.id} item={entry} />
))}
<article className="mt-3 flex flex-col">
<button className="bg-emerald-50 hover:bg-emerald-500
hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5
rounded-md w-100">
{status !== "loading" ? "Proceed to checkout" :
"Loading..."}
</button>
</article>
</>
) : (
<div className="p-5">You have no items in your cart</div>
)}
</div>
);
}