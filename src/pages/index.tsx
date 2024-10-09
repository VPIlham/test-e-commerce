import HeaderPromo from '@/shared/components/layouts/HeaderPromo';
import SectionProducts from '@/shared/components/layouts/SectionProducts';
import { isMobileDevice } from '@/shared/helpers/utils';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <CenterContent>
            <HeaderPromo />
            <SectionProducts />
        </CenterContent>
    );
};

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${isMobileDevice() ? '100%' : '70%'};
    margin: 0 auto;
    text-align: left;
    margin-bottom: ${isMobileDevice() ? '100px' : '80px'};
`;

export default Home;
