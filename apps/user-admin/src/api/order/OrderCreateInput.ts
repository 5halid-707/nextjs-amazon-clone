import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type OrderCreateInput = {
  isAdmins?: IsAdminWhereUniqueInput | null;
  user?: IsAdminWhereUniqueInput | null;
};
