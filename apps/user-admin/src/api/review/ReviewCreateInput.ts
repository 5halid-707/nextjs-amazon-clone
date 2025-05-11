import { IsAdminWhereUniqueInput } from "../isAdmin/IsAdminWhereUniqueInput";

export type ReviewCreateInput = {
  rating: number;
  user?: IsAdminWhereUniqueInput | null;
};
