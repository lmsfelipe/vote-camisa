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
    };

    this.filterShirt = this.filterShirt.bind(this);
  }

  filterShirt(shirt) {
    return shirt.slug === this.state.slug;
  }

  render() {
    return (
      <div className="ShirtInnerView">
        {
          Object.entries(teamsData[this.state.id].shirts).map((value, index) => {
            return(
              value[1].filter(this.filterShirt).map((item, i) => {
                return (
                  <div key={i} className="ShirtInnerView__info">
                    <ShirtItem
                      shirtName={item.shirtName}
                      shirtImage={item.shirtImage}
                    />
                    <p>{item.info}</p>
                    <button>Votar</button>
                  </div>
                )
              })
            )
          })
        }
      </div>
    )
  }
}