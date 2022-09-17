import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  height: 100vh;
  background: ${({ theme }) => theme.darkerBlack};
`;

export const BurgerMenu = styled.div`
  height: 105px;
  display: flex;
  margin-top: -30px;
  margin-left: -9px;
  img {
    width: 60px;
    cursor: pointer;
  }
`;

export const StyledMenuContainer = styled.div`
  position: relative;
  min-height: 950px;
  padding: 44px 0 40px 0;
  transition: all 300ms ease-in-out;
  font-size: 16px;
  color: white;
  background: ${({ theme }) => theme.darkerBlack};
  border-right: grey 2px solid;
  svg {
    min-width: 30px;
    min-height: 30px;
  }

  #sidebarMenu {
    height: 100%;
    position: fixed;
    left: 0;
    width: 80px;
    margin-top: 20px;
    transition: all 300ms ease-in-out;
    margin-left: -7px;
  }

  input[type='checkbox']:checked ~ #sidebarMenu {
    width: 350px;
  }
  input[type='checkbox'] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
  }

  .sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
    margin: 14px;
  }

  input[type='checkbox']:checked ~ .sidebarIconToggle {
    margin-left: 249px;
  }

  .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
  }
  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
  .diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }
  .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }

  @media (max-height: 982px) {
    zoom: 95%;
    @-moz-document url-prefix() {
      #sidebarMenu {
        overflow-y: scroll;
      }
    }
  }
  @media (max-height: 928px) {
    zoom: 90%;
    @-moz-document url-prefix() {
      #sidebarMenu {
        overflow-y: scroll;
      }
    }
  }
  @media (max-height: 890px) {
    zoom: 86%;
  }
  @media (max-height: 838px) {
    zoom: 79%;
  }
  @media (max-height: 800px) {
    zoom: 70%;
  }
  @media (max-height: 710px) {
    zoom: 66%;
  }
  @media (max-height: 665px) {
    zoom: 60%;
  }
  @media (max-height: 615px) {
    #sidebarMenu {
      overflow-y: scroll;
    }
    ::-webkit-scrollbar {
      max-width: 8px;
    }
  }
`;

export const StyledContainerPage = styled.div`
  min-height: 786px;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
  padding: 0 30px 55px 30px;
  min-height: calc(100vh - 114px);
  overflow-y: scroll;
  background: ${({ theme }) => theme.darkerBlack};
`;
