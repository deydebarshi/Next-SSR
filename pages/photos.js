import React from 'react'
import AlbumDetail from '../component/photos'

const Photos = (props) =>{

    return(
        <AlbumDetail params = {props}/>
    )
}
export default Photos


Photos.getInitialProps = ({query}) =>{
    return query
}