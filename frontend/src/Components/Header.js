import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Link to="/">HelpDesk</Link>
        </HeaderLeft>
        <HeaderRight>
          <div className="btn">
            <Link to="/login">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
          </div>
          <div className="btn">
            <Link to="/signup">
              <FaUser />
              Signup
            </Link>
          </div>
          <div className="btn">
            <Link to="/logout">
              <FaSignOutAlt />
              Logout
            </Link>
          </div>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  background-color: #00d5b9;
`;

const HeaderLeft = styled.div`
  text-align: center;
  width: 30vw;
  a {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 50px;
  gap: 10px;
  .btn {
    align-self: center;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    background-color: #ffffff;
    justify-content: center;
    &:hover {
      background-color: #cacaca;
    }
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      color: black;
      width: 100%;
      gap: 5px;
      font-size: 1.2rem;
      font-weight: 600;
      svg {
        font-size: 1.5rem;
        color: #363636;
      }
      span {
        padding-left: 10px;
        text-align: center;
      }
    }
  }
`;
