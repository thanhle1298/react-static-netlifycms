import React, { Component } from 'react';
import { Grid, Button, Form, Container, Input, TextArea, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';
import ContactImg from '../../assets/image/contact.jpg';
import './Contact.css';

const Background = styled.div`
    background: white;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    margin: 2vw 0;
    @media (min-width: 768px){
        width: 95%;
        margin: 2vw auto; 
    }

`
const Outer = styled.div`
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
`
const CenterDiv = styled.div`
    height: auto;
    width: 50%;
    margin: 0 auto;
    font-size: 0.6em;
    @media (min-width: 480px){
        font-size: 1em;
    }
    @media (min-width: 768px){
        margin:5vw;
    }
`
const CenterForm = styled(Form)`
    width: 80%;
    margin: 0 auto;
`
const UpperH2 = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
`
class Contact extends Component {
    render() {
        return (
            <Outer style={{
                backgroundImage: `url(${ContactImg})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
                 }}>
                <Background>
                    <Responsive maxWidth={768}>
                    <Grid>
                        <Grid.Row>
                            <CenterDiv>
                                <UpperH2>contact us</UpperH2>
                                <p>Are you interested in working with us?
                                <br/>Please leave your infomation and we will reach you
                                </p>
                            </CenterDiv>
                        </Grid.Row>
                        <Grid.Row>
                        <CenterForm>
                            <Form.Field
                                id='form-input-control-full-name'
                                control={Input}
                                label='FULL NAME*'
                            />
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='EMAIL*'
                            />
                            <Form.Field
                                id='form-input-control-company'
                                control={Input}
                                label='COMPANY*'
                            />
                            <Form.Field
                                id='form-input-control-phone'
                                control={Input}
                                label='PHONE*'
                            />
                            <Form.Field
                                id='form-input-control-title'
                                control={Input}
                                label='TITLE*'
                            />
                            <Form.Field
                                id='form-input-control-question'
                                control={Input}
                                label='HOW DO YOU KNOW ABOUT US*'
                            />
                            <Form.Field
                                id='form-input-text-area'
                                control={TextArea}
                                label='HOW WOULD YOU LIKE US TO HELP*'

                            />
                            <Form.Field
                                id='form-input-button'
                                control={Button}
                                content='SEND'

                            />
                        </CenterForm>
                        </Grid.Row>
                    </Grid>
                    </Responsive>
                    <Responsive minWidth={768}>
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                            <CenterDiv>
                                <UpperH2>contact us</UpperH2>
                                <p>Are you interested in working with us?
                                <br/>Please leave your infomation and we will reach you
                                </p>
                            </CenterDiv>
                            </Grid.Column>

                            <Grid.Column>
                            <CenterForm>
                            
                                <Form.Field
                                    id='form-input-control-full-name'
                                    control={Input}
                                    label='FULL NAME*'
                                />
                            
                                <Form.Field
                                    id='form-input-control-email'
                                    control={Input}
                                    label='EMAIL*'
                                />
                                <Form.Field
                                    id='form-input-control-company'
                                    control={Input}
                                    label='COMPANY*'
                                />
                                <Form.Field
                                    id='form-input-control-phone'
                                    control={Input}
                                    label='PHONE*'
                                />
                                <Form.Field
                                    id='form-input-button'
                                    control={Button}
                                    content='SEND'

                                />
                                </CenterForm>
                            
                            </Grid.Column>

                            <Grid.Column>
                                <CenterForm>
                                <Form.Field
                                    id='form-input-control-title'
                                    control={Input}
                                    label='TITLE*'
                                />
                                <Form.Field
                                    id='form-input-control-question'
                                    control={Input}
                                    label='HOW DO YOU KNOW ABOUT US*'
                                />
                                <Form.Field
                                    id='form-input-text-area'
                                    control={TextArea}
                                    label='HOW WOULD YOU LIKE US TO HELP*'

                                />
                                </CenterForm>
                            </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                    </Responsive>
                </Background>
            </Outer>
        )
    }
} 
export default Contact;