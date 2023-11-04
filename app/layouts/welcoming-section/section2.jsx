import { Box, Text, Image, Divider, Center } from '@chakra-ui/react';
import Animation from '@/app/components/animation';

export default function Section1() {
  return (
    <Box bg="transparent" w="100%">
      <Box
        bgImage="url('/photos/background.jpeg')"
        bgRepeat="repeat"
        w="100%"
        pt={{base:"100px", md:"42px"}}
        pb="42px"
        px="32px"
      >
        <Box
          bgColor="#B4C5D5"
          w="100%"
          py="24px"
          px="27px"
          color="#FFF"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="4"
          borderRadius="16px"
          textAlign="center"
        >
          <Animation>
            <Image src="/photos/section2.jpeg" alt="wedding" borderRadius="48% 48% 8px 8px" w="200px" h="300px" />
          </Animation>
          <Animation>  
            <Center height='50px'>
              <Divider orientation='vertical' />
            </Center>
          </Animation>
          <Animation>
            <Text fontSize="xs" fontWeight="500" fontStyle="italic">&quot;And of all things We created two mates [i.e., counterparts]; perhaps you will remember.&quot;</Text>
            <Text fontSize="sm" fontWeight="bold">(Az-Zariyat 51:49)</Text>
          </Animation>
        </Box>
      </Box>
    </Box>
  );
}
