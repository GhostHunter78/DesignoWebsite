import React, { useRef, useState } from "react";
import styled from "styled-components";
import { HamburgerIcon, CloseIconComponent } from "../SVGs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate("/About");
  };

  const handleContactClick = () => {
    navigate("/Contact");
  };

  const handleLocationsClick = () => {
    navigate("/Locations");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);

  const toggleIcon = () => {
    setIsHamburgerVisible(!isHamburgerVisible);
  };

  const backDrop = useRef(null);
  const backDropHandler = (event) => {
    if (event.target === backDrop.current) {
      setIsHamburgerVisible(true);
    }
  };

  return (
    <HeaderDiv>
      <img
        src="/Logo-large.png"
        alt="Logo"
        onClick={() => {
          setIsHamburgerVisible(true);
          handleLogoClick();
        }}
      />
      <div onClick={toggleIcon}>
        {isHamburgerVisible ? <HamburgerIcon /> : <CloseIconComponent />}
      </div>
      {!isHamburgerVisible ? (
        <BackDrop ref={backDrop} onClick={backDropHandler}>
          <Menu>
            <NavList>
              <ListItems
                onClick={() => {
                  setIsHamburgerVisible(true);
                  handleCompanyClick();
                }}
              >
                OUR COMPANY
              </ListItems>
              <ListItems
                onClick={() => {
                  setIsHamburgerVisible(true);
                  handleLocationsClick();
                }}
              >
                LOCATIONS
              </ListItems>
              <ListItems
                onClick={() => {
                  setIsHamburgerVisible(true);
                  handleContactClick();
                }}
              >
                CONTACT
              </ListItems>
            </NavList>
          </Menu>
        </BackDrop>
      ) : null}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  width: 100vw;
  display: flex;
  padding: 35px 24px;
  justify-content: space-between;
`;

const BackDrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: absolute;
  left: 0;
  top: 96px;
`;

const Menu = styled.div`
  width: 100%;
  padding: 48px 24px;
  background: #1d1c1e;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style: none;
`;

const ListItems = styled.p`
  width: fit-content;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 2px;
`;

export default Header;
