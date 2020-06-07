import React from 'react';
import { Grid } from 'semantic-ui-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StoreButton = ({title, img}) => {
    let styles = {
        storeBtn: {
            width: 232,
            height: 76,
            backgroundColor: "#000000",
            borderRadius: 10
        },
        image2:{
            marginLeft: 20,
            marginTop: 10,        
        },
        image2Div: {
            textAlign: "center"
        },
        storeBtnText: {
            color: "white",
            fontSize: 20,
            marginTop: 10

        },
    }
    return (
        <div style={styles.storeBtn} >
            <Grid.Column>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column computer={5}>
                            <div style={styles.image2Div}>
                                <LazyLoadImage
                                    alt={`img-${Date.now()}`}
                                    src={img}
                                effect="blur"
                                style={styles.image2}
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