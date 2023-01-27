import React from "react";
import CreateArticle from '../components/article/CreateArticle'
// import Article from '../components/article/Article'
// import Article1 from '../components/article/Article1'
// import Article2 from '../components/article/Article2'
import ArticleList from '../components/article/ArticleList'

import './ArticlePage.css'

const ArticlePage = () => {
  return (
    <div className="article-page">
      <div className="article-create">
        <CreateArticle />
      </div>
      <div className="article-list">
        <ArticleList />
      </div>
    </div>
  )
}

export default ArticlePage

// asd