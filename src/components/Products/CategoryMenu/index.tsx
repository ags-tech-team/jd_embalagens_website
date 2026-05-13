import { MenuContainer, MenuTitle, MenuItem } from './styles';

interface CategoryMenuProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const categories = [
  { id: "copos-pp", name: "Copos e Potes de Plástico", icon: "🥤", clickable: true },
  { id: "copos-pet", name: "Copos PET", icon: "🥤", clickable: true },
  { id: "potes-pet", name: "Potes PET", icon: "🍨", clickable: true },
  { id: "", name: "Copos e Potes de Papel", icon: "📄", clickable: false },
  { id: "", name: "Sacos Padaria", icon: "🥖", clickable: false },
  { id: "", name: "Sacos Lanche", icon: "🍔", clickable: false },
  { id: "", name: "Sacos Delivery", icon: "🛵", clickable: false },
  { id: "", name: "Guardanapos", icon: "🧻", clickable: false }
];

export const CategoryMenu = ({ activeCategory, onSelectCategory }: CategoryMenuProps) => {
  return (
    <MenuContainer>
      <MenuTitle>📋 CATEGORIAS</MenuTitle>
      {categories.map((cat) => (
        <MenuItem 
          key={cat.name}
          $isActive={activeCategory === cat.id}
          onClick={() => cat.clickable && onSelectCategory(cat.id)}
          $isClickable={cat.clickable}
        >
          <span>{cat.icon}</span> {cat.name}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};