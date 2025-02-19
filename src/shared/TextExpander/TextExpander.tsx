"use client"
import { stripHTML } from '@/hooks/StripHtml';
import { useState } from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonCircle from '../Button/ButtonCircle';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface TextExpanderProps {
  text: string;
}

const TextExpander: React.FC<TextExpanderProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if(!text || text=="")
      return <></>
  return (
    <div className="mx-auto">
      <div
        className={`relative text-gray-800  dark:text-white transition-all duration-300 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
        }`}
      >
         <div dangerouslySetInnerHTML={{__html: stripHTML(text)}}/>

        {/* افکت فید برای خط سوم */}
        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t   from-white  dark:from-neutral-900 to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* دکمه برای مشاهده همه یا نمایش کمتر */}
         <div  onClick={toggleExpanded}
               className="mt-5 cursor-pointer text-left"
        >
             <span className="  text-sm font-bold text-neutral-700  dark:text-white">
              {isExpanded ? "مشاهده کمتر":  "مشاهده بیشتر"}
                 </span>
        </div>

    </div>
  );
};

export default TextExpander;
