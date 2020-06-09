import React from 'react';
import StoreButton from './StoreButton';
import apple from '../img/apple.png';
import play_store from '../img/play_store.png';
import { Grid, Responsive } from 'semantic-ui-react';

const StoreButtonList = () => {
    return (
        <>
        <Responsive maxWidth={599.99999}>
            <Grid columns={1} >
                <Grid.Row style={{backgroundColor: "green"}}>
                
                <Grid.Column>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 50, backgroundColor: "red"}}>
                    <StoreButton img={apple} title={"App Store"} />

                    </div>
                </Grid.Column>
                <Grid.Column>
                <div style={{display: "flex", justifyContent: "center",marginTop: 50}}>

                    <StoreButton img={play_store} title={"Google Play"} />
                </div>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Responsive>
        <Responsive minWidth={600}>
        <Grid columns={2} >
            <Grid.Row>
            <Grid.Column >
                <StoreButton img={apple} title={"App Store"} />
            </Grid.Column>
            <Grid.Column>
                <StoreButton img={play_store} title={"Google Play"} />
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Responsive>
        </>
    );
};

export default StoreButtonList;