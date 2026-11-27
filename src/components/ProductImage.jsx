import { useState } from "react";
import { LuImage } from "react-icons/lu";

export default function ProductImage({
  product,
  className = "",
  loading = "lazy"
}) {

  const [failedImage, setFailedImage] = useState(null);

  return (
    <>
      {product.image && failedImage !== product.image ? (

        <img
          src={product.image}
          alt={product.name}
          loading={loading}
          referrerPolicy="no-referrer"
          className={className}
          onError={() => {
            setFailedImage(product.image);
            console.log("Image Error:", product.image);
          }}
        />

      ) : (

        <div className="w-full h-full flex flex-col items-center justify-center gap-2">

          <LuImage size={40} className="text-gray-400" />

          <p className="text-xs text-gray-500">
            Image Unavailable
          </p>

        </div>

      )}
    </>
  );
}