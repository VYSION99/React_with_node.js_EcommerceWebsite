import React, { useState, useEffect } from'react';
import { Button, Container,  Image } from'react-bootstrap';
import fs from'fs';

const imagesFolder = 'images';

const App = () => {
  const [images, setImages] = useState([]);
  // read images from folder and add to state variable
  useEffect(() => {
    const readImages = async () => {
      const imagesFolder = "/image"
      const images = [];
      const files = fs.readdirSync(imagesFolder);
      for (const file of files) {
        const filename = `${imagesFolder}/${file}`;
        const imageData = fs.readFileSync(filename);
        images.push(imageData);
      }
      setImages(images);
    };
    readImages();
  }, []);
 console.log(images)
  return (
    <Container>
      <div container className="mt-5 grid">
        {images.map((image, index) => (
          <div className='grid' item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <Image src={image} alt={`Image ${index}`} width="100" height="100" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default App;