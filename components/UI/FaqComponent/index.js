import { Box, Grid, Typography } from "@mui/material"
import Lottie from "lottie-react";
import { useInView } from 'react-intersection-observer';
import animation from '../../../animations/guintifaq.json'


import { Elastic, gsap, Back, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";
import { FaqQuestion } from "../FaqQuestion";

export const FaqComponent = ({ isMobile }) => {
    const [refDiv, inViewDiv] = useInView({
        threshold: .5,
    });


    useEffect(() => {
        inViewDiv && gsap.to('.imageFaq', {
            transform: 'scale(1)', ease: Elastic.easeIn
        })

    }, [inViewDiv])
    return (
        <>

            <Box display={'flex'} justifyContent={'center'} sx={{mt:50,mx:5}} flexDirection={'column'} ref={refDiv}>
                <Box display={'flex'} justifyContent={'center'} className='imageFaq' sx={{ transform: 'scale(0)' }}>
                    <Image src='/faq.png' alt='' width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} />
                </Box>
                <FaqQuestion question={'How do you use artificial intelligence in your solutions?'} answer={'At GUINTI, we integrate artificial intelligence into our projects to enhance efficiency and provide personalized experiences.'} />
                <FaqQuestion question={"How do you work with clients during the development process?"} answer={'We value close collaboration with our clients to understand their needs and goals, designing customized solutions at every stage of the project.'} />
                <FaqQuestion question={"What is your focus in project delivery?"} answer={'We are committed to meeting agreed-upon deadlines and delivering high-quality projects using agile methodologies.'} />
                <FaqQuestion question={"Do you offer support and maintenance after project delivery?"} answer={'Yes, we provide ongoing support and maintenance services to ensure optimal performance of the solutions.'} />
                <FaqQuestion question={"Do you offer support and maintenance after project delivery?"} answer={'Yes, we provide ongoing support and maintenance services to ensure optimal performance of the solutions.'} />
            </Box>


        </>
    )
}