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
}

interface MyState { }

const Wrapper = styled.div`
  width: 870px;
  margin: 20px auto;
  background: #f9fafc;
  padding 20px;
`

@inject('FetchAllCards', 'SearchSingleCard')
@observer
class App extends Component<MyProps, MyState>  {
  componentDidMount() {
    //this.props.FetchAllCards.fetchData();
  }

  ResetStart = () => {
    this.props.SearchSingleCard.hide();
    this.props.FetchAllCards.hideCards();
    this.props.FetchAllCards.hideSingleCard();
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
