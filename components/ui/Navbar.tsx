import { Box, Button, Container, IconButton, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
  return (
    // <Container maxW='container.xl'>
      <Box bgColor='yellow' display='flex' py={'2'} px={'2.5'} justifyContent='center'>
        <Box display='flex' flexDir='column' gap='4' justifyContent='space-between'>
          <Box height={'40px'} minWidth={'134px'} minHeight={'34px'} display='flex' alignItems='center'>
            <Image src='/assets/logoml.png' width={134} height={34} />
          </Box>
          <Box _hover={{outline: '1px solid #2222'}} display='flex' cursor='pointer' lineHeight={1.15} alignItems='center' justifyContent='start'>
            <IoLocationOutline size='26px' opacity={0.5} />
            <Box>
              <Text fontSize='12px' opacity={0.5}>Enviar a</Text>
              <Text fontSize='14px' color='gray.700'>Capital Federal</Text>
            </Box>
          </Box>
        </Box>
        <Box display='flex' flexDir='column' gap='4' px={14} justifyContent='space-between'>
          <InputGroup height={'40px'}>
            <Input _focus={{outline: 'none'}} shadow='base' width={'600px'} _placeholder={{ opacity: 0.3 }} placeholder='Buscar productos, marcas y más...' variant={'filled'} size='md' />
            <InputRightElement children={
              <>
                <span style={{width: 2, height: 26, backgroundColor:'black', opacity: 0.1, position: 'absolute', left: 0}} />
                <AiOutlineSearch opacity={0.4} size='21px' />
              </>
            } />
          </InputGroup>
          <Box display='flex' alignItems='end' gap='5'>
            <Box display='flex' alignItems='end' gap='0.5' cursor='pointer'>
              <Text opacity={0.5} _hover={{opacity: 0.7}} transitionDuration="500ms" fontSize='14px'>Categorias</Text>
              <Box p="0.4">
                <FiChevronDown size={'15px'} opacity={0.3} />
              </Box>
            </Box>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Ofertas</Text>
            </Link>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Historial</Text>
            </Link>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Supermercado</Text>
            </Link>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Moda</Text>
            </Link>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Vender</Text>
            </Link>
            <Link color='black' colorScheme='gray'>
              <Text opacity={0.5} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Ayuda</Text>
            </Link>
          </Box>
        </Box>
        <Box display='flex' flexDir='column' gap='4' alignItems='end' justifyContent='space-between'>
          <Box height={'40px'} minWidth={'340px'} minHeight={'39px'} >
            <Image src='/assets/disneystar.webp' width={'340px'} height={'39px'} />
          </Box>
          <Box display='flex' gap='5' color='gray.700'>
            <Link color='black' colorScheme='black'>
              <Text opacity={0.8} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Creá tu cuenta</Text>
            </Link>
            <Link color='black' colorScheme='black'>
              <Text opacity={0.8} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Ingresá</Text>
            </Link>
            <Link color='black' colorScheme='black'>
              <Text opacity={0.8} _hover={{opacity: '1'}} transitionDuration="500ms" fontSize='14px'>Mis compras</Text>
            </Link>
            <IconButton color='gray.700' colorScheme='black' variant={'link'} aria-label='carrito de compras' >
              <BsCart2 size='19px' style={{marginLeft: 8}} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    // </Container>
  )
}
