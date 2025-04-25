import { useState } from 'react';
import ImageCropper from '../components/ImageCropper';

export default function Home() {
  const [image, setImage] = useState('/sample.jpg');

  return (
    <div style={{ padding: 20 }}>
      <h1>Image Crop App</h1>
      <ImageCropper image={image} />
    </div>
  );
}
