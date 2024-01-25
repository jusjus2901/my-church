import ImageComponent from "@/components/ImageComponent";
import Image from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/worship.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const images = [image1, image2, image3, image4];

const ChurchPage = () => {
  return (
  <>
    <div className="overscroll-y-none">
      <div  className="relative text-white mt-[77px]">
        <ImageComponent src="/worship.jpg" className="w-full h-[48rem] absolute object-cover top-0 left-0 z-[-1]" />
        <div className="flex flex-col items-center justify-center min-h-[650px]">
          <div className="text-5xl z-[-1]">Welcome To</div>
          <div className="text-7xl text-red-700 z-[-1]">United Pentecostal Church</div>
          <div className="text-2xl py-4 z-[-1]">We ensure your spirit chuchu</div>
        </div>
      </div>
    </div>
    

    <div className="container mx-auto flex justify-between my-[100px] p-[100px] bg-white rounded-lg shadow-2xl">
    <div className="w w-2/4 pr-8">
      <p className="text-xl text-center font-bold mb-4">Lorem Ipsum</p>
      <p className="text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div className="w-1/3">
      Image diri
    </div>
  </div>


  <div className="flex items-center justify-center">
    <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <div className="relative w-full h-full pb-[56.25%]">
                    <Image
                      className="absolute inset-0 object-cover w-full h-full border"
                      src={image}
                      alt={`carousel-item-${index}`}
                    />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  </div>
    




  </>
  )
}

export default ChurchPage;