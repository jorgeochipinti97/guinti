import Head from 'next/head'
import Image from 'next/image'

import { Box, Divider, Typography } from "@mui/material"

import { SectionComponent } from '@/components/SectionComponent'

import { ServicesComponent } from '@/components/UI/ServicesComponent'
import { AboutUsComponent } from '@/components/UI/AboutUsComponent'
import { ContactUsComponent } from '@/components/UI/ContactUsComponent'
import { FaqComponent } from '@/components/UI/FaqComponent'

import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { useTheme } from '@emotion/react'



export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');



  return (
    <>


      <Box sx={{ my: 5 }} >
        <SectionComponent isMobile={isMobile} />
      </Box>
      <Box sx={{ my: 5 }}>
        <ServicesComponent isMobile={isMobile} />
      </Box >
      <Box sx={{ my: 5 }}>
        <AboutUsComponent isMobile={isMobile} />
      </Box>
      <Box sx={{ my: 5 }}>
        <ContactUsComponent isMobile={isMobile} />
      </Box>
      <Box sx={{ my: 5 }}>
        <FaqComponent isMobile />
      </Box>

      <Divider sx={{ my: 1 }} />
      <footer>
        <Box sx={{ mt: 10, mb:2}}>
          <Typography variant='body1' textAlign={'center'}>All rights reserverd. Royer LLC</Typography>
        </Box>
      </footer>
    </>
  )
}
