import React from 'react';
import { connect } from 'react-redux';
import { updateQuote } from './quoteAction';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue, grey } from '@mui/material/colors';

const themeColor = blue[100]

const Quotes = ({ quoteState, changeQuote }) => {
  const handleOnClick = () => {
    changeQuote();
    // console.log(" in handleOnClick")
    // console.log(changeQuote)
  }

  return (
    <div>
      <div id="quote-box">

      </div>
      <Card sx={{ maxWidth: 345, margin: "100px auto", width: "50%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {quoteState.quote}

          </Typography>
          <Typography sx={{ mb: 1.5, margin: "0px 5px 0px 0px" }} color="text.secondary">
            {quoteState.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <TwitterIcon sx={{ fontSize: 40, color: themeColor }} />
            </Grid>
            <Grid item xs={8}>
              <Button sx={{ fontSize: 20, color: themeColor }} variant="contained" onClick={handleOnClick} >
                <Typography sx={{ color: grey[100] }}>
                  New Quote
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>

    </div>
  )

}


const mapStateToProps = (state) => ({
  quoteState: state,
});

const mapDispatchToProps = (dispatch) => {
  console.log("in map dispatch to props");
  return ({
    changeQuote: () => dispatch(updateQuote()),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Quotes);