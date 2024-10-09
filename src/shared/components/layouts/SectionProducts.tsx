import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomCard from "../CustomCard";
import SellerInfo from "../SellerInfo";
import RatingStar from "../RatingStar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SectionProducts: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const iphoneImage =
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-134607074/apple_iphone_15_full15_ud4iln1m.jpeg";

    // Simulasi loading (misalnya, ini adalah proses pengambilan data dari API)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false); // Setelah 2 detik, simulasi data yang selesai dimuat
        }, 2000);

        return () => clearTimeout(timeout); // Membersihkan timeout jika komponen di-unmount
    }, []);

    return (
        <section>
            <h1>Belanja lebih asik dengan banyak promo</h1>
            <div className="product-list">
                <CustomCard height={200} width={200}>
                    {loading ? (
                        <Skeleton height={190} width={210} />
                    ) : (
                        <Image alt="iphone 13" width={210} height={190} src={iphoneImage} />
                    )}

                    <h3 className="title-item">
                        {loading ? <Skeleton width={150} /> : "Iphone 13"}
                    </h3>

                    <label className="price-text">
                        {loading ? <Skeleton width={100} /> : "Rp11.000.000"}
                    </label>
                    <label className="price-text-discount">
                        {loading ? <Skeleton width={100} /> : "Rp11.500.000"}
                    </label>

                    {loading ? (
                        <Skeleton width={150} height={20} />
                    ) : (
                        <SellerInfo />
                    )}

                    {loading ? (
                        <Skeleton width={50} height={20} />
                    ) : (
                        <RatingStar rating={4.6} />
                    )}
                </CustomCard>
            </div>
        </section>
    );
};

export default SectionProducts;
