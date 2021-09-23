import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class ItemsDetail extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            items:{},
            images:{},
        }     
    }
    imagefatch= async ()=>{
        
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`)
        const items= await data.json();
        console.log(items);
        this.setState({items:items.data.item})
        this.setState({images:items.data.item.images})
        console.log(this.state.items);
        console.log(this.state.images);
    }

    render() {
        return (
            <div>
            <button type="button" onClick={this.imagefatch}>Show</button>
                <img src={this.state.images.background} alt="..."/>
            </div>
        )
    }
}
