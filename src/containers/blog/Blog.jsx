import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const articleData = [
  {
    date: 'Jul 26, 2023',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog01
  },
  {
    date: 'Jul 26, 2023',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog02
  },
  {
    date: 'Jul 26, 2023',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog03
  },
  {
    date: 'Jul 26, 2023',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog04
  },
  {
    date: 'Jul 26, 2023',
    text: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog05
  },
];
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        {articleData.slice(0,1).map((item, index) => (
          <Article imgUrl={item.img} date={item.date} text={item.text} key={index}/> 
        ))}
      </div>
      <div className="gpt3__blog-container_groupB">
        {articleData.slice(1).map((item, index) => (
          <Article imgUrl={item.img} date={item.date} text={item.text} key={index}/> 
        ))}
      </div>
    </div>
  </div>
);

export default Blog;