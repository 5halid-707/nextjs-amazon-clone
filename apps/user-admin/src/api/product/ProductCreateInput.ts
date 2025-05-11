import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { IsAdminCreateNestedManyWithoutProductsInput } from "./IsAdminCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  discountedPrice: number;
  discription: InputJsonValue;
  images: InputJsonValue;
  isAdmins?: IsAdminCreateNestedManyWithoutProductsInput;
  title: string;
  titlePrice: number;
  varlants: InputJsonValue;
};
