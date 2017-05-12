import React, { Component } from 'react';
import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

export default class InnerView extends Component {
    render() {
        const {id} = this.props.params;
        return (
            <div className="InnerView">
                <h2>{teamsData[id].name}</h2>
                {
                    teamsData[id].shirts.map((item, index) => {
                        return(
                            <ShirtItem
                            key={index}
                            shirtName={item.shirtName}
                            shirtImage={item.shirtImage}
                            />
                        )
                    })   
                }
            </div>
        )
    }
}
