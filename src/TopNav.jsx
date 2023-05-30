import React from 'react'
import { Navbar, Container, Button, Offcanvas, Nav } from 'react-bootstrap'
import BRAND_LOGO from './assets/logo.svg'

export default function TopNav() {
    return (
        <Navbar key='md' bg="light" expand='md' className="top-nav">
            <Container>
                <Navbar.Brand href="#"><img src={BRAND_LOGO} alt="easybank" height={20} /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            <img src={BRAND_LOGO} alt="easybank" height={20} />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='pe-3 flex-grow-1 justify-content-center'>
                            <Nav.Link href="#" className='mx-3'>Home</Nav.Link>
                            <Nav.Link href="#" className='mx-3'>About</Nav.Link>
                            <Nav.Link href="#" className='mx-3'>Contact</Nav.Link>
                            <Nav.Link href="#" className='mx-3'>Blog</Nav.Link>
                            <Nav.Link href="#" className='mx-3'>Careers</Nav.Link>
                        </Nav>
                        <Button className='top-nav-invite-button invite-button' style={{ background: 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))', border: '1px transparent', padding: '0 25px', borderRadius: '20px' }}>Request Invite</Button>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
