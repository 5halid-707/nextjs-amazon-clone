import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type IsAdminWhereInput = {
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  paymentintent?: StringNullableFilter;
  paymentstatus?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  products?: OrderListRelationFilter;
  reviews?: ReviewWhereUniqueInput;
  status?: JsonFilter;
};
