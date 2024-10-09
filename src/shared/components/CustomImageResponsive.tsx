import Image from 'next/image';
import styled from 'styled-components';

interface CustomResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  cursor?: string;
}

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover; 
  }
`;

const CustomResponsiveImage: React.FC<CustomResponsiveImageProps> = ({ src, alt, width, height, cursor, ...props }) => {
  return (
    <StyledImageWrapper>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        style={{ cursor: cursor }}
        {...props}
      />
    </StyledImageWrapper>
  );
};

export default CustomResponsiveImage;
