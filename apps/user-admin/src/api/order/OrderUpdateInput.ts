import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type OrderUpdateInput = {
  isAdmins?: IsAdminWhereUniqueInput | null;
  user?: IsAdminWhereUniqueInput | null;
};
