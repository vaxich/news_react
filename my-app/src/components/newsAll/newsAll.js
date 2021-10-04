import React from 'react';
import '../newsAll/newsAll.scss';
import {withRouter} from 'react-router-dom';

const NewsAll = props => {   

    let oneNews = props.newsOnAll && props.newsOnAll.filter((item, index) => {  
        
    return index < props.all;
        
    }).map(item => {
    return (    
        
        <div onClick = {()=> {
            
            props.history.push('/News/' + item.title, item)
            
        }}>
            
        <div className="NewsAll__block">
            <p className="NewsAll__block-title">{item.title}  </p>
            <div className="NewsAll__block-bottom">
                <p className="NewsAll__author"> {item.source.name} </p>
                <p className="NewsAll__published">{item.publishedAt.substr(0,10)}  </p>
            </div>
            
        </div>
        </div> 
            )
    })
;
    
    return (
        
        <div className = "newsAll">  
            <div > 
                <p className="newsAll__title">{props.title}</p>
                <div className="newsAll__title-2">
                    <p className="newsAll__title">{props.title2}</p>
                    <p className="newsAll__title newsAll__title-blue">{props.title3}</p>
                </div>
                
            </div>                                   
            
            <div className="newsAll__mainBlock">{oneNews}</div> 
        </div>
    )
}

export default withRouter(NewsAll);