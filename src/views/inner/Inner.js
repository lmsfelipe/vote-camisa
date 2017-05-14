import React, { Component } from 'react';
import { Link } from 'react-router';

import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

import './Inner.scss';

export default class InnerView extends Component {
    render() {
        const {id} = this.props.params;
        return (
            <div className="InnerView">
                <h2>{teamsData[id].name}</h2>
                {
                    teamsData[id].shirts.map((item, index) => {
                        return(
                            <Link
                                key={index}
                                className="InnerView__link"
                                to={`/${teamsData[id].slug}/${item.slug}`}
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
