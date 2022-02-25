import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import logo from './assets/Logo.png'
import {Link} from "react-router-dom";

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {

        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <div className='marca'>
                    <img src={logo} className="logo-image"/>
                </div>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link  to="/">Inicio</Link>
                    <Link  to="/sobrenosotras">Sobre Nosotras</Link>
                    <Link  to="/reservaya">Reserva ya</Link>
                    <Link to="/experiences">Experiencias</Link>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default Navbar


const NavContainer = styled.nav`
  h2{
    color: #FBF1E3;
    font-weight: 400;
    span{
    font-weight: bold;
    }
  }
  padding: .2.5rem;
  background: #FBF1E3;


 display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #997619;
        display: inline;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-family: 'Roboto', sans-serif;
   
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2.5rem;
      margin-top: 1rem;
      color: #efb810;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`

    background: #4C8055;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(0,5,1,1) 100%);
    background-image: linear-gradient(180deg, #65736e 0, #586d68 12.5%, #496763 25%, #37605d 37.5%, #1f5959 50%, #005156 62.5%, #004a54 75%, #004453 87.5%, #003d52 100%);
  
  
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    }
    
    `
