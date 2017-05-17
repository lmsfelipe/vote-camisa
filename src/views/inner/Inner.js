import React, { Component } from 'react';
import { Link } from 'react-router';

import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

import './Inner.scss';

export default class InnerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      shirts: [],
    };

    this.sortByYear = this.sortByYear.bind(this);
  }

    sortByYear(year1, year2) {
      if (year1 > year2) {
        return 1;
      }
      if (year1 < year2) {
        return -1;
      }
      return 0;
    }

    componentDidMount() {
      console.log(teamsData[this.state.id].shirts)
      // this.setState({
      //   shirts: teamsData[this.state.id].shirts.sort(this.sortByYear),
      // });
    }

    render() {
      return (
        <div className="InnerView">
          <h2>{teamsData[this.state.id].name}</h2>
          {
            this.state.shirts.map((item, index) => {
              return(
                <Link
                  key={index}
                  className="InnerView__link"
                  to={`/${teamsData[this.state.id].slug}/${item.slug}`}
                >
                  <ShirtItem
                    shirtName={item.shirtName}
                    shirtImage={item.shirtImage}
                  />
                </Link>
              )
            })
          }
      </div>
    )
  }
}
