import { IsAdmin } from "../isAdmin/IsAdmin";

export type Order = {
  createdAt: Date;
  id: string;
  isAdmins?: IsAdmin | null;
  updatedAt: Date;
  user?: IsAdmin | null;
};
