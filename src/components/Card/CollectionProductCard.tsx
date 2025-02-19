import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";
import { ProductImageResponse } from "@/services/types/productImage";
import { Route } from "next";
import Prices from "@/components/Price/Prices";

export interface CollectionCard2Props {
    className?: string;
    imgs?: ProductImageResponse[] | undefined;
    name?: string;
    price?: number;
    description?: string;
    url?: string;
    rating?: number;
    review?: number;
}

const CollectionProductCard: FC<CollectionCard2Props> = ({
                                                       className,
                                                       imgs,
                                                       name = "Product Name",
                                                       description = "Product Description",
                                                       price,
                                                       url,
                                                       rating,
                                                       review,
                                                   }) => {
    return (
        <div className={`group relative   ${className}`}>
            <div className="relative flex flex-col">
                <NcImage
                    containerClassName="aspect-w-8 aspect-h-5 bg-white border rounded-2xl overflow-hidden"
                    className="object-contain w-full h-full rounded-2xl"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/${imgs && imgs[0] && imgs[0].url}`}
                    width={720}
                    height={450}
                    alt=""
                    sizes="400px"
                />
                <div className="grid grid-cols-3 gap-2.5 mt-2.5">
                    <NcImage
                        containerClassName="w-full h-24 sm:h-28 border rounded-2xl"
                        className="object-cover w-full h-full rounded-2xl"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/${imgs && imgs[1] && imgs[1].url}`}
                        alt=""
                        sizes="150px"
                        width={720}
                        height={450}
                    />
                    <NcImage
                        containerClassName="w-full h-24 sm:h-28 border rounded-2xl"
                        className="object-cover w-full h-full rounded-2xl"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/${imgs && imgs[2] && imgs[2].url}`}
                        alt=""
                        width={720}
                        height={450}
                        sizes="150px"
                    />
                    <NcImage
                        containerClassName="w-full h-24 sm:h-28 border rounded-2xl"
                        className="object-cover w-full h-full rounded-2xl"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/product/${imgs && imgs[3] && imgs[3].url}`}
                        alt=""
                        sizes="150px"
                        width={720}
                        height={450}
                    />
                </div>
            </div>

            <div className="relative mt-5 flex items-center sm:items-start sm:flex-row gap-y-2 ">
                {/* TITLE */}
                <div className="flex-1 sm:flex-[2]">
                    <h2 className="font-semibold text-xs  sm:text-sm lg:text-lg text-right dark:text-white">{name}</h2>
                    {/* AUTHOR */}
                    <div className="mt-3 lg:flex items-center text-slate-500 dark:text-slate-400 hidden">

                        <span className="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                        <StarIcon className="w-4 h-4 text-orange-400" />
                        <span className="text-sm ml-1 ">
                            <span className="line-clamp-1">{rating}{" "}({review} نظر)</span>
                        </span>
                    </div>
                </div>
                <Prices className="mt-0.5 sm:mt-1 sm:ml-4 text-center flex-1" priceClass={"mx-auto"} price={price} />
            </div>
            <Link href={"/product/" + url as Route} className="absolute inset-0 " aria-label={"product"}></Link>
        </div>
    );
};

export default CollectionProductCard;
