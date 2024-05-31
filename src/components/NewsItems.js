import React, { Component } from 'react'
export default class NewsItems extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://www.zleague.gg/theportal/wp-content/uploads/2024/02/portal-gaming-news-2-1024x570.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="badge text-bg-secondary" style={{margin: "3px"}}>{source}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark"> Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
