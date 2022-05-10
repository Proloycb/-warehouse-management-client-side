import React, { useEffect, useState } from 'react';
import News from '../News/News';

const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('https://young-basin-02785.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setAllNews(data));
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center text-success mt-5 mb-5'>Latest News</h3>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    allNews.map(news => <News
                        key={news._id}
                        news={news}
                    />)
                }
            </div>
        </div>
    );
};

export default AllNews;