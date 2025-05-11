import { StringFilter } from "../../util/StringFilter";
import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  isAdmins?: IsAdminWhereUniqueInput;
  user?: IsAdminWhereUniqueInput;
};
