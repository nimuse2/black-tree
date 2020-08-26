
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Home extends Component {

    render(){
        
        return (
                <Container>
                    <Jumbotron>
                    <h1 class="display-4">FindaFlag</h1>
                    <p class="lead">by Nick Walters for Black Tree Gaming</p>
                    <hr class="my-4"></hr>
                    <p class="follow">&copy; August 2020</p>
                    <p class="follow">Based on open data API: https://github.com/lennertVanSever/graphcountries</p>
                    </Jumbotron>
                </Container>
        )
    }
}