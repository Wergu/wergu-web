import React from 'react';
import { Grid } from 'semantic-ui-react';
import StoreButtonList from './StoreButtonList';


const DownloadIt = () => {

    let styles = {
        container:{
            width: "100%",
            height:260,
            backgroundColor: "#12A85C"
        },
        text:{
            fontFamily: "Lato",
            fontWeight: "bold",
            color: "white",
            fontSize: 50,
            marginTop: 30
        },
        storeBtnList:{
            marginTop: 80

        }
    }

    return (
        <div style={styles.container}>
            <Grid columns={2} centered >
            <Grid.Row  >
                <Grid.Column computer={8} >
                    <p style={styles.text}>Qu'attendez vous pour télécharger Wergu ?</p>
                </Grid.Column>
                <Grid.Column computer={6} >
                    <div style={styles.storeBtnList}>
                    <StoreButtonList/>
                    </div>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    );
};

export default DownloadIt;