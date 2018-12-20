import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import { log } from 'util';


interface MyProps {
  counterStore?: any
}

interface MyState {}

@inject('counterStore')
@observer 
class App extends Component <MyProps, MyState>  {
  componentDidMount() {
    this.props.counterStore.fetchData();
  }

  sumVal = () => {
    console.log(this.props.counterStore.cardData[0].img);
  }

  render() {
    return (
      <div className="App">
      {this.props.counterStore.cardData.map(
        (e: any) => {return <img src={e.img}/>}
      )}
      <img src={this.props.counterStore.firstImg}/>
        <h1 onClick={this.sumVal}>HAHA</h1>
      </div>
    );
  }
}

export default App;
