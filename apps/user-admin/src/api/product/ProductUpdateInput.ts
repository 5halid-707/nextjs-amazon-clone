import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { IsAdminUpdateManyWithoutProductsInput } from "./IsAdminUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  discountedPrice?: number;
  discription?: InputJsonValue;
  images?: InputJsonValue;
  isAdmins?: IsAdminUpdateManyWithoutProductsInput;
  title?: string;
  titlePrice?: number;
  varlants?: InputJsonValue;
};
