import { Box, Text, Button, Center} from '@chakra-ui/react';

export default function Section4() {
  return (
    <Box pt={{base: "100px", xl:'30px' }} w="100%" h="100%" bgColor="#FFF" pb={{base: "100px", md:"120px", xl:'0px' }}>
      <Box bgColor="#FFF" w="100%" h="100%" p="16px 32px 42px" my={{base:"40px", md:"0"}}>
        <Box
          w="100%"
          p="16px 32px 42px"
          bgImage="url('/photos/wedding.jpeg')"
          bgSize="cover"
          bgPosition="center"
          h="85%"
          position="relative"
          overflow="hidden"
          borderRadius="24px"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Box
            bgGradient="linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))"
            mt="80%"
            h="50%"
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
          ></Box>
        </Box>
        <Center>
          <Box 
            bgColor="#B4C5D5" 
            p="40px 16px 28px" 
            mt="-24px" 
            color="#FFF"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            gap="16px"
            borderRadius="0 0 32px 32px"
            w="96%"
          >
            <Text w="196px" fontSize="sm" fontWeight="500">Read and follow our love of live journey as a couple here:</Text>
            <Button
              backgroundColor="#FFF"
              color="#B4C5D5"
              _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
              display="flex"
              alignItems="center"
              gap="2"
              w="128px"
              h="32px"
              borderRadius="8px"
            >
              <Text fontSize="sm" fontWeight="bold">Our Love Story</Text>
            </Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
