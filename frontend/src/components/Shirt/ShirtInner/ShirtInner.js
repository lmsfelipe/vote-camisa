import React, { Component } from 'react';
import ShirtItem from './../ShirtItem/ShirtItem';
import { Link } from 'react-router';

export default class ShirtInner extends Component {
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

              <Link
                className="btn btn-primary"
                to={`/${this.props.id}/${this.props.slug}/${item.slug}`}
              >
                Ver detalhes desta camisa
              </Link>
            </div>
          )
        }
      </div>
    )
  }
}
