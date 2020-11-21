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
width:100%;
`


export default class AlbumDetail extends IndexController{

  constructor(props){
      super(props)
      this.state={
          images : [],
          search : '',
          loader : false,
          count : 0,
          res : false
      }

    
  }
  



  componentDidMount = async() =>{

    this.setState({loader : !this.state.loader})

    let data = await super.get_single_item(this.props.params.id)

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
                    
                      <Card >
                        <Img src={value['largeImageURL']} style={{height:400}}></Img>
                      </Card>
                    
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
          <Container  maxWidth="md" style={{marginTop : 20}}>
            <Grid container spacing={4}>
            
              <Grid item  xs={12} md={6} sm={6}>
                <ImageBlocks/>
              </Grid>

              <Grid item xs={12} md={6} sm={6}>
                {this.state.images[0] != undefined ? (
                    <div>
                      <h3>Type : {this.state.images[0].type}</h3>
                      <h3>Tags : {this.state.images[0].tags}</h3>
                      <h3>Views : {this.state.images[0].views}</h3>
                      <h3>Downloads : {this.state.images[0].downloads}</h3>
                      <h3>Favorites : {this.state.images[0].favorites}</h3>
                      <h3>Likes : {this.state.images[0].likes}</h3>
                      <h3>Comments : {this.state.images[0].comments}</h3>
                    </div>
                ) : <></>
                }
              </Grid>
            </Grid>
          </Container>
        </main>
    
      </React.Fragment>
      </>
    )
  }
}