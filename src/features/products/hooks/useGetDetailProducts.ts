import { fetchDetailProduct } from "@/shared/api/fetch/products";
import { useQuery } from "@tanstack/react-query";

const useGetDetailProducts = (id: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["detail_product"],
    queryFn: () => {
      if (id) {
        return fetchDetailProduct(id);
      }
    },
    enabled: !!id,
  });
  return {
    isPending,
    isError,
    data,
    error,
  };
};

export default useGetDetailProducts;
