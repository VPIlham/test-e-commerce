/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomBreadcrumb from "@/shared/components/CustomBreadcumb";
import CustomCard from "@/shared/components/CustomCard";
import { isMobileDevice, priceFormat } from "@/shared/helpers/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import useGetDetailProducts from "@/features/products/hooks/useGetDetailProducts";
import RatingStar from "@/shared/components/RatingStar";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import CustomButton from "@/shared/components/CustomButton";
import Cookies from 'js-cookie';


const DetailPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeImg, setActiveImg] = useState<string>('');
    const [imgData, setImageData] = useState<any>([]);
    const [quantity, setQuantity] = useState<any>(1);
    const router = useRouter();
    const { id, slug } = router.query;

    const { data, isPending } = useGetDetailProducts(id as string);

    console.log('router = ', router.query);
    console.log('router = ', router);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(isMobileDevice());
        }
        if (data) {
            setImageData(data?.images || []);
            setActiveImg(data?.images[0] || '');
        }
    }, [data]);

    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Product' },
        { name: String(slug) }
    ];

    const addToCart = (productId: string, quantity: number) => {
        const cartItems = Cookies.get('cart') ? JSON.parse(Cookies.get('cart') || '[]') : [];
        const existingItem = cartItems.find((item: any) => item.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ id: productId, quantity });
        }

        Cookies.set('cart', JSON.stringify(cartItems), { expires: 1 });

        alert('Product ditambahkan');
    };

    return (
        <CenterContent isMobile={isMobile}>
            <CustomBreadcrumb items={breadcrumbItems} />
            <hr />
            <FlexContainer>
                <ImageContainer isMobile={isMobile}>
                    <Zoom zoomMargin={1}>
                        {isPending ? (
                            <Skeleton height={500} width={500} />
                        ) : (
                            <Image
                                alt="Image"
                                src={activeImg}
                                width={500}
                                layout="responsive"
                                height={500}
                            />
                        )}
                    </Zoom>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        {isPending ? (
                            <Skeleton width={100} height={100} count={4} />
                        ) : (
                            imgData.map((item: string, index: number) => (
                                <div
                                    style={{ cursor: 'pointer', padding: item === activeImg ? '3px' : '0', backgroundColor: item === activeImg ? '#4F75FF' : 'white' }}
                                    key={index}
                                    onClick={() => setActiveImg(item)}
                                >
                                    <Image alt="img" width={100} height={100} src={item} />
                                </div>
                            ))
                        )}
                    </div>
                </ImageContainer>
                <SellerInfoContainer>
                    <CustomCard>
                        <h1 className="title-item">
                            {isPending ? <Skeleton width={200} /> : data?.name}
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 5 }}>
                            <h3 className="price-text">
                                {isPending ? <Skeleton width={100} /> : priceFormat(data?.price)}
                            </h3>
                            {!isPending && (
                                <p className="price-text-discount">{priceFormat(data?.price + 250000)}</p>
                            )}
                        </div>
                        <div>
                            <span>
                                {isPending ? <Skeleton width={150} /> : (
                                    <>
                                        <RatingStar rating={`${data?.rating} (${data?.reviews?.length ?? 0}) Terjual`} />
                                    </>
                                )}
                            </span>
                        </div>
                        <div style={{ marginTop: 5 }}>
                            <strong>Stok: </strong> {isPending ? <Skeleton width={100} /> : data?.stock}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 5 }}>
                            {isPending ? (
                                <Skeleton width={100} height={30} />
                            ) : (
                                <>
                                    <div style={{ padding: '3px 8px', backgroundColor: '#4F75FF', width: 'fit-content', color: 'white', borderRadius: 5 }}>
                                        Smartphone
                                    </div>
                                    <div style={{ padding: '3px 8px', backgroundColor: '#6EC207', width: 'fit-content', color: 'white', borderRadius: 5 }}>
                                        Gratis ongkir
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ marginTop: 5 }}>
                            <strong>Merk: </strong>
                            {isPending ? <Skeleton width={100} /> : <strong>{data?.brand}</strong>}
                            <div>
                                <span>Deskripsi: </span>
                                <p style={{ fontWeight: 300 }}>
                                    {isPending ? <Skeleton count={3} /> : data?.description}
                                </p>
                            </div>
                            <div style={{ marginTop: 10 }}>
                                {isPending ? (
                                    <Skeleton count={4} />
                                ) : (
                                    <>
                                        <div><strong>Processor:</strong> {data?.specifications?.processor}</div>
                                        <div><strong>Battery Capacity:</strong> {data?.specifications?.battery_capacity}</div>
                                        <div><strong>Camera:</strong> {data?.specifications?.camera}</div>
                                        <div><strong>RAM:</strong> {data?.specifications?.ram}</div>
                                        <div><strong>Storage:</strong> {data?.specifications?.storage}</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div style={{ marginTop: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ height: 40, width: 100 }} />
                            <CustomButton variant="primary" onClick={() => addToCart(data?.id, quantity)}>Pesan</CustomButton>
                        </div>
                    </CustomCard>
                    <br />
                    <CustomCard>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            {isPending ? (
                                <Skeleton circle={true} height={60} width={60} />
                            ) : (
                                <Image src='/user.png' width={60} height={60} alt='user' style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
                            )}
                            <span>
                                <h3 className="title-item">{isPending ? <Skeleton width={150} /> : data?.seller}</h3>
                                <div>
                                    {isPending ? <Skeleton width={100} /> : (
                                        <RatingStar rating={`${data?.rating} (${data?.reviews?.length ?? 0}) Terjual`} />
                                    )}
                                </div>
                                <div style={{ marginTop: 10 }}>
                                    {isPending ? (
                                        <Skeleton width={200} />
                                    ) : (
                                        <>
                                            <svg width="15px" height="15px" viewBox="-2 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.1397 4.05909C20.4929 1.35303 17.2979 0 13.5549 0C9.81179 0 6.61688 1.35303 3.97014 4.05909C1.32338 6.76515 0 10.0317 0 13.8586C0 17.6855 1.32338 20.952 3.97014 23.6582L11.1323 30.9808C12.4615 32.3397 14.6483 32.3397 15.9775 30.9808L23.1397 23.6582C25.7864 20.952 27.1097 17.6855 27.1097 13.8586C27.1097 10.0317 25.7864 6.76515 23.1397 4.05909Z" fill="url(#paint0_radial_103_1597)"></path>
                                                <defs>
                                                    <radialGradient id="paint0_radial_103_1597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5549) rotate(90) scale(32 27.1097)">
                                                        <stop stopColor="#A2E458"></stop>
                                                        <stop offset="1" stopColor="#5AD010"></stop>
                                                    </radialGradient>
                                                </defs>
                                            </svg>
                                            <label style={{ marginLeft: 5, fontSize: 14 }}>{data?.location}</label>
                                        </>
                                    )}
                                </div>
                            </span>
                        </div>
                    </CustomCard>
                    <br />
                    <CustomCard>
                        <h2>Ulasan</h2>
                        <hr />
                        {isPending ? (
                            <Skeleton count={3} height={50} />
                        ) : data?.reviews?.length > 0 ? (
                            data.reviews.map((review: any, index: number) => (
                                <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Image src='/user.png' width={40} height={40} alt='user' style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
                                        <strong>{review.user}</strong>
                                    </div>
                                    <p style={{ marginTop: '5px' }}>{review.comment}</p>
                                    <div>Rating: {'⭐'.repeat(review.rating)}</div>
                                </div>
                            ))
                        ) : (
                            <p>Review Kosong.</p>
                        )}
                    </CustomCard>
                </SellerInfoContainer>
            </FlexContainer>
        </CenterContent>
    );
};

const CenterContent = styled.div<{ isMobile: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ isMobile }) => (isMobile ? '95%' : '70%')};
    margin: 0 auto;
    text-align: left;
    margin-bottom: ${({ isMobile }) => (isMobile ? '100px' : '80px')};
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
`;

const ImageContainer = styled.div<{ isMobile: boolean }>`
    width: ${({ isMobile }) => (isMobile ? '100%' : '40%')} ;
    overflow: hidden;
`;

const SellerInfoContainer = styled.div`
    flex: 1;
    min-width: 300px;
`;

export default DetailPage;
