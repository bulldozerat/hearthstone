import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import CardSearch from "./components/CardSearch";
import './App.css';
import HomeButton from './components/HomeButton';
import BackButton from './components/BackButton';
import AllCards from './components/AllCards';
import styled from 'styled-components';


interface MyProps {
  FetchAllCards?: any,
  SearchSingleCard?: any,
  ClassSingleCard?: any
}

interface MyState { }

const Wrapper = styled.div`
  width: 870px;
  margin: 20px auto;
  border: 1px solid green;
`

@inject('FetchAllCards', 'SearchSingleCard', 'ClassSingleCard')
@observer
class App extends Component<MyProps, MyState>  {
  componentDidMount() {
    //this.props.FetchAllCards.fetchData();
  }

  ResetStart = () => {
    this.props.SearchSingleCard.hide();
    this.props.FetchAllCards.hideCards();
  }

  render() {
    return (
      <Wrapper>
        <BackButton val="Reset" color="secondary" reset={this.ResetStart} />
        <HomeButton val="One card search" color="primary" show={this.props.SearchSingleCard.show} />
        <AllCards />
        <CardSearch />
      </Wrapper>
    );
  }
}

export default App;
