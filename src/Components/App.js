import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {
    async onSearchSubmit(term){
        const response= await axios.get('https://api.unsplah.com/search/photos',{
            params: { query: term},
            headers: {
                Authorizaton: 'Client-ID xlLdFP_MhrG4gzSUd2zbADPlmR9f8AJnt-21xEd7Fzk'
            }
        })
    }
    render(){
    return( <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            </div>)
    }
}

export default App;

