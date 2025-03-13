import { z } from "zod";
import { insertProductsSChema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductsSChema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
