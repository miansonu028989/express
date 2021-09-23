import React, { Component} from 'react'


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
        console.log(this.props.match);
    }

    render() {
        return (
            <div>
            <button type="button" onClick={this.imagefatch}>Show</button>
                <h1>
                 item
                </h1>
            </div>
        )
    }
}
