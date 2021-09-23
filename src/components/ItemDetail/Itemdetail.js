import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class ItemsDetail extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            items:[],
        }     
    }
    imagefatch= async ()=>{
        
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`)
        const items= await data.json();
        console.log(items);
        this.setState({items:items.data.item})
        console.log(this.state.items);
    }

    render() {
        return (
            <div>
            <button type="button" onClick={this.imagefatch}>Show</button>
                <h1>{this.state.items.name}</h1>
            </div>
        )
    }
}
