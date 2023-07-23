import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
//import PropTypes from 'prop-types'


export default class News extends Component {
    // static defaultProps = {
    //     country:'in',
    //     pagesize:8
    // }

    // static propTypes = {
    //     country : PropsTypes.string,
    //     pagesize: PropsTypes.number

    // }
    constructor(props){
        super(props);
        console.log("i am a constructor");
        this.state={
            articles:[],
            loading: false,
            page:1
            
        }
        document.title = this.props.category;
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=411777379a114418a28d5e96639bf46a&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(data);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});

    }

    handlePrevious =async ()=>{
        console.log("Previous");
        console.log("Next");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=411777379a114418a28d5e96639bf46a&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(data);
        
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
        })
    }

    handleNext =async ()=>{
    
        console.log("Next");
        if(!(this.state.page + 1>Math.ceil(this.state.totalResults/20))){

        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=411777379a114418a28d5e96639bf46a&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        // console.log(data);
        
        
        this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading: false
        })
    }
    }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> News Headlines</h1>
        {this.state.loading && <Spinner/>}
       
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return  <div className="col-md-3" key={element.url} >
        
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>

        })}
           
       
        
       
        
        </div>
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
        <button  type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>


        </div>
        
      </div>
      
    )
  }
}
