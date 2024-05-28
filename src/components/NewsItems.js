import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
                <img src= {!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/04/19/1600x900/India_Flag_1713518778477_1713518820010.jpeg": imageUrl} className="card-img-top" alt="error"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
        </div>
      </div>
    )
  }
}
