import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Member from './Member';
import cheikh from "../img/cheikh.png"
import aita from "../img/aita.png"
import docko from "../img/docko.png"

const Team = () => {
    return (
        <Container>
            <Grid columns={3}>
                <Grid.Row>
                    <Member image={cheikh} name="Cheikh Seck" status="CEO" />
                    <Member image={aita} name={"Aïta Ndir Dia"} status="CMO"/>
                    <Member image={docko} name="Docko Sow" status="CTO" />
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Team;