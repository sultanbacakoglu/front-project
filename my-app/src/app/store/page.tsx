"use client";

import { useRouter } from "next/navigation";

export default function Store() {
    const router = useRouter();

    const handleClick = () => {
        router.push("./game")
    }

  return (
    <>
      <h1>Store</h1>
      <button onClick={handleClick}>Back To Field</button>
    </>
  );
}
