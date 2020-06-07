import React, { Suspense } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import cheikh from "../img/cheikh.png"
import aita from "../img/aita.png"
import docko from "../img/docko.png"

const Member = React.lazy(() => import("./Member"))

const Team = () => {
    return (
        <Container>
            <Grid columns={3}>
                <Grid.Row>
                    <Suspense fallback="">
                        <Member image={cheikh} name="Cheikh Seck" status="CEO" />
                        <Member image={aita} name={"Aïta Ndir Dia"} status="CMO"/>
                        <Member image={docko} name="Docko Sow" status="CTO" />

                    </Suspense>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Team;