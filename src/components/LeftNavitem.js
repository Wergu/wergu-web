import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';


const LeftNavitem = ({img,link,title,color,location,nbr="?"}) => {
    const {pathname} = location

    
    
    return (
            <Link to={link}>

                <Grid.Column style={{backgroundColor: pathname===link ?"white" : "#C4C4C4", marginTop: 30, padding: 5, position:"relative"}} >
                {color && <div style={{
                        width: 40, 
                        height:40, 
                        backgroundColor:color, 
                       //x  x    position: "absolute", 
                        right:-20, 
                        top: -10,
                        borderRadius: 100,
                        display: "flex", 
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                    <p style={{fontSize: 15, color: "white", fontWeight:"bold"}}>{nbr}</p>
                </div>}

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Image src={img} />
                    </div>
                        <p style={{ color: "black", fontSize: 15, marginTop: 10 }}>{title}</p>

                </Grid.Column>
            </Link>
    );
};



export default withRouter(LeftNavitem);


