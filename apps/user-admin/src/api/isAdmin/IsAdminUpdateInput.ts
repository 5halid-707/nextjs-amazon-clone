import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OrderUpdateManyWithoutIsAdminsInput } from "./OrderUpdateManyWithoutIsAdminsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type IsAdminUpdateInput = {
  orders?: OrderWhereUniqueInput | null;
  paymentintent?: string | null;
  paymentstatus?: boolean | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  products?: OrderUpdateManyWithoutIsAdminsInput;
  reviews?: ReviewWhereUniqueInput | null;
  status?: InputJsonValue;
};
