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
  }

  componentDidMount() {
    this.setState({
      shirts: teamsData[this.state.id].shirts,
    });
  }

  render() {
    return (
      <div className="InnerView">
        <h2>{teamsData[this.state.id].name}</h2>
        {
          Object.entries(this.state.shirts).map((value, index) => {
            console.log(value[1][0])
            return(
              <Link
                key={index}
                className="InnerView__link"
                to={`/${teamsData[this.state.id].slug}/${value[1][0].slug}`}
              >
                <ShirtItem
                  shirtName={value[1][0].shirtName}
                  shirtImage={value[1][0].shirtImage}
                />
              </Link>
            )
            // return(
            //   value[1].map((value, index) => {
            //     // console.log(value)
            //     return(
            //       <Link
            //         key={index}
            //         className="InnerView__link"
            //         to={`/${teamsData[this.state.id].slug}/${value.slug}`}
            //       >
            //         <ShirtItem
            //           shirtName={value.shirtName}
            //           shirtImage={value.shirtImage}
            //         />
            //       </Link>
            //     )
            //   })
            // )
          })
        }
      </div>
    )
  }
}
