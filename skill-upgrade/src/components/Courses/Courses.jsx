import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Input,HStack,VStack,Button,Stack,Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';
import { addToPlaylist } from '../../redux/actions/profile';



const Course=({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
})=>{
  return (
   <VStack className="course" alignItems={['center','flex-start']}>
    <Image src={imageSrc} boxSize="60" objectFit={'contain'}></Image>
    <Heading textAlign={['center','left']} maxW="200px" size={'sm'} fontFamily={'sans-serif'} noofLines={3} children={title} ></Heading>
    <Text noofLines={2} children={description} ></Text>
    <HStack>
    <Text fontWeight={'bold'} textTransform={"uppercase"} children={'Creator'}></Text>
    <Text fontWeight={'body'} textTransform={"uppercase"} children={creator}></Text>

    </HStack>
    <Heading textAlign={'center'}  size={'xs'} children={`Lectures - ${lectureCount}`} textTransform="uppercase"></Heading>
    <Heading textAlign={'center'}  size={'xs'}    children={`Views - ${views}`} textTransform="uppercase"></Heading>
    <Stack direction={['column','row']} alignItems="center">
    <Link to={`/course/${id}`}>
      <Button colorScheme={"yellow"}>Watch Now</Button>
      </Link>
      <Button  isLoading={loading} variant={'ghost'} colorScheme={'yellow'} onClick={() => addToPlaylistHandler(id)}>Add to Playlist</Button>
    </Stack>
    </VStack>
    
  )
}

const Courses = () => {
    const categories = [
        'Web development',
        'Artificial Intelligence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
      ];
    
      const { loading, courses, error, message } = useSelector(
        state => state.course
      );
    
    const [keyword,setKeyword]=useState('');
    const [category,setCategory]=useState('');
    const dispatch = useDispatch();


    const addToPlaylistHandler = async couseId => {
      await dispatch(addToPlaylist(couseId));
      dispatch(loadUser());
    };
  
    useEffect(() => {
      dispatch(getAllCourses(category, keyword));
  
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
  
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
    }, [category, keyword, dispatch, error, message]);

    

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
        <Heading children="All Courses" m={'8'}></Heading>
        <Input value={keyword} 
            onChange={e=>setKeyword(e.target.value)} placeholder="Search a course..." type={'text'} focusBorderColor="yellow.500"
        
        ></Input>

        <HStack overflowX={"auto"} paddingY="8" css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
         {
          categories.map((item,index)=>(

            <Button key={index} onClick={()=>setCategory(item)} minW={'60'} >
              <Text children={item}></Text>
            </Button>
          ))
         }
        </HStack>
        <Stack direction={["column","row"]} flexwrap="wrap" justifyContent={['flex-start','space-evenly']} alignItems={['center','flex-start']} >
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" />
        
        
        )}


        </Stack>
    </Container>
 
   
  )
}

export default Courses