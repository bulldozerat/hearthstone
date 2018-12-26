import React, { Component } from 'react';
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import CardSearch from "./components/CardSearch";
import './App.css';
import HomeButton from './components/HomeButton';
import BackButton from './components/BackButton';
import AllCards from './components/AllCards';
import ParametreSeach from './components/ParametreSearch';
import styled from 'styled-components';


interface MyProps {
  FetchAllCards?: any,
  SearchSingleCard?: any,
  SearchByParametres?: any
}

interface MyState { }

const Wrapper = styled.div`
  width: 870px;
  margin: 20px auto;
  background: #f9fafc;
  padding 20px;
`

@inject('FetchAllCards', 'SearchSingleCard', 'SearchByParametres')
@observer
class App extends Component<MyProps, MyState>  {

  ResetStart = () => {
    this.props.SearchSingleCard.hide();
    this.props.FetchAllCards.hideCards();
    this.props.FetchAllCards.hideSingleCard();
    this.props.SearchByParametres.clearParametre();
  }

  render() {
    return (
      <Wrapper>
        <BackButton val="Reset" color="secondary" reset={this.ResetStart} />
        <HomeButton val="One card search" color="primary" show={this.props.SearchSingleCard.show} />
        <HomeButton val="Search cars by parametres" color="primary" show={this.props.SearchByParametres.showParametreSearch}/>
        <AllCards />
        <CardSearch />
        <ParametreSeach />
      </Wrapper>
    );
  }
}

export default App;
