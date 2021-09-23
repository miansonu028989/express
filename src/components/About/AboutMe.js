import React, { Component} from 'react'

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            items:[],
        }     
    }
    imagefatch= async (event)=>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const item = await data.json();
        console.log(item.data);
        this.setState({items:item.data})
        console.log(this.state.items);
    }
    itams=this.items;
    render() {
        return (
            <div>
            <button type="button" onClick={this.imagefatch}>Show</button>
                {this.state.items.map((item,index) => (
                    <h1>
                        {item.item.name}
                    </h1>
                ))}
            </div>
        )
    }
}
