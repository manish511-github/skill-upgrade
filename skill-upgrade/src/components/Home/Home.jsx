import React from 'react'
import { Stack, VStack } from '@chakra-ui/react'
import "./home.css";
import { Link } from 'react-router-dom';
import { Heading,Text,Button ,Image,Box ,HStack} from '@chakra-ui/react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';


import vg from "../../assets/images/bg.png"
const Home = () => {
    return <section className="home">
        <div className="container">
            <Stack  direction={['column','row']}
            height="100%"
            justifyContent={['center','space-between']}
            alignItems="center"
            spacing={['16','56']}>
                <VStack width={"full"} alignItems={["center","flex-end"]} spacing="8">
                    <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}></Heading>
                    <Text  fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']} children="Find Valueable Content At Reasonable Price"></Text>
                    <Link to="/courses">
                    <Button size={'lg'} colorScheme="yellow">Explore Now</Button>
                    </Link>

                </VStack>
                <Image 
                className="vector-graphics" boxSize={"md"} src={vg} objectFit="contain"></Image>





            </Stack>
        </div>
        <Box padding={"8"} bg="blackAlpha.800">
        <Heading textAlign={'center'}
        fontFamily="body"
        color={'yellow.400'} children="OUR BRANDS"></Heading>
        
        <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop="4">
            <CgGoogle></CgGoogle>
            <CgYoutube></CgYoutube>
            <SiCoursera></SiCoursera>
            <DiAws></DiAws>
        </HStack>
        </Box>
        <div className="container2">
            <video autoPlay controls
            controlsList="nodownload nofullscreen noremoteplayback" disablePictureInPicture
            disableRemotePlayback src={introVideo}></video>
            
        </div>


    </section>
  
};

export default Home