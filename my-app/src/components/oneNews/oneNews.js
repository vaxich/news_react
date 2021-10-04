import React from 'react';
import {withRouter} from 'react-router-dom';
import '../oneNews/OneNews.scss';

const OneNews = props => {
    
    return (
        <div className="OneNews__block">
            <h2 >{props.match.params.name}   </h2>
            <h4>{props.location.state.content}</h4>
            <img src={props.location.state.urlToImage}/>
            <h4>{props.location.state.author}</h4>
            <h4>{props.location.state.publishedAt}</h4>
            
            
        </div>
    )
}

export default withRouter(OneNews);