import { SortOrder } from "../../util/SortOrder";

export type IsAdminOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ordersId?: SortOrder;
  paymentintent?: SortOrder;
  paymentstatus?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  reviewsId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
