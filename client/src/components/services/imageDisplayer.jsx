import React, { useState } from 'react';
import { BaseURL } from './exporter.';

export const ImagePagination = ({ images, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageImages = images.slice(startIndex, endIndex);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  console.log(pageImages.map((x,y)=>{
    return x.image
  }))
  return (
    <div>
      <div className="image-container bg-red-600">
        {pageImages.map((image, index) => (
          
          
          <>
          <img key={index} src={(BaseURL+"/"+image.image).replace(/\\/g, '/')} alt={`Image ${index + startIndex + 1}`} />
          <p></p>
          </>
        ))}
      </div>
      <div className="pagination bg-slate-800">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

 export const ImageDiff =(data) =>{

for ( var store of data){
  for (var obj in store){
    return  store[obj]
  }
}

 }