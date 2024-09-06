import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`
 const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 50px;
  
 `
 const Logo = styled.img`
   height: 35px;
 `
 const List = styled.ul`
 display: flex;
 gap: 50px;
 list-style: none;
 
 `
 const ListItem = styled.li`
  
 `

const Link = styled.a`
  padding: 12px;
  background-color: #5221dd;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
 align-items: center;

`

 const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #5221dd;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
 `
 const Icon = styled.img`
   width: 30px;
   cursor: pointer;
 `
 const Icons = styled.div`
 display: flex;
 justify-content: space-between;
  gap: 5px;
 `


const Navbar = (auth) => {
  return (
    <Section>
     
        <Container>
        <Links>
          <Logo src="/img/mindmend1.png" />
          {/* <List>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
          </List> */}
        </Links>
        <Icons>
          {/* <Button>Hire Me</Button>
          <Button>Hire Me</Button> */}
          {auth.user ? (
              <>
              
              
              <Link
                href={route("dashboard")}
              >
                Dashboard
              </Link>
              </>
            ) : (
              <>
                <Link className="font-montserrat"
                  href={route("login")}
                >
                  Log in
                </Link>
                <Link className="font-montserrat"
                  href={route("register")}
                >
                  Register
                </Link>
              </>
            )}
        </Icons>
            
          
           
         
        </Container> 
    </Section>
  )
}

export default Navbar