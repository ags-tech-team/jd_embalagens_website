import styled from 'styled-components';

export const ButtonContainer = styled.button<{ variant: string }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => {
    switch(props.variant) {
      case 'vibrant':
        return `
          background: ${props.theme.colors.vibrant};
          color: ${props.theme.colors.white};
        `;
      case 'dark':
        return `
          background: ${props.theme.colors.dark};
          color: ${props.theme.colors.white};
        `;
      case 'outline':
        return `
          background: transparent;
          border: 2px solid ${props.theme.colors.royal};
          color: ${props.theme.colors.royal};
        `;
      default:
        return `
          background: ${props.theme.colors.royal};
          color: ${props.theme.colors.white};
        `;
    }
  }}

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
};`