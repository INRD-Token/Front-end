import React from 'react';
import styled from 'styled-components';
import Logo from './../Images/Logo.jpg'
const Container = styled.div`
    display:flex;
    justify-content:space-around;

`
const ILogo = styled.img`
    height:50px;
    width:100px;
`
const Links = styled.ul`
display:flex;
gap:20px;
`
const Link = styled.li`
    list-style: none;
    cursor:pointer;
    color:grey;
`
const Button = styled.button`
width: 112px;
height: 37px;
background: linear-gradient(180deg, #F2D79B 45.31%, #FCF6E8 100%);
border-radius: 500px;
cursor:pointer;
`

function Navbar(props) {
    return (
        <Container>
            <ILogo src={Logo}/>
            <Links>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>How it works</Link>
            <Link>Partnership</Link>
            <Link>Blog</Link>
            </Links>
            <Button>swap now</Button>
        </Container>
    );
}

export default Navbar;