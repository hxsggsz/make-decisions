import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../heading/heading';
import image from '/image-index.png'
import image2 from '/image-index-2.png'
import image3 from '/image-index-3.png'
import image4 from '/image-index-4.png'
import * as style from ".";
import { motion } from "framer-motion";

export const Slider = () => {
  const content = [
    { text: 'Seus amigos não conseguem se decidir?', image },
    { text: 'Sua namorada sempre diz “tanto faz”?', image: image2 },
    { text: 'Liste todas as opções do que fazer aqui.', image: image3 },
    { text: 'E mande para os seus amigos votarem!', image: image4 },
  ]

  return (
    <style.slider>

      <Carousel
        autoPlay={true}
        centerMode={true}
        showThumbs={false}
        stopOnHover={true}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {
          content.map((item, index) => (
            <style.container className="container" key={index}>

              <motion.div whileHover={{ scale: 1.2, y: 20 }}>
                <img className="image" width={100} height={200} src={item.image} alt={image} />
              </motion.div>

              <Heading size="md">{item.text}</Heading>

            </style.container>
          ))
        }
      </Carousel>
    </style.slider>
  )
}
