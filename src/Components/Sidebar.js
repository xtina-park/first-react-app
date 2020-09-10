import React from 'react';
import './Sidebar.css';

import FruitCard from './FruitCard';

class Sidebar extends React.Component {
    
    fruitList() {
        return this.props.fruits.map(fruit => (
            <FruitCard
                fruit = {fruit}
                selectFeaturedFruit = {this.props.selectFeaturedFruit}
            />
        ));
    }
    
    render() {
        return (
            <div class="sidebar">
                <h2>Options</h2>
                {this.fruitList()}
            </div>
        )
    }
}

export default Sidebar;