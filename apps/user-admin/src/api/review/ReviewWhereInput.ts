import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntFilter;
  user?: IsAdminWhereUniqueInput;
};
