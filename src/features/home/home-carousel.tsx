import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import iphone16 from "@/assets/images/iphone16.jpg";
import householdGoods from "@/assets/images/household_goods.png";
import sportEquipments from "@/assets/images/sport_equipments.jpg";

function HomeCarousel() {
  return (
    <Carousel className="w-full bg-slate-100 h-[calc(100vh-74px)] relative">
      <CarouselContent>
        <CarouselItem>
          <div className="w-full bg-slate-100 h-[calc(100vh-74px)] flex flex-row items-center justify-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-slate-700 text-center w-full">
                <span className="font-normal">Experience Innovation:</span>
                <br />
                The iPhone 16 Awaits!
              </h1>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={iphone16} width={800} height={800} alt="iPhone 16" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full bg-slate-100 h-[calc(100vh-74px)] flex flex-row items-center justify-center">
            <div className="flex-1 flex justify-center">
              <Image
                src={householdGoods}
                width={800}
                height={800}
                alt="household Goods"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-slate-700 text-center w-full">
                <span className="font-normal">Transform Your Home</span>
                <br />
                with Our Household Goods!
              </h1>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full bg-slate-100 h-[calc(100vh-74px)] flex flex-row items-center justify-center">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-slate-700 text-center w-full">
                <span className="font-normal">Unleash Your Potential:</span>
                <br />
                Shop Top Sports Equipment!
              </h1>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src={sportEquipments}
                width={800}
                height={800}
                alt="sport Equipments"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
}

export default HomeCarousel;
