import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Gym Equipment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/addNewItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={() => signOut(auth)} className="btn btn-primary">SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="/login" >
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;