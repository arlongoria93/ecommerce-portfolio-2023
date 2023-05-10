// pages/api/keyboard/[id].ts

import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
import { Keyboard } from "@/types/Keyboard";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/keyboards.json",
    "utf8"
  );
  const keyboards = JSON.parse(fileContents);

  const products = keyboards.products;
  const keyboard = products.find(
    (product: Keyboard) => product.id.toString() === id
  );
  if (!keyboard) {
    res.status(404).json({ message: "Keyboard not found" });
  } else {
    res.status(200).json(keyboard);
  }
}
