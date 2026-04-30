import { ButtonContainer } from './styles';

interface ButtonProps {
  variant?: 'royal' | 'vibrant' | 'dark' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant = 'royal', children, onClick }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};