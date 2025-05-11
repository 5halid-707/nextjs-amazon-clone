import { Order } from "../order/Order";
import { Product } from "../product/Product";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type IsAdmin = {
  createdAt: Date;
  id: string;
  orders?: Order | null;
  paymentintent: string | null;
  paymentstatus: boolean | null;
  price: number | null;
  product?: Product | null;
  products?: Array<Order>;
  reviews?: Review | null;
  status: JsonValue;
  updatedAt: Date;
};
