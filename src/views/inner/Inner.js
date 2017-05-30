import React, { Component } from 'react';
import { Link } from 'react-router';

import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

import './Inner.scss';

export default class InnerView extends Component {
  constructor(props) {
    super(props);
    const { team } = props.params;

    this.state = {
      shirtYears: teamsData[team].shirtYears,
      team,
    };
  }

  render() {
    return (
      <div className="InnerView">
        <h2>{teamsData[this.state.team].name}</h2>
        {
          Object.entries(this.state.shirtYears).map((item, i) => {
            return(
              <Link
                key={i}
                className="InnerView__link"
                to={`/${teamsData[this.state.team].slug}/${item[1].slug}`}
              >
                <ShirtItem
                  shirtName={item[1].shirtName}
                  shirtImage={item[1].shirtImage}
                />
              </Link>
            )
          })
        }
      </div>
    )
  }
}
