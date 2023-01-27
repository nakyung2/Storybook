import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function TrendCard(props) {
  const { title, content, date, writer, isLiked, likeCnt } = props

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="img/cu.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { content }
          </Typography>
          <Typography align='right' component="div" variant='body2'>
            { date }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-between'}}>
        <Button size="small" color="primary" sx={{ marginLeft: '4px !important' }}>
          { writer }
        </Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component='img'
            image={ isLiked ? 'img/heart.png' : 'img/heart_empty.png'}
            height='30.75'
          ></CardMedia>
          <Typography variant='body' marginLeft={.5}>
            { likeCnt }
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}