import React from 'react';
import { Grid } from 'semantic-ui-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Member = ({image, name, status}) => {
    let styles ={
        name:{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 20,
        },
        status: {
            fontSize: 30,
            //textAlign: "center"
            color: "#757575"
        },
        img:{
            textAlign: "center"
        }
    }
    return (
        <Grid.Column>
            <div style={styles.img}>
            <LazyLoadImage
                src={image}
                alt={`img-${Date.now()}`}
                effect="blur"
            />
            </div>
            <p style={styles.name}>{name}
            
            <span style={styles.status}> <br/> {status}</span>

            </p>
            
        </Grid.Column>
    );
};

export default Member;