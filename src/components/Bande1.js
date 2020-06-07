import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import apple from '../img/apple.png';
import play_store from '../img/play_store.png';
import StoreButton from './StoreButton';


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
                            <p style={styles.title} className="animate__animated animate__bounce"  ref={references && references[name]}>{text1}</p>
                            <p style={styles.description}>{text2}</p>
                            {needStoreButtons && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%" }}>
                                <StoreButton img={apple} title={"App Store"}/>
                                <StoreButton img={play_store} title={"Google Play"}/>
                            </div>}
                        </Grid.Column>
                        <Grid.Column computer={7}>
                            <div style={styles.image1}>
                                <Image src={principalImage} />
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