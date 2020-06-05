import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import apple from '../img/apple.png';
import play_store from '../img/play_store.png';


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
        storeBtn: {
            width: 232,
            height: 76,
            backgroundColor: "#000000",
            borderRadius: 10
        },
        storeBtnText: {
            color: "white",
            fontSize: 20,
            marginTop: 10

        },
        image2: {
            marginLeft: 20,
            marginTop: 10
        },
        container:{
            marginTop: mt,
        }

    }

    let _renderStoreBtn = (title, img) => (
        <div style={styles.storeBtn} >
            <Grid.Column>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column computer={5}>
                            <Image  src={img} style={styles.image2} centered />
                        </Grid.Column>
                        <Grid.Column computer={11}>
                            <p style={styles.storeBtnText}>Télécharger sur{"\n"}<span style={{ ...styles.storeBtnText, fontWeight: "bold" }}>{title}</span></p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>

        </div>
    )


    let otherGridProps = reversed ? { reversed: "computer" } : {}
    return (
        <>
        <div style={{paddingBottom: 60}}>
            <Container style={styles.container}>

                <Grid columns={2}  {...otherGridProps} >
                    <Grid.Row >
                        <Grid.Column computer={9}>
                            <p style={styles.title} ref={references && references[name]}>{text1}</p>
                            <p style={styles.description}>{text2}</p>
                            {needStoreButtons && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>
                                {_renderStoreBtn("App Store", apple)}
                                {_renderStoreBtn("Google Play", play_store)}
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