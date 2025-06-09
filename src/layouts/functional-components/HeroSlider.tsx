import type { Product } from "@/lib/shopify/types";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "banner-pagination-bullet",
          bulletActiveClass: "banner-pagination-bullet-active",
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
        modules={[Pagination]}
      >
        {products?.map((item: Product) => (
          <SwiperSlide key={item.id}>
            <div className="row items-center px-7 xl:px-16  mb-4">
              <div className="sm:col-12 lg:col-6 order-2 lg:order-0  mb-4">
                <div className="text-center py-10 lg:py-0">

                  <div className="row">
                    <h1 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto">
                      About Us
                    </h1>
                  </div>
                  <div className="row" style={{textAlign:"justify"}}>
                    <p>
  <strong>Pyromo Cotton Box Pvt. Ltd.</strong> is a leading manufacturer of high-quality corrugated boxes since 2019. We offer packaging solutions in various shapes and sizes to suit every requirement. With deep industry experience and a focus on innovation, we specialize in customized product development.
</p>
<p>Our product range includes:</p>
<ul style={{listStyleType: "disc",paddingLeft:"50px"}}>
  <li>Corrugated rolls</li>
  <li>Corrugated printed cartons</li>
  <li>Corrugated cardboards</li>
  <li>Corrugated cartons</li>
</ul>
                  </div>
                  {item.handle && (
                    <a
                      className="btn btn-sm md:btn-lg btn-primary font-medium"
                      href={`/about`}
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>

              <div className="sm:col-12 lg:col-6 mt-5">
                {item.featuredImage && (
                  <img
                    src={item.featuredImage.url}
                    className="mx-auto w-[388px] lg:w-full"
                    width={"507"}
                    height={"385"}
                    alt="banner image"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
