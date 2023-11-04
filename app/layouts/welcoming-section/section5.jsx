import { Box, Text, Heading, Image, HStack, Center, Button } from '@chakra-ui/react';

export default function Section5() {
  return (
    <Box my={{base:"0px", md:"0px"}} pt="20px" bgColor="#FFF">
      <Box bg="transparent" w="100%">
        <Box
          bgImage="url('/photos/background.jpeg')"
          bgRepeat="repeat"
          w="100%"
          p="32px 16px"
        >
          <Box
            bgColor="#B4C5D5"
            w="100%"
            p="36px 32px"
            color="#FFF"
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius="16px"
            textAlign="center"
            color="white"
            textAlign="center"
          >
            <Box>
              <Heading fontSize="30px" fontWeight="700">Wedding Celebration</Heading>
              <Text fontSize="md" fontWeight="500">will be held in:</Text>
              <HStack
                divider={<Text fontSize="20px" mx="8px">.</Text>}
                my="24px"
              >
                <Box>
                  <Text fontSize="30px" fontWeight="500" fontStyle="italic">0</Text>
                  <Text fontSize="sm" fontWeight="500">days</Text>
                </Box>
                <Box>
                  <Text fontSize="30px" fontWeight="500" fontStyle="italic">0</Text>
                  <Text fontSize="sm" fontWeight="500">hours</Text>
                </Box>
                <Box>
                  <Text fontSize="30px" fontWeight="500" fontStyle="italic">0</Text>
                  <Text fontSize="sm" fontWeight="500">mins</Text>
                </Box>
                <Box>
                  <Text fontSize="30px" fontWeight="500" fontStyle="italic">0</Text>
                  <Text fontSize="sm" fontWeight="500">secs</Text>
                </Box>
              </HStack>
            </Box>
            <Box
              bgImage="url('/photos/wedding.jpeg')"
              bgSize="cover"
              bgPosition="center"
              bgColor="#FFF"
              w="100%"
              borderRadius="16px"
            >
              <Center
                w="100%"
                h="480px"
                bg="rgba(124, 150, 173, 0.59)"
                p="32px"
                borderRadius="16px"
                display="flex"
                flexDirection="column"
              >
                <Image src="/icons/ring.svg" alt="ring" w="50px" h="50px" />
                <Heading fontSize="20px" fontWeight="700" fontStyle="italic">Holy Matrimony</Heading>
                <Text fontSize="sm" fontWeight="500">09.00 WIB</Text>  
                <Text fontSize="sm" fontWeight="500">Friday, 22 October 2021</Text>  
                <Text fontSize="sm" fontWeight="500">Gereja Hati Kudus Yesus Tanah Mas</Text>  
                <Text fontSize="sm" fontWeight="500">Jl. Kokrosono Kav 40-42 Panggung Lor, Kota Semarang</Text>  
                <Image src="/icons/cheers.svg" alt="ring" w="50px" h="50px" mt="24px" />
                <Heading fontSize="20px" fontWeight="700" fontStyle="italic">Wedding Reception</Heading>
                <Text fontSize="sm" fontWeight="500">18.00 WIB</Text>  
                <Text fontSize="sm" fontWeight="500">Friday, 22 October 2021</Text>  
                <Text fontSize="sm" fontWeight="500">S2 Ballroom</Text>  
                <Text fontSize="sm" fontWeight="500">Jl. Sisingamangaraja No. 19C Semarang</Text>
                <HStack mt="24px">
                  <Button
                    backgroundColor="#DD6B20"
                    color="white"
                    _hover={{ backgroundColor: 'rgb(192, 92, 26)' }}
                    display="flex"
                    alignItems="center"
                    gap="2"
                    w="80px"
                    borderRadius="8px"
                    h="24px"
                  >
                    <Text fontSize="xs" fontWeight="700">Remind Me</Text>
                  </Button>
                  <Button
                    backgroundColor="#DD6B20"
                    color="white"
                    _hover={{ backgroundColor: 'rgb(192, 92, 26)' }}
                    display="flex"
                    alignItems="center"
                    gap="2"
                    w="80px"
                    borderRadius="8px"
                    h="24px"
                  >
                    <Text fontSize="xs" fontWeight="700">See Location</Text>
                  </Button>
                </HStack>  
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
