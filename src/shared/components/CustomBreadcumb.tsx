import React from 'react';
import styled from 'styled-components';

const BreadcrumbNav = styled.nav`
  margin: 16px 0;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BreadcrumbItem = styled.li`
  margin-right: 8px;

  &::after {
    content: '/';
    margin-left: 8px;
  }

  &:last-child::after {
    content: '';
  }

  &.active {
    color: #6c757d; 
    pointer-events: none;
    cursor: default;
  }
`;

const BreadcrumbLink = styled.a`
  text-decoration: none;
  color: #007bff; 

  &:hover {
    text-decoration: underline;
  }
`;

interface BreadcrumbProps {
    items: { name: string; link?: string }[];
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <BreadcrumbNav aria-label="breadcrumb">
            <BreadcrumbList>
                {items.map((item, index) => (
                    <BreadcrumbItem key={index} className={index === items.length - 1 ? 'active' : ''}>
                        {item.link ? (
                            <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
                        ) : (
                            <span>{item.name}</span>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </BreadcrumbNav>
    );
};

export default CustomBreadcrumb;
