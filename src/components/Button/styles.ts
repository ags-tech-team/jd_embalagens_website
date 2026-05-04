import styled from 'styled-components';

export const ButtonContainer = styled.button<{ $variant: string }>`
  padding: 14px 32px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  ${props => {
    switch(props.$variant) {
      case 'vibrant':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.vibrant}, #0088cc);
          color: ${props.theme.colors.white};
          box-shadow: 0 4px 15px rgba(0, 174, 239, 0.3);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 174, 239, 0.4);
          }
        `;
      case 'dark':
        return `
          background: linear-gradient(135deg, ${props.theme.colors.dark}, #1a2a45);
          color: ${props.theme.colors.white};
          box-shadow: 0 4px 15px rgba(11, 31, 53, 0.3);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(11, 31, 53, 0.4);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          border: 2px solid ${props.theme.colors.royal};
          color: ${props.theme.colors.royal};
          
          &:hover {
            background: ${props.theme.colors.royal};
            color: ${props.theme.colors.white};
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 114, 188, 0.2);
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, ${props.theme.colors.royal}, #0052a3);
          color: ${props.theme.colors.white};
          box-shadow: 0 4px 15px rgba(0, 114, 188, 0.3);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 114, 188, 0.4);
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(0);
  }
`;