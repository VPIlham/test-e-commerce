import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../CustomButton';
import { isMobileDevice } from '@/shared/helpers/utils';
import Cookies from 'js-cookie';

const NavbarContainer = styled.nav`
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: ${isMobileDevice() ? '15px 10px !important' : '15px 30px !important'} ;
  background-color: #ffffff !important;
  overflow: hidden !important;
  z-index: 999 !important;
  position: fixed; 
  top: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const CartBadge = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  font-size: 12px;
  position: relative;
  top: -10px;
  right: -10px;
`;

const CartContainer = styled.div`
  position: relative;
`;

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setIsMobile(isMobileDevice());

    const cartItems = Cookies.get('cart') ? JSON.parse(Cookies.get('cart') || '[]') : [];
    const total = cartItems.reduce((sum: number, item: any) => sum + Number(item.quantity), 0);
    setCartTotal(total);
  }, []);

  return (
    <NavbarContainer>
      <Logo>
        <Image src={'/logo_evermos.png'} alt="Logo" width={isMobile ? 120 : 210} height={isMobile ? 30 : 50} />
      </Logo>

      <ButtonContainer>
        <CartContainer>
          <Image src={'/checkout.png'} alt="checkout" width={24} height={24} />
          {cartTotal > 0 && <CartBadge>{cartTotal}</CartBadge>}
        </CartContainer>
        <CustomButton variant="outline">Masuk / Register</CustomButton>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
