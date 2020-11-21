const GetSearchItem = async(search_param) => {
 
    let Items = await fetch(
     'https://pixabay.com/api/?key=14610280-533c0da32f4e2adb7af2d74b8&q='+search_param+'&image_type=photo:4000/photos',
      {
        method: "GET",
      }
    )
    
    let ListData = await Items.json()
    
    return ListData
}
module.exports.GetSearchItem =  GetSearchItem;




const GetSingleItem = async(id) => {
 
  let Items = await fetch(
   'https://pixabay.com/api/?key=14610280-533c0da32f4e2adb7af2d74b8&id='+id+'&image_type=photo:4000/photos',
    {
      method: "GET",
    }
  )
  
  let ListData = await Items.json()
  
  return ListData
}
module.exports.GetSingleItem =  GetSingleItem;