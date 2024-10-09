/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";

type CustomCardProps = {
    children: React.ReactNode;
    props?: any;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    height?: number;
    width?: number;
};

const CustomCard: React.FC<CustomCardProps> = ({ children, maxWidth, maxHeight, ...props }) => {
    return (
        <CardContainer maxWidth={maxWidth} maxHeight={maxHeight} props={props}>
            {children}
        </CardContainer>
    );
};

const CardContainer = styled.div<CustomCardProps>`
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'auto')};
    max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : 'auto')};
    min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 'auto')};
    min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : 'auto')};
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-radius: 4px;
    background-color: #fcfcfc;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    img {
        width: 100%;
        height: 200px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

export default CustomCard;
