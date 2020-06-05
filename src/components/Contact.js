import React from 'react';
import { Grid, Container, Image, Input, Icon, TextArea, Form, Button } from 'semantic-ui-react';
import Lottie from 'react-lottie'
import contact_us from "../img/contact_us.json"

const Contact = () => {
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: contact_us,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (

        <Container>
            <Grid columns={2}>
                <Grid.Row >
                    <Grid.Column>
                    <Lottie options={defaultOptions} />
                    </Grid.Column>
                    <Grid.Column  >

                        <Form>
                            <Form.Group>
                                <Form.Input  placeholder='Prénom et nom' width={8} size="huge" iconPosition="left" icon="user" />
                                <Form.Input  placeholder='Email' width={8} size="huge" iconPosition="left" icon="at" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input  placeholder='Objet du message' width={16} size="huge" iconPosition="left" icon="envelope open outline" />

                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea placeholder="Quel est votre message ?" width={16} size="huge" />

                            </Form.Group>
                            <Form.Checkbox label='Recevoir les infos relatives aux nouveautés de Wergu'  />
                            <Button style={{backgroundColor: "#12A85C", color: "white"}} type='submit' size="large">Envoyer</Button>
                        </Form>

                       
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    );
};

export default Contact;