import { useTheme } from '../../contexts/ThemeContext';
import { ToggleButton, ToggleContainer, ToggleIcon, ToggleSlider } from './styles';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme}>
      <ToggleIcon>{theme === 'light' ? '☀️' : '🌙'}</ToggleIcon>
      <ToggleButton>
        <ToggleSlider $isLight={theme === 'light'} />
      </ToggleButton>
    </ToggleContainer>
  );
};