import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

export const ToggleIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ToggleButton = styled.div`
  width: 50px;
  height: 24px;
  background: ${props => props.theme.colors.gray};
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
`;

export const ToggleSlider = styled.div<{ $isLight: boolean }>`
  width: 20px;
  height: 20px;
  background: ${props => props.$isLight ? props.theme.colors.royal : props.theme.colors.vibrant};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${props => props.$isLight ? '3px' : '27px'};
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;