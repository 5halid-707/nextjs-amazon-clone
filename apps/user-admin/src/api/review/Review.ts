import { IsAdmin } from "../isAdmin/IsAdmin";

export type Review = {
  createdAt: Date;
  id: string;
  rating: number;
  updatedAt: Date;
  user?: IsAdmin | null;
};
