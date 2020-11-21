import React , {Component} from 'react'
const Service = require('../services/services')

class IndexController extends Component{

    
    async get_search_item(search_param){

        const res = await Service.GetSearchItem(search_param)

        return [{
            'images' : res.hits,
            'count' : res.hits.length
            } 
        ]
    
    }


    async get_single_item(id){
        const res = await Service.GetSingleItem(id)

        return [
            {
                'images' : res.hits,
                'count' : res.hits.length
            }
        ]

    }
    


}
export default IndexController

    