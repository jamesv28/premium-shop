import { z } from "zod";
import { formatNumberWithDecimals } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimals(Number(value))),
    "Price must have two decimal places"
  );
// Schema for inserting products

export const insertProductsSChema = z.object({
  name: z.string().min(3, "Name must be at least three characters"),
  slug: z.string().min(3, "Slug must be at least three characters"),
  category: z.string().min(3, "Category must be at least three characters"),
  brand: z.string().min(3, "Brand must be at least three characters"),
  description: z
    .string()
    .min(3, "Description must be at least three characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
