import { useState } from "react"

// hero icons import
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const Accordion = ({ title, text }) => {
    const [expand, setExpand] = useState(false)

    const toggleAccordion = () => {
        setExpand(!expand)
    }

    return (
        <div className=" w-[311px] p-8 bg-[#f2f5f9] flex flex-col gap-y-6 md:w-[689px] xl:w-[730px]">
            <div 
            className=" flex items-center gap-x-4 justify-between"
            onClick={toggleAccordion}
            >
                <h4 className=" font-bold text-lg leading-6 tracking-[-0.8px] text-[#495567]">
                    {title}
                </h4>
                {expand ? <ChevronUpIcon width={20} className=" text-[#fcb72b]" /> : <ChevronDownIcon width={20} className=" text-[#fcb72b]" />}
            </div>
            {expand && (
                <div className=" text-[15x] leading-[25px] text-[#495567]  font-['Lexend_Deca']">
                    {text}
                </div>
            )}
        </div>
    )
}

export default Accordion