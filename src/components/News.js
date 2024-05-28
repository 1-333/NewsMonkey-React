import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'General'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
    articles = []
    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading:false,
            page:1
        }    
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8156e1a90064265821937c2e6e75ee2&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      })
    }
    
    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8156e1a90064265821937c2e6e75ee2&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading: false
        })
    }

    handleNextClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8156e1a90064265821937c2e6e75ee2&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }


  render() {
    return (
      <div>
        <div className="container my-5">
          <h1 className="text-center">NewsMonkey - Top Headlines</h1>
            {this.state.loading &&  <Spinner/>}
            <div className="row my-5" >
                {! this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItems title = {element.title}description ={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>  
                })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}
