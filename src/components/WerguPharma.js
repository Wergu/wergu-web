import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import wergu_pharma from "../img/wergu_pharma.png"

const WerguPharma = () => {

    let styles={
        div1: {
            backgroundColor: "#18A0FB",
            paddingBottom: 80
        },
        title:{
            fontSize: 50,
            textAlign: "center",
            fontFamily: "Lato"

        },
        span1: {
            fontSize: 50,
            textAlign: "center",
            color: "white"
        },
        container:{
            paddingTop: 50
        },
        description:{
            fontFamily: "Lato",
            fontWeight: "bold",
            fontSize: 35,
            textAlign: "center",
            color: "white"
        }
      
    }
    return (
        <div style={styles.div1}>
        <Container style={styles.container} >
            <p style={styles.title}><span style={styles.span1}>Wergu-Pharma</span>, la solution adaptée aux pharmaciens</p>
            <Image src={wergu_pharma} centered />
            <p style={styles.description}>Wergu-Pharma est un système de livraison et de gestion de stock intelligent qui permet aux pharmacies partenaires de centraliser toutes leurs opérations de vente, d’avoir des statistiques sur leur vente mensuelle, de prévenir les ruptures de stock et de prédire les médicaments qui seront les plus en demande dans le futur grace à l’intelligence artificielle intégrée.</p>
        </Container>
        </div>
    );
};

export default WerguPharma;