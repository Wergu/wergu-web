import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


const StoreButton = ({title, img}) => {
    let styles = {
        storeBtn: {
            width: 232,
            height: 76,
            backgroundColor: "#000000",
            borderRadius: 10
        },
        image:{
            marginLeft: 20,
            //marginTop: 10,        
        },
        imageDiv: {
            textAlign: "center"
        },
        storeBtnText: {
            color: "white",
            fontSize: 20,
            //marginTop: 10

        },
    }
    return (
        <div style={styles.storeBtn} >
            <Grid.Column>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column computer={5}>
                            <div style={styles.imageDiv}>
                                <Image
                                    alt={`img-${Date.now()}`}
                                    src={img}
                                effect="blur"
                                style={styles.image}
                                />
                            </div>
                             
                        </Grid.Column>
                        <Grid.Column computer={11}>
                            <p style={styles.storeBtnText}>Télécharger sur{"\n"}<span style={{ ...styles.storeBtnText, fontWeight: "bold" }}>{title}</span></p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>

        </div>
    )
};

export default StoreButton;