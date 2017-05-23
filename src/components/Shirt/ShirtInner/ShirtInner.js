import React, { Component } from 'react';
import ShirtItem from './../ShirtItem/ShirtItem';
import { Button } from 'react-bootstrap';

export default class ShirtInner extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const team = e.target.getAttribute('data-team');
    const shirt = e.target.getAttribute('data-shirt');
    this.props.registerVote(team, shirt);
  }

  render() {
    return (
      <div className="ShirtInner">
        {
          this.props.teams.map((item, i) =>
            <div key={i} className="ShirtInner__info">
              <ShirtItem
                shirtName={item.shirtName}
                shirtImage={item.shirtImage}
              />

              <p>{item.info}</p>

              <Button
                bsStyle="info"
                data-team={this.props.id}
                data-shirt={item.slug}
                onClick={this.onClick}
              >
                Votar nesta camisa
              </Button>
            </div>
          )
        }
      </div>
    )
  }
}
