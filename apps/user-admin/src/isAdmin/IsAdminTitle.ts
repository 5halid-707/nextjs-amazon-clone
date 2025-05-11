import { IsAdmin as TIsAdmin } from "../api/isAdmin/IsAdmin";

export const ISADMIN_TITLE_FIELD = "paymentintent";

export const IsAdminTitle = (record: TIsAdmin): string => {
  return record.paymentintent?.toString() || String(record.id);
};
