import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//import component
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

// const App = () => {

//     console.log("Data in JSON :: ", JSON);

//  return (
//  <div> <Header/></div>
//  )
// }

class App extends Component{

constructor(props){
    super(props);

    this.state = {
        news:JSON,
        filteredNews : JSON
    }
}
    filterNews(keywords){
        console.log("News filter key:",keywords)

        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords.toUpperCase()|| keywords.toLowerCase()) > -1
        })

        this.setState({filteredNews:filtered});
    }
    render(){
        return(
            <div> 
                <Header newsSearch={keywords=>this.filterNews(keywords)}/>
                <NewsList news={this.state.filteredNews}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>,document.querySelector("#root"));