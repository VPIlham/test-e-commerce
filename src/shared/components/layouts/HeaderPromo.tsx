import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CustomImageResponsive from '@/shared/components/CustomImageResponsive';

const HeaderPromo = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
        }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination]}
                style={{
                    width: '100%',
                }}
            >
                <SwiperSlide>
                    <CustomImageResponsive alt='promo' src='/banner-1.png' width={1100} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <CustomImageResponsive alt='promo' src='/banner-2.png' width={1100} height={400} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeaderPromo;
