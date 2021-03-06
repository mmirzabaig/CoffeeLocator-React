import React, { Component } from 'react';
import CoffeeMap from '../CoffeeMap';

export default class CoffeeApi extends Component {
  constructor(props){
console.log('First Place constructor()');
    super(props);
    this.state = {
      coffeeData: [],
      location: props.locationData
    }
  }
  getCoffee = async () => {
    console.log('Second Place getCoffee()');
    try {
        const coffee = await fetch('https://places.cit.api.here.com/places/v1/discover/search?at='+ this.state.location[0] +'%2C'+ this.state.location[1] +'&q=coffee&size=260&Accept-Language=en-US%2Cen%3Bq%3D0.9&app_id=LIQCgkme37QtJgUDMH8H&app_code=lm5wLnGyaQ_OpuASUza1EA');
        const coffeeJson = await coffee.json();
        return coffeeJson;
    } catch(err) {
        return err;
    }
  }


  componentDidMount(){
    console.log('Third Place Component()');

    this.getCoffee().then((data) => {
      this.setState({
        coffeeData: data,
      })
    }).catch((err) => {
      return err;
    })
  }


  render() {
    console.log('Fourth Pace(render) Place');
    return(
      <div>
      {console.log('Fifth place return()')}
        {this.state.coffeeData.results ? <CoffeeMap coffee={this.state.coffeeData} location={this.state.location}/> : null}
      </div>
      );
  }

}
