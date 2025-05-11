import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { IsAdmin } from "../isAdmin/IsAdmin";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  discountedPrice: number;
  discription: JsonValue;
  id: string;
  images: JsonValue;
  isAdmins?: Array<IsAdmin>;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  varlants: JsonValue;
};
