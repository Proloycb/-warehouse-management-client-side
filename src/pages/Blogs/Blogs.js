import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Question answer</h1>
            <div>
                <h4>Difference between javascript and nodeJS</h4>
                <p>Javascript: Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.Javascript is capable enough to add HTML and play with the DOM. </p>
                <p>NodeJS: NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. Nodejs does not have capability to add HTML tags. </p>
            </div>
            <div>
                <h4>When should you use nodejs and mongodb?</h4>
                <p> MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That's why we use nodeJS.</p>
            </div>
            <div>
                <h4>Difference between Sql and noSql</h4>
                <p>SQL: RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage.</p>
                <p>NoSQL: Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. </p>
            </div>
        </div>
    );
};

export default Blogs;