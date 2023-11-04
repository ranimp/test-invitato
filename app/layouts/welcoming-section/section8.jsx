'use client';

import { Box, Image } from '@chakra-ui/react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Animation from '@/app/components/animation';

export default function Section8() {
  const images = [
    {
      original: "https://invitato.net/template-nailalvia/static/6-69c0f11761cb53c65f57b7ae6791a41d.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/6-69c0f11761cb53c65f57b7ae6791a41d.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/7-e3f594be159e0f2109bad0d7b9eeb98d.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/7-e3f594be159e0f2109bad0d7b9eeb98d.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/1-5d10a90fe5fe420d227b4e5b129e3798.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/1-5d10a90fe5fe420d227b4e5b129e3798.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/2-884e618dbd1230a324d23cbf06c2688e.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/2-884e618dbd1230a324d23cbf06c2688e.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/3-dd508b73ca8a7ba48ea65fe6dc95015b.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/3-dd508b73ca8a7ba48ea65fe6dc95015b.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/4-2fab63d5fe7ae6be1d9938e017300785.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/4-2fab63d5fe7ae6be1d9938e017300785.jpg",
    },
    {
      original: "https://invitato.net/template-nailalvia/static/5-89c7d3a566b24cc8f7efe2bd9df76e3e.jpg",
      thumbnail: "https://invitato.net/template-nailalvia/static/5-89c7d3a566b24cc8f7efe2bd9df76e3e.jpg",
    },
  ];

  const customLeftArrow = (onClick, disabled) => (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      onClick={onClick}
      disabled={disabled}
      style={{ fontSize: "20px" }}
    >
      &lt;
    </button>
  );

  const customRightArrow = (onClick, disabled) => (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav"
      onClick={onClick}
      disabled={disabled}
      style={{ fontSize: "20px" }}
    >
      &gt;
    </button>
  )

  return (
    <Box w="100%" pb="20px" pt="100px" bgColor="#FFF">
      <style>
        {`
          .image-gallery-image {
            border-radius: 16px;
          }
        `}
      </style>
      <Box p="16px">
        <Animation>
          <Image src="https://user-images.githubusercontent.com/10141928/147430930-d27df943-444f-41cc-8d5f-4d9da680d668.jpeg" alt="wedding" w="100%" h="100%" borderRadius="16px" mb="12px" />
        </Animation>
        <Animation>
          <ImageGallery 
            items={images}
            autoPlay={true} 
            showThumbnails={false} 
            renderItem={(item) => (
              <div className="image-gallery-image">
                <img
                  src={item.original}
                  alt={item.description}
                  style={{ borderRadius: "16px" }}
                />
              </div>
            )}
            renderLeftNav={customLeftArrow}
            renderRightNav={customRightArrow}
          />
        </Animation>
      </Box>
    </Box>
  );
}
