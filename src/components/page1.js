/*page1*/
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import '../css/utility.css';

export default class page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            filtered: [],
            currentFlag: 'https://restcountries.eu/data/bra.svg',
            currentName: 'Brazil',
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.data.Country
        });
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {
        console.log('->',this.state);
        console.log('-->',nextProps);
        this.setState({
          filtered: nextProps.data.Country
        });
      }

    handleChange(e){
        console.log(e.target.value);
        this.setState({value: e.target.value});
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = this.props.data.Country;
            newList = currentList.filter(item => {
                    const lc = item.name.toLowerCase();
                    const filter = e.target.value.toLowerCase();
                    return lc.includes(filter);
                });
        } else {
            newList = this.props.data.Country;
        }
        
        this.setState({
            filtered: newList,
        });
    }
    handleClick(flag, name){
        console.log('click', flag);
        this.setState({
            currentFlag: flag,
            currentName: name,
            value: name,
        });
    }

    render(){
        
        return (
                <Container>
                    <Jumbotron>
                        <div
                            class='row'
                        >
                            <div
                                class="col-sm"
                            >
                                <h1 class="display-4">
                                    {this.state.currentName}
                                </h1>
                                <p class="lead">
                                    Please use the search filter to find the country, then click 'Find' to find the flag..
                                </p>
                            </div>
                        </div>
                        <div
                            class='row'
                        >
                            <div
                                class='col-sm'
                            >
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">🔍</span>
                                </div>
                                <input 
                                    type="text" 
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    placeholder="Search.."
                                    class="form-control"
                                />
                                </div>
                            </div>
                            <div
                                class='col-sm flagBox'
                            >
                                
                                <img 
                                    width="300"
                                    src={this.state.currentFlag} 
                                    class="rounded"
                                />
                            </div>
                        </div>
                        <div>
                            <ul class="list-group">
                            {this.state.filtered &&
                                this.state.filtered.map((country,index) => 
                                    <li 
                                        key={index}
                                        class="list-group-item d-flex justify-content-between"
                                        
                                    >
                                        <div
                                            className={country.name == this.state.currentName ? 'selected': null}
                                        >
                                            {country.name}
                                        </div>
                                        <Button
                                            type="button"
                                            class="btn-sm" 
                                            onClick={() => this.handleClick(country.flag.svgFile, country.name)}>
                                                Find It
                                        </Button>
                                    </li>
                                )
                            }
                            </ul>
                        </div>
                    </Jumbotron>
                </Container>
        )
    }
}