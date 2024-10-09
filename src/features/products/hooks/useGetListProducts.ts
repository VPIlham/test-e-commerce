import { fetchListProducts } from "@/shared/api/fetch/products";
import { useQuery } from "@tanstack/react-query";

const useGetListProducts = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchListProducts(),
  });
  return {
    isPending,
    isError,
    data,
    error,
  };
};

export default useGetListProducts;
