import React from 'react';

const News = ({news}) => {
    const {image, name, description} = news;
    return (
        <div className="card-group col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default News;