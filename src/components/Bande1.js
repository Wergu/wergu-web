import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';

import StoreButtonList from './StoreButtonList';


const Bande1 = ({ needStoreButtons = false, reversed, principalImage, text1, text2,references, name="accueil", mt= 100 }) => {
    let styles = {
        title: {
            fontSize: 50,
            fontFamily: "Lato",
            fontWeight: "bold"
        },
        description: {
            fontSize: 30,
            fontWeight: "normal",
            fontFamily: "lato",
            color: "#757575"
        },
        image1: {
            display: "flex",
            justifyContent: reversed ? "flex-start" :"flex-end"
        },
        container:{
            marginTop: mt,
        }

    }




    let otherGridProps = reversed ? { reversed: "computer" } : {}
    return (
        <>
   
        <div style={{paddingBottom: 60}}>
            <Container style={styles.container}>

                <Grid columns={2}  {...otherGridProps} >
                    <Grid.Row >
                        <Grid.Column computer={9}>
                            <h1 style={styles.title} className="animate__animated animate__bounce"  ref={references && references[name]}>{text1}</h1>
                            <p style={styles.description}>{text2}</p>
                            {needStoreButtons && <StoreButtonList/>}
                        </Grid.Column>
                        <Grid.Column computer={7}>
                            <div style={styles.image1}>
                            <Image
                                alt={`img-${Date.now()}`}
                                src={principalImage}
                               effect="blur"
                               />
                            </div>

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
            </div>
        </>
    );
};

export default Bande1;