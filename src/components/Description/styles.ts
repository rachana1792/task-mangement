import styled from "styled-components";
import { SCREEN_BREAKPOINTS } from "../../constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  @media(max-width: ${SCREEN_BREAKPOINTS.EXTRA_LARGE}px) {
    padding: 2rem 0 2rem 0;
  }
`
export const Header = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: 5rem;

`

export const ButtonContainer = styled.div`

  display:flex;
  justify-content: flex-end;
height:10%
  `

export const Button = styled.button`
  
background-color: #0000FF;
    color: #fff;
    font-weight: bold;
    padding: 10px 0;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 15%;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    font-size: 15px;
    line-height: 1;
  `

export const ListContainer = styled.div`
margin-left: 5rem;
text-align: left;
display: flex;
justify-content: center
position: relative;
height:20vh;
font-size: 16px;

`

export const ListElements = styled.div`
height: 50%;
  width: 300px;


`
