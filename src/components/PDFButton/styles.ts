import styled from 'styled-components';

export const PDFButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const StyledPDFButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: #e74c3c;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: scale(1.02);
    background: #c0392b;
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;