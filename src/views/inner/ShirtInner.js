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
      shirts: [],
    };

    this.filterShirt = this.filterShirt.bind(this);
  }

  filterShirt(shirt) {
    return shirt.slug === this.state.slug;
  }

  componentDidMount(){
    this.setState({
      shirts: teamsData[this.state.id].shirts[this.state.slug],
    })
  }

  render() {
    return (
      <div className="ShirtInnerView">
        {
          this.state.shirts.map((item, i) => {
            if(i !== 0){
              return (
                <div key={i} className="ShirtInnerView__info">
                  <ShirtItem
                    shirtName={item.shirtName}
                    shirtImage={item.shirtImage}
                  />
                  <p>{item.info}</p>
                </div>
              )
            }
          })
          // Object.entries(teamsData[this.state.id].shirts).map((value, index) => {
          //   return(
          //     value[1].filter(this.filterShirt).map((item, i) => {
          //       return (
          //         <div key={i} className="ShirtInnerView__info">
          //           <ShirtItem
          //             shirtName={item.shirtName}
          //             shirtImage={item.shirtImage}
          //           />
          //           <p>{item.info}</p>
          //           <button>Votar</button>
          //         </div>
          //       )
          //     })
          //   )
          // })
        }
      </div>
    )
  }
}
