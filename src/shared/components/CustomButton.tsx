import styled, { css } from 'styled-components';

type ButtonProps = {
    variant?: 'primary' | 'danger' | 'warning' | 'outline';
    children: React.ReactNode;
};

const buttonVariants = {
    primary: css`
    background-color: #007bff;
    color: white;
    border: 1px solid #007bff;

    &:hover {
      background-color: #0056b3;
    }
  `,
    danger: css`
    background-color: #dc3545;
    color: white;
    border: 1px solid #dc3545;

    &:hover {
      background-color: #c82333;
    }
  `,
    warning: css`
    background-color: #ffc107;
    color: black;
    border: 1px solid #ffc107;

    &:hover {
      background-color: #e0a800;
    }
  `,
    outline: css`
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ variant = 'primary' }) => buttonVariants[variant]};

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.9rem; 
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.8rem; 
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    padding: 0.6rem 1.2rem; 
    font-size: 1.1rem;
  }
`;

const CustomButton: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
    return <StyledButton {...props} variant={variant}>{children}</StyledButton>;
};

export default CustomButton;
