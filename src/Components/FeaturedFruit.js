import React from 'react';
import './FeaturedFruit.css';

class FeaturedFruit extends React.Component {

    renderFeaturedFruit() {
        return this.props.fruits.map(fruit => (
            (fruit.name===this.props.featuredFruit)&&
            <div class="FruitCard">
                <h3>{fruit.name}</h3>
                <img src = {fruit.imgsrc} width='500'/>
                <h3>{fruit.text}</h3>
            </div>
        ));
    }

    render() {
        return (
            <div class="FeaturedFruit">
                <h2>FeaturedFruit</h2>
                {this.renderFeaturedFruit()}
            </div>
        );
    }
}

export default FeaturedFruit;