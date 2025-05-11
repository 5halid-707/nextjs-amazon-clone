import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number;
  user?: IsAdminWhereUniqueInput | null;
};
