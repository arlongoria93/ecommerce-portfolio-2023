import React from "react";
import { keyboards } from "@/data/keyboards";
//get params from url
import { useRouter } from "next/router";

const filterKeyboardBySlug = (id: string) => {
  const keyboard = keyboards.filter((keyboard) => {
    return keyboard.id.toString() === id;
  });

  return keyboard[0];
};

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const keyboard = filterKeyboardBySlug(slug as string);
  console.log(keyboard);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Product;
