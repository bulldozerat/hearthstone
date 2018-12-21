import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import CardSearch from "./components/CardSearch";
import './App.css';
import HomeButton from './components/HomeButton';
import BackButton from './components/BackButton';
import styled from 'styled-components';


interface MyProps {
  counterStore?: any,
  SearchSingleCard?: any
}

interface MyState { }

const Wrapper = styled.div`
  width: 1140px;
  margin: 20px auto;
  border: 1px solid green;
`

@inject('counterStore', 'SearchSingleCard')
@observer
class App extends Component<MyProps, MyState>  {
  componentDidMount() {
    this.props.counterStore.fetchData();
  }

  render() {
    return (
      <Wrapper>
        <BackButton val="Home" color="secondary" hide={this.props.SearchSingleCard.hide}/>
        <HomeButton val="One card search" color="primary" show={this.props.SearchSingleCard.show}/>
        <CardSearch />
      </Wrapper>
    );
  }
}

export default App;
