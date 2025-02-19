"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import { ProductResponse } from "@/services/types/product";
import ProductCard2 from "@/components/Card/ProductCard2";

export interface SectionLinkedProductSliderProps {
    className?: string;
    itemClassName?: string;
    heading?: string;
    headingFontClassName?: string;
    headingClassName?: string;
    subHeading?: string;
    data?: ProductResponse[];
}

const SectionLinkedProductSlider: FC<SectionLinkedProductSliderProps> = ({
                                                                          className = "",
                                                                          itemClassName = "",
                                                                          headingFontClassName,
                                                                          headingClassName,
                                                                          heading,
                                                                          subHeading = "REY backpacks & bags",
                                                                          data
                                                                      }) => {
    const sliderRef = useRef(null);

    //
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const OPTIONS: Partial<Glide.Options> = {
            // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
            direction:"rtl",
            perView: 4,
            gap: 32,
            bound: true,
            breakpoints: {
                1280: {
                    perView: 4 - 1,
                },
                1024: {
                    gap: 20,
                    perView: 4 - 1,
                },
                768: {
                    gap: 20,
                    perView: 4 - 2,
                },
                640: {
                    gap: 10,
                    perView: 2.2,
                },
                500: {
                    gap: 10,
                    perView: 2.1,
                },
            },
        };
        if (!sliderRef.current) return;

        let slider = new Glide(sliderRef.current, OPTIONS);
        slider.mount();
        setIsShow(true);
        return () => {
            slider.destroy();
        };
    }, [sliderRef]);
    {
        console.log("DATA IS ",data)
    }
    return (
        <div className={`nc-SectionLinkedProductSlider ${className}`}>
            <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
                <Heading
                    className={headingClassName}
                    fontClass={headingFontClassName}
                    rightDescText={subHeading}
                    hasNextPrev
                >
                    {heading || `New Arrivals`}
                </Heading>
                <div className="glide__track" data-glide-el="track"  style={{direction:"rtl"}}>
                    <ul className="glide__slides">
                        {data && data.map((item, index) => (
                            <li key={index} className={`glide__slide ${itemClassName}`}>
                                <ProductCard2 data={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SectionLinkedProductSlider;
