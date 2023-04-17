import { Container, Navbar } from "react-bootstrap"

function NavBarMenu() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!">
                        Dynamic <b>Form</b>
                    </Navbar.Brand>
                    <Navbar.Toggle>

                    </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as:{" "}
                            <a href="www.instagram.com/facuu.adaro" target="_blank" rel="noreferrer">Facu Adaro</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarMenu