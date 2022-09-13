import React, { useState } from 'react';
import BurgerImg from '../../images/burger-menu.svg'
import {
  BurgerMenu,
  StyledContainer,
  StyledContainerPage,
  StyledMenuContainer,
} from './styles';

interface StyledModalProps {
  children: React.ReactElement
}

const MenuAndHeader: React.FC<StyledModalProps>  = ({children}) => {
  const [closeMenu, setCloseMenu] = useState<boolean>(true);

  return (
    <StyledContainer>
      <StyledMenuContainer style={closeMenu ? { minWidth: '105px', width: '105px' } : { minWidth: '350px', width: '350px' }}>
        <input type="checkbox" onChange={() => setCloseMenu(!closeMenu)} className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <BurgerMenu>
            <img src={BurgerImg} alt={'burger-menu'} />
          </BurgerMenu>
        </label>
        <div id="sidebarMenu">
        </div>
      </StyledMenuContainer>

      <StyledContainerPage>
            {children}
        </StyledContainerPage>
    </StyledContainer>
  );
};

export default MenuAndHeader;
