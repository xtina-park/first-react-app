import React from 'react';
import './FruitCard.css';

class FruitCard extends React.Component {
    render() {
        return (
            <div class="FruitCard">
                <h3>{this.props.fruit.name}</h3>
                <img src={this.props.fruit.imgsrc} width='200'/>
                <br/><br/>
                <button onClick={() => 
                    this.props.selectFeaturedFruit(this.props.fruit.name)
                }>Select Me!</button>
            </div>
        );
    }
}

export default FruitCard;