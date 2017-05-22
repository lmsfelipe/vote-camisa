import React, { Component } from 'react';
import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

export default class ShirtInnerView extends Component {
  constructor(props) {
    super(props);
    const { id, slug } = props.params;

    this.state = {
      slug,
      id,
      shirtYears: [],
    };

    this.filterShirt = this.filterShirt.bind(this);
  }

  filterShirt(shirt) {
    return shirt.slug === this.state.slug;
  }

  componentDidMount(){
    this.setState({
      shirtYears: teamsData[this.state.id].shirtYears[this.state.slug].shirts,
    })
  }

  render() {
    return (
      <div className="ShirtInnerView">
        {
          this.state.shirtYears.map((item, i) => {
            return (
              <div key={i} className="ShirtInnerView__info">
                <ShirtItem
                  shirtName={item.shirtName}
                  shirtImage={item.shirtImage}
                />
                <p>{item.info}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
