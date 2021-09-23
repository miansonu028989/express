import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            items:[],
        }     
    }
    imagefatch= async ()=>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const item = await data.json();
        console.log(item.data);
        this.setState({items:item.data})
        console.log(this.state.items);
    }
     
    render() {
        return (
            <div>
            <button type="button" onClick={this.imagefatch}>Show</button>
                {this.state.items.map((item) => (
                    <h1 key={item.itemId}>
                        <Link to= {`/about/${item.itemId}`}>{item.item.name}</Link>
                    </h1>
                ))}
            </div>
        )
    }
}
