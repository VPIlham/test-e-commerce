/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomCard from "../CustomCard";
import SellerInfo from "../SellerInfo";
import RatingStar from "../RatingStar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGetListProducts from "@/features/products/hooks/useGetListProducts";
import { isMobileDevice, priceFormat } from "@/shared/helpers/utils";
import { styled } from "styled-components";
import { useRouter } from "next/router";

interface ProductProps {
    id: number;
    name: string;
    rating: number;
    price: number;
    images: string[];
    seller: string;
    location: string;
    reviews: any[];
}

const SectionProducts: React.FC = () => {
    const { data, isPending } = useGetListProducts();
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(isMobileDevice());
        }
    }, []);

    console.log('data = ', data);
    return (
        <section>
            <br />
            <h1>Belanja lebih asik dengan banyak promo</h1>
            <ProductList isMobile={isMobile}>
                {
                    isPending ? (
                        Array.from({ length: 10 }).map((_, index) => (
                            <SkeletonProduct key={index} />
                        ))
                    ) : (
                        data?.map((product: ProductProps) => (
                            <CustomCard height={200} key={product.id}>
                                <Image alt="iphone 13" width={210} height={190} src={product?.images[0]} />
                                <h3 className="title-item" onClick={() => {
                                    router.push(`/detail/${product.name}?id=${product.id}`);
                                }}>{product.name}</h3>
                                <label className="price-text">{priceFormat(product.price)}</label>
                                <label className="price-text-discount">{priceFormat(product.price + 250000)}</label>
                                <SellerInfo location={product?.location} seller={product?.seller} />
                                <RatingStar rating={product?.rating.toString()} />
                            </CustomCard>
                        ))
                    )
                }
            </ProductList>
        </section>
    );
};

const ProductList = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ isMobile }) => (isMobile ? 2 : 5)}, 1fr);
  gap: 12px;
  margin-top: 15px;
`;

const SkeletonProduct: React.FC = () => (
    <>
        <Skeleton height={190} width={210} />
        <h3><Skeleton width={150} /></h3>
        <Skeleton width={100} />
        <Skeleton width={100} />
        <Skeleton width={150} height={20} />
        <Skeleton width={50} height={20} />
    </>
);


export default SectionProducts;
