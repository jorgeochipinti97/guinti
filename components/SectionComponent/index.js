import { Box, Typography } from "@mui/material"
import Lottie from "lottie-react";
import animation from '../../animations/top.json'
import arrow from '../../animations/arrow.json'
import { LoadingComponent } from "../UI/LoadingComponent";
import { Elastic, gsap, Power4, Power1, Back } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";




export const SectionComponent = ({ isMobile }) => {
    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        gsap.to('.loading', {
            transform: 'scale(0)', delay: 3
        })
        gsap.to('.loading', {
            display: 'none', delay: 3.5
        })
        gsap.to('.sectionOne', {
            transform: 'scale(1)', delay: 4
        })
        gsap.to('.textClimbers', {
            delay: 4.5, opacity: 1, ease: Power1.easeIn
        })
        gsap.to('.textExplore', {
            delay: 5, opacity: 1, ease: Back.easeOut.config(
                1.7)
        })
        gsap.to('.arrow', {
            delay: 5.3, transform: 'scale(1)', ease: Elastic.easeIn
        })
        gsap.to('.heavyText', {
            delay: 5.3, ease: Power4.easeIn, fontWeight: 600
        })


    }, [])


    return (
        <>
            <Box className='loading' sx={{ height: '100vh' }}>
                <LoadingComponent />
            </Box>
            <Box sx={{ transform: 'scale(0)', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center' }} className='sectionOne'>
                <Box display={'flex'} flexDirection={'column'} sx={{ width: '100vw', }}>
                    <Box display='flex' justifyContent={'center'} sx={{ width: '100%' }}>
                        <Box display='flex' justifyContent={'center'} sx={{ width: isMobile ? '100%' : '50%', zIndex: '10' }}>
                            <Lottie animationData={animation} loop={true} />
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent={'center'} sx={{ position: 'relative', bottom: isMobile ? 80 : 180 }}>
                        <Box display='flex' justifyContent={'center'} sx={{}}>
                            <Image src='/logo.png' alt='' width={isMobile ? 300 : 500} height={isMobile ? 300 : 500} />
                        </Box>
                    </Box>
                    <Box sx={{ height: '40vh', position: 'relative', bottom: isMobile ? 150 : 280 }}>
                        <Box display='flex' justifyContent={'center'} sx={{ opacity: 0, mb: 5, textAlign: isMobile ? 'center' : 'auto' ,mx:isMobile ? 3:0}} className='textClimbers'>
                            <Typography variant='body1' sx={{ fontWeight: '800', fontFamily: 'Montserrat', fontSize:isMobile? '18px':'18px'}}>Climbers on your journey to business success: Scaling with you to reach the summit.</Typography>
                        </Box>
                        <Box display='flex' justifyContent={'center'} sx={{ opacity: 0, textAlign: isMobile ? 'center' : 'auto' }} className='textExplore'>
                            <Typography variant='body1' sx={{ fontWeight: 300, mt: 3, mb: 2, fontFamily: 'Montserrat',fontSize:isMobile ?'12px':'15px' }} >Explore our <span className="heavyText">solutions</span></Typography>
                        </Box>
                        <Box display='flex' justifyContent={'center'} sx={{ width: '100%', transform: 'scale(0)', textAlign: isMobile ? 'center' : 'auto', height: '100%' }} className='arrow'>
                            <Box display='flex' justifyContent={'center'} sx={{ width: isMobile?'200px':'50%', textAlign: isMobile ? 'center' : 'auto', height: '100%' }} >
                                <Lottie animationData={arrow} loop={true} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}