import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
    searchField: ''

        }
    }
     
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(users => {})
        .then(users => {this.setState({robots:users})}) ;

    }

 
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        
       
      
    }
    render(){

        const {robots, searchField} = this.state;

        const filteredFriends = robots.filter( robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length ?
            <h1>Loading</h1> :
        
            <div className="tc">
                <h1 className="f1">N10-Labs Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary> 
                <CardList robots = {filteredFriends}/>
                </ErrorBoundary>
                </Scroll>
            </div>
        ;}
        
    }
   
export default App;