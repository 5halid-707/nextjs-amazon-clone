import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OrderCreateNestedManyWithoutIsAdminsInput } from "./OrderCreateNestedManyWithoutIsAdminsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type IsAdminCreateInput = {
  orders?: OrderWhereUniqueInput | null;
  paymentintent?: string | null;
  paymentstatus?: boolean | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  products?: OrderCreateNestedManyWithoutIsAdminsInput;
  reviews?: ReviewWhereUniqueInput | null;
  status?: InputJsonValue;
};
