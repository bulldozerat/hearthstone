import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import CardSearch from "./components/CardSearch";
import './App.css';


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

  render() {
    return (
      <div className="App">
        <CardSearch />
      {/* {this.props.counterStore.cardData.map(
        (e: any) => {return <img src={e.img}/>}
      )} */}
      <img src={this.props.counterStore.firstImg}/>
      </div>
    );
  }
}

export default App;
