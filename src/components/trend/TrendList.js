import React from "react";
import Card from './TrendCard'
import Grid from '@mui/material/Grid';

const TrendList = (props) => {
  // api 받아다가 꽂아넣기
  const cardList = [
    {
      title: 'title',
      content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      date: '2023-01-01',
      writer: 'writer',
      isLiked: true,
      likeCnt: 10,
    },
    {
      title: 'title',
      content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      date: '2023-01-01',
      writer: 'writer',
      isLiked: false,
      likeCnt: 10,
    },
    {
      title: 'title',
      content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      date: '2023-01-01',
      writer: 'writer',
      isLiked: false,
      likeCnt: 10,
    },
    {
      title: 'title',
      content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      date: '2023-01-01',
      writer: 'writer',
      isLiked: true,
      likeCnt: 10,
    },
  ]

  return (
    <Grid
      container
      spacing={4}
      justifyContent='space-between'
    >
      { cardList.map((card, i) => (
        <Grid item>
          <Card
            key={i}
            title={card.title}
            content={card.content}
            date={card.date}
            writer={card.writer}
            isLiked={card.isLiked}
            likeCnt={card.likeCnt}
          ></Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default TrendList