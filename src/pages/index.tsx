import HeaderPromo from '@/shared/components/layouts/HeaderPromo';
import SectionProducts from '@/shared/components/layouts/SectionProducts';
import { isMobileDevice } from '@/shared/helpers/utils';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(isMobileDevice());
        }
    }, []);

    return (
        <CenterContent isMobile={isMobile}>
            <HeaderPromo />
            <SectionProducts />
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

export default Home;
