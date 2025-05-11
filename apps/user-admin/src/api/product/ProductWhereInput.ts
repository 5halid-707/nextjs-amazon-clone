import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { IsAdminListRelationFilter } from "../isAdmin/IsAdminListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  discountedPrice?: FloatFilter;
  discription?: JsonFilter;
  id?: StringFilter;
  images?: JsonFilter;
  isAdmins?: IsAdminListRelationFilter;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  varlants?: JsonFilter;
};
