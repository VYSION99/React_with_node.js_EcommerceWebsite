import React from 'react'
import { ImagePagination } from '../../../services/imageDisplayer';

//..................... Storage filter .........................................................................//
let fash,tech,food , DataBag = []
const BulkData = JSON.parse(localStorage.getItem("products"));
DataBag.push(BulkData)


function displayer() {
    for (var store of DataBag) {
  for (var data in store) {
    if (data === "tech") {
      tech = Array.from(new Set(store[data]));
    } if (data=== "fash") {
      fash =  Array.from(new Set(store[data]));
    } if (data === "food") {
      food =  Array.from(new Set(store[data]));
    } 

}
}
//console.log(tech.image)
    return (
    <div>displayer
        <ImagePagination images={tech} itemsPerPage={3}/>
    </div>
  )
}

export default displayer