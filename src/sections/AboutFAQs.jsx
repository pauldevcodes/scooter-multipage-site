import { useState } from 'react'

// components
import Accordion from '../components/Accordion'

const AboutFAQs = () => {
    const [accordionStates, setAccordionStates] = useState([false, false, false, false, false, false]);

    const toggleAccordionState = (index) => {
        const newAccordionStates = [...accordionStates];
        newAccordionStates[index] = !newAccordionStates[index];
        setAccordionStates(newAccordionStates);
    };

    return (
        <div className=" py-[120px] px-8 flex flex-col items-center gap-y-12 md:px-[98px] xl:px-[165px]">
            <h4 className=" font-bold text-[32px] leading-8 text-center tracking-[-1.4px] text-[#495567] md:text-5xl md:leading-[48px] md:tracking-[-2px]">
                FAQs
            </h4>

            <div className=' flex flex-col items-center gap-y-12 md:gap-y-16'>

                {/* category one */}
                <div className=' flex flex-col items-center gap-y-8 xl:flex-row xl:items-start xl:gap-x-8'>
                    {/* heading */}
                    <h3 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567] md:text-2xl md:leading-7 md:tracking-[-1.1px] xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.8px]'>
                        How it works
                    </h3>

                    {/* questions */}
                    <div className=' flex flex-col gap-y-4'>
                        <Accordion
                            title="How do I download the app?"
                            expand={accordionStates[0]}
                            toggleAccordion={() => toggleAccordionState(0)}
                            text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                        />

                        <Accordion
                            title="Can I find a nearby Scoots?"
                            expand={accordionStates[1]}
                            toggleAccordion={() => toggleAccordionState(1)}
                            text="Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
                        />

                        <Accordion
                            title="Do I need a license to ride?"
                            expand={accordionStates[2]}
                            toggleAccordion={() => toggleAccordionState(2)}
                            text="Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
                        />

                    </div>
                </div>

                {/* category two */}
                <div className=' flex flex-col items-center gap-y-8 xl:flex-row xl:items-start xl:gap-x-8'>
                    {/* heading */}
                    <h3 className=' font-bold text-2xl leading-7 text-center tracking-[-1.1px] text-[#495567] md:text-2xl md:leading-7 md:tracking-[-1.1px] xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.8px]'>
                        Safe driving
                    </h3>

                    {/* questions */}
                    <div className=' flex flex-col gap-y-4'>
                        <Accordion
                            title="Should I wear a helmet?"
                            expand={accordionStates[3]}
                            toggleAccordion={() => toggleAccordionState(3)}
                            text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
                        />

                        <Accordion
                            title="How about the rules & regulations?"
                            expand={accordionStates[4]}
                            toggleAccordion={() => toggleAccordionState(4)}
                            text="Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
                        />

                        <Accordion
                            title="What if I damage my Scoot?"
                            expand={accordionStates[5]}
                            toggleAccordion={() => toggleAccordionState(5)}
                            text="Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFAQs