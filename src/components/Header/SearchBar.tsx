"use client"
import React, {useState, Fragment} from "react";
import {Transition, Dialog, TransitionChild} from "@headlessui/react";
import SearchBoxMobile from "@/components/Header/SearchBoxMobile";
import Input from "@/shared/Input/Input";
import ButtonCircle from "@/shared/Button/ButtonCircle";

export interface MenuBarProps {
}

const SearchBar: React.FC<MenuBarProps> = () => {
    const [isVisable, setIsVisable] = useState(false);
    const handleOpenMenu = () => setIsVisable(true);
    const handleCloseMenu = () => setIsVisable(false);

    const renderContent = () => {
        return (
            <Transition appear show={isVisable} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={handleCloseMenu}
                >
                    <div
                        className="fixed right-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
                        <React.Fragment>
                            <TransitionChild
                                enter="transition duration-100 transform"
                                enterFrom="opacity-0 translate-y-14"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition duration-150 transform"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-14"
                            >
                                <div className="z-20 relative">
                                    <SearchBoxMobile onClickClose={handleCloseMenu}/>
                                </div>
                            </TransitionChild>

                            <TransitionChild
                                enter="duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave=" duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-neutral-900/60"/>
                            </TransitionChild>
                        </React.Fragment>
                    </div>
                </Dialog>
            </Transition>
        );
    };
    const renderMagnifyingGlassIcon = () => {
        return (
            <svg
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    };

    return (
        <>
            <div
                className={"w-full"}
                onClick={handleOpenMenu}
            >
                <div className="relative w-full ">
                    <label
                        htmlFor="search-input"
                        className="text-neutral-500 dark:text-neutral-300"
                    >
                        <span className="sr-only">Search all icons</span>
                        <Input
                            className="border text-xs "
                            id="search-input"
                            readOnly
                            type="text"
                            placeholder="جستجو"
                            sizeClass="pr-10 !py-[0.3rem] "
                            rounded="rounded-full"
                        />
                        <ButtonCircle
                            className="absolute right-1 top-1/2 transform -translate-y-1/2"
                            size=" w-7 h-7"
                        >
                            <i className="las la-arrow-right text-xl"></i>
                        </ButtonCircle>
                        <span
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl  ">
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                  <path
                      d="M22 22L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                </svg>
              </span>
                    </label>
                </div>

                {/*<div className="relative w-full">*/}
                {/*    <div*/}
                {/*        className="flex-1 py-2 text-slate-900 dark:text-slate-100"*/}

                {/*    >*/}
                {/*        <div*/}
                {/*            className="bg-neutral-100 dark:bg-slate-800 flex items-center space-x-1.5 px-1 sm:px-5 h-full rounded  ">*/}
                {/*            <FaMagnifyingGlass className={"text-neutral-500 w-4 h-4"}/>*/}
                {/*            <div className={"relative"}>*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    readOnly={true}*/}
                {/*                    placeholder="جستجو"*/}
                {/*                    className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-xs font-bold text-neutral-500"*/}
                {/*                    autoFocus*/}
                {/*                />*/}

                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <input type="submit" hidden value=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {renderContent()}
        </>
    );
};
export default SearchBar;
