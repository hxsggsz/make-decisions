// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading } from '../heading/heading';
import image from '/image-index.png'
import image2 from '/image-index-2.png'
import image3 from '/image-index-3.png'
import image4 from '/image-index-4.png'
import { StyledSlider } from ".";
import { motion } from "framer-motion";

type SliderProps = {
  desktop?: boolean | null;
}

export const Slider = ({ desktop }: SliderProps) => {
  const teste = [
    { text: 'Seus amigos não conseguem se decidir?', image },
    { text: 'Sua namorada sempre diz “tanto faz”?', image: image2 },
    { text: 'Liste todas as opções do que fazer aqui.', image: image3 },
    { text: 'E mande para os seus amigos votarem!', image: image4 },
  ]

  return (
    <StyledSlider>

      <Carousel centerMode={true} showThumbs={false} autoPlay={true} stopOnHover={true} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false}>
        {
          teste.map((item, index) => (
            <div className="container" key={index}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <img className="image" width={100} height={200} src={item.image} alt={image} />
              </motion.div>

              {!desktop && <Heading size="md">{item.text}</Heading>}

            </div>
          ))
        }
      </Carousel>
    </StyledSlider>
  )
}
