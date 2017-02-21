import React, { Component } from 'react';

import Header from './../Header/Header';
import TeamList from './../Team/TeamList/TeamList'  

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <TeamList />


        {/*       
        <TeamItem
          teamLogo="santos"
        />
        <ShirtItem
          shirtName="Santos"
          shirt={1}
          slug="st"
        />
        */}
        

      </div>
    );
  }
}
