import React, {Component} from "react";
import Card from "./card";
import Searchfield from "./searchfield"

class App extends Component{
    constructor(){
        super();
        this.state = {
            alldata : [],
            searchData : '',
        }
    };
    componentDidMount(){
        fetch('https://pixabay.com/api/?key=19392297-967c7333af1e8db300d00c61e&q=yellow+trucks&image_type=photo&pretty=true').then(respone => respone.json()).then(data => this.setState({alldata:data.hits}));
    };
    searchProduct = (e) =>{
        //console.log(e.target.value);
        this.setState({
            searchData : e.target.value
        });
    };
    render(){
        let searchfilter = this.state.alldata.filter(data => data.user.toLowerCase().includes(this.state.searchData.toLowerCase()));
        return(
            <div className="containers">
                <div className="row">
                    <Searchfield searchProductFilter={this.searchProduct}/>
                </div>
                <div className="row">
                    {
                        searchfilter.map(data => <Card data={data} key={data.id} />)
                    }
                </div>
            </div>
        )
    }
}

export default App;