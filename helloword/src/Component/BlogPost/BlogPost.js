import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function BlogPost() {
  const classes = useStyles();

  return (
    <Card className= {classes.card} style={{ display: 'inline-block', marginRight: '12vw', marginLeft: '1vw', marginBottom: '3vh', position: 'relative', left: '7vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="IMac Pro"
          height="160"
          image={require ("./bg-3.jpg")}
          title="IMac Pro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            IMac Pro
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           lorem ipsum dolore lorem lorem lorem lorem lorem lorem lorem lorem   
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}