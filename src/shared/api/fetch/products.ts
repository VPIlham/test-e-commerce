import { FETCH_DETAIL_PRODUCT, LIST_PRODUCTS } from "../../constant/endpoint";
import AxiosInstance from "../axiosInstance";

const fetchListProducts = async () => {
  const res = await AxiosInstance.get(LIST_PRODUCTS);

  if (!res) {
    throw new Error("Something wrong");
  }

  return res?.data;
};

const fetchDetailProduct = async (id: string) => {
  if (id) {
    const res = await AxiosInstance.get(FETCH_DETAIL_PRODUCT(id));

    if (!res) {
      throw new Error("Something wrong");
    }
    return res?.data;
  }
};

export { fetchListProducts, fetchDetailProduct };
