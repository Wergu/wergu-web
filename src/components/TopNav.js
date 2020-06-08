import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from "../img/logo.png"
import ReactDOM from 'react-dom'



const TopNav = ({ handleNavClick, references }) => {

    let [name, setName] = useState("accueil")
    let [showShadow, setShowShadow] = useState(false)

    let handleScroll = useCallback(() => {
        let accueilPos = ReactDOM.findDOMNode(references.accueil.current).getBoundingClientRect().top;

        if (accueilPos > -518) {
            setName("accueil")
        }
        if (accueilPos <= -518 && accueilPos > -4009) {
            setName("nos_solutions")
        }
        if (accueilPos <= -4009 && accueilPos > -4587) {
            setName("la_team")
        }
        if (accueilPos <= -4587) {
            setName("nous_contacter")
        }

        if (window.scrollY > 20) {
            setShowShadow(true)
        } else {
            setShowShadow(false)

        }
    },[references])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [handleScroll])


    let styles = (myName) => (
        {
            menuItem: {
                fontSize: 25,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "Lato",
                color: myName === name ? "#12A85C" : "#757575",
                cursor: "pointer"
            },
            logoText: {
                fontSize: 35,
                fontWeight: "bold",
                color: "#12A85C", marginLeft: 20
            },
            menu: {
                backgroundColor: "white",
                boxShadow: showShadow ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""
            },
            logoMenu: {
                cursor: "pointer"
            }
        }
    )

    let handleItem = (myName) => {
        setName(myName)
        handleNavClick(references[myName])
    }

    return (
        <>
            <Menu secondary fixed="top" style={styles().menu}>
                <Menu.Item as="div"
                    style={styles().logoMenu}
                    onClick={() => handleItem("accueil")}

                >
                    <Image
                src={logo}
                alt={`img-${Date.now()}`}
                effect="blur"
            />
                    
                    <p style={styles().logoText}>Wergu</p>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item as="p"
                        name='Accueil'
                        onClick={() => handleItem("accueil")}
                        //   active={activeItem === 'home'}
                        style={styles("accueil").menuItem}


                    />


                    <Menu.Item as="p"
                        name='Nos solutions'
                        //   active={activeItem === 'messages'}
                        onClick={() => handleItem("nos_solutions")}
                        style={styles("nos_solutions").menuItem}





                    />
                    <Menu.Item as="p"
                        name='La team'
                        //   active={activeItem === 'friends'}
                        onClick={() => handleItem("la_team")}
                        style={styles("la_team").menuItem}

                    />
                    {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
                    <Menu.Item as="p"
                        name='Nous contacter'
                        // active={activeItem === 'logout'}
                        //onClick={this.handleItemClick}
                        onClick={() => handleItem("nous_contacter")}
                        style={styles("nous_contacter").menuItem}
                    />
                </Menu.Menu>
            </Menu>
        </>
    );
};

export default TopNav;