import React, {useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link';
import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';

import IndexController from '../shared/controllers'


const Img = styled.img`
  width:100%;
`
const SearchButton = styled(Button)`
padding: 1em !important;
margin-top: 1em !important;
`

const Loader = styled.div`
text-align:center;
margin:0 auto;
`

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default class Album extends IndexController{

  constructor(){
      super()
      this.state={
          images : [],
          search : '',
          loader : false,
          count : 0,
          res : false
      }

      this.get_search_param = this.get_search_param.bind(this);
      this.fetchImages = this.fetchImages.bind(this);
  }
  



  get_search_param = (search) =>{
    this.setState({search , search})
  }





  fetchImages = async() =>{

    this.setState({loader : !this.state.loader})

    let search_param = encodeURIComponent(this.state.search)

    let data = await super.get_search_item(search_param)

    this.setState({images :  data[0].images , count: data[0].count})

    this.setState({loader : !this.state.loader})

    this.setState({res : true})
  }





  render(){
    const ImageBlocks = () =>{
      if(this.state.loader)
      {
        return (
                <>
                <Loader>
                <CircularProgress />
                <CircularProgress color="secondary" />
                </Loader>
                </>
        )
      }
      else
      {
        if(this.state.count == 0 && this.state.res)
        {
            return (
                <Loader>
                <h2>No Results Found...</h2>
                </Loader>
            )
        }
        else
        {
            return (
                Object.entries(this.state.images).map(([key,value]) => ( 
                    <Grid item key={key} xs={12} sm={6} md={4}>
                      <Card >
                        <Img src={value['largeImageURL']} style={{height:250}}></Img>
                        <CardActions>
                          <Link href={{
                              pathname : '/photos',
                              query : {
                                id : value['id']
                              }
                          }} as={`/photos/${value['id']}`} style={{fontWeight:600}}>
                            View Details
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                ))
            )
        }
          
      }
  }
    return (
      <>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            {/* <CameraIcon className={classes.icon} /> */}
            <Typography variant="h6" color="inherit" noWrap>
              Image Searh
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div>
            <Container maxWidth="lg" style={{marginTop : 50}}>

              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Image Search
              </Typography>

              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
              </Typography>

              <div style={{marginTop : 50}}>
                <Grid container spacing={10} justify="center">
                  <Grid item sm={6} style={{ padding: 10 }}>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Search Keyword"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange = {(e) => this.get_search_param(e.target.value) }
                  />
                  </Grid>
                  <Grid item sm={1} style={{ padding: 10 }}> 
                    <SearchButton variant="contained" color="primary" onClick = {() => this.fetchImages()}>
                      Search
                    </SearchButton>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container  maxWidth="md" style={{marginTop : 20}}>
            {/* End hero unit */}
            <Grid container spacing={4}>
              <ImageBlocks/>
            </Grid>
          </Container>
        </main>
    
      </React.Fragment>
      </>
    )
  }
}