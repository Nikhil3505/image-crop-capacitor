import Cropper from 'react-easy-crop';
import { useState } from 'react';

const ImageCropper = ({ image }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="relative w-[300px] h-[300px]">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
      />
    </div>
  );
};

export default ImageCropper;
