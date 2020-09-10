import React from 'react';
import './Blog.css';

import FeaturedFruit from './FeaturedFruit';
import Sidebar from './Sidebar';

import Apple from '../Images/Apple.png';
import Banana from '../Images/Banana.png';
import Cherries from '../Images/Cherries.png';

const FRUITS = [
    {name: 'Apple', text: 'You are the Apple of my eye.', imgsrc: Apple},
    {name: 'Banana', text: 'You are driving me Bananas.', imgsrc: Banana},
    {name: 'Cherries', text: 'French for \'My Darling\' is \'Mon Cherry\'.', imgsrc: Cherries},
];

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {featuredFruit : 'Apple'};
        this.selectFeaturedFruit = this.selectFeaturedFruit.bind(this);
    }

    selectFeaturedFruit(name) {
        this.setState({featuredFruit : name});
    }

    render() {
        return (
            <div class="Blog">
                <div class="row">
                    <h1>
                        ABCs of Fruit!
                    </h1>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="col-xs-12" id="left-col">
                            <FeaturedFruit
                                fruits = {FRUITS}
                                featuredFruit = {this.state.featuredFruit}
                            />
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="col-xs-12" id="right-col">
                            <Sidebar
                                fruits = {FRUITS}
                                selectFeaturedFruit = {this.selectFeaturedFruit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;