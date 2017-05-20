import React, { Component } from 'react';
import teamsData from './../../../json/teams';
import ShirtItem from './../ShirtItem/ShirtItem';
import { Button } from 'react-bootstrap';

export default class ShirtInner extends Component {
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
      <div className="ShirtInner">
        {
          teamsData[this.state.id].shirts.filter(this.filterShirt).map((item, i) =>
            <div key={i} className="ShirtInner__info">
              <ShirtItem
                shirtName={item.shirtName}
                shirtImage={item.shirtImage}
              />

              <p>{item.info}</p>

              <Button bsStyle="info" onClick={this.onClick}>
                Votar nesta camisa
              </Button>
            </div>
          )
        }
      </div>
    )
  }
}
