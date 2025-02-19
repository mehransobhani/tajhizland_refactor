"use client";

import React, {FC, RefObject, useEffect, useRef, useState} from "react";
import Image from "next/image";
import useInterval from "beautiful-react-hooks/useInterval";
import useHorizontalSwipe from "beautiful-react-hooks/useHorizontalSwipe";
import {SliderResponse} from "@/services/types/slider";

export interface SectionHero2Props {
    className?: string;
    data: SliderResponse[]
}

let TIME_OUT: NodeJS.Timeout | null = null;

const MobileHero: FC<SectionHero2Props> = ({className = "", data}) => {
    // =================

    const ref = useRef<HTMLDivElement>(null);

    const swipeState = useHorizontalSwipe(ref as RefObject<HTMLElement>, {
        threshold: 100,
        preventDefault: false,
        passive: true,
    });

    const [isSlided, setIsSlided] = useState(false);
    const [indexActive, setIndexActive] = useState(0);
    const [isRunning, toggleIsRunning] = useState(true);

    useEffect(() => {
        if (isSlided || !indexActive) {
            return;
        }
        setIsSlided(true);
    }, [indexActive, isSlided]);

    useEffect(() => {
        if (swipeState.swiping || !swipeState.direction || !swipeState.count) {
            return;
        }
        swipeState.direction === "left" && handleClickNext();
        swipeState.direction === "right" && handleClickPrev();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swipeState.direction, swipeState.swiping, swipeState.count]);

    useInterval(
        () => {
            handleAutoNext();
        },
        isRunning ? 5000 : 999999
    );

    const handleAutoNext = () => {
        setIndexActive((state) => {
            if (state >= data.length - 1) {
                return 0;
            }
            return state + 1;
        });
    };

    const handleClickNext = () => {
        setIndexActive((state) => {
            if (state >= data.length - 1) {
                return 0;
            }
            return state + 1;
        });
        handleAfterClick();
    };

    const handleClickPrev = () => {
        setIndexActive((state) => {
            if (state === 0) {
                return data.length - 1;
            }
            return state - 1;
        });
        handleAfterClick();
    };

    const handleAfterClick = () => {
        toggleIsRunning(false);
        if (TIME_OUT) {
            clearTimeout(TIME_OUT);
        }
        TIME_OUT = setTimeout(() => {
            toggleIsRunning(true);
        }, 1000);
    };
    // ================= ================= =================

    // =================

    const renderDots = () => {
        return (
            <div className="absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-20 flex justify-center">
                {data.map((_, index) => {
                    const isActive = indexActive === index;
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setIndexActive(index);
                                handleAfterClick();
                            }}
                            className={`relative px-1 py-1.5 cursor-pointer`}
                        >
                            <div
                                className={`relative w-4 lg:w-8 h-1 shadow-sm rounded-md bg-stone-200`}
                            >
                                {isActive && (
                                    <div
                                        className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${
                                            isActive ? " " : " "
                                        }`}
                                    ></div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderItem = (index: number) => {
        const isActive = indexActive === index;
        const item = data[index];
        if (!isActive) {
            return null;
        }
        return (
            <div
                className={`mt-0  nc-SectionHero2Item nc-SectionHero2Item--animation flex flex-col-reverse lg:flex-col relative overflow-hidden w-full  aspect-w-16 aspect-h-10  `}
                key={index}
            >
                <div className=" w-full h-full">
                    <Image
                        fill
                        className="w-full h-full object-cover"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slider/${item.image}`}
                        alt={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/slider/${item.image}`}
                        priority
                    />

                    <div>{renderDots()}</div>
                </div>
            </div>
        );
    };


    return (
        <div className="relative" ref={ref}>
            {data.map((_, index) => renderItem(index))}

            <button

                aria-label="Next"
                type="button"
                className="absolute inset-y-px start-0 px-10 hidden lg:flex items-center justify-center z-10 text-slate-700"
                onClick={handleClickNext}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.6}
                    stroke="currentColor"
                    className="h-12 w-12"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
            <button
                aria-label="Prev"
                type="button"
                className="absolute inset-y-px end-0 px-10 hidden lg:flex items-center justify-center z-10 text-slate-700"
                onClick={handleClickPrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={0.6}
                    stroke="currentColor"
                    className="h-12 w-12"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default MobileHero;
