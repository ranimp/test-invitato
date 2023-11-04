import { Box, Text, Image, Heading, Button } from '@chakra-ui/react';

export default function Section3() {
  return (
    <Box bgColor="#FFF" w="100%" h="100%">
      <Box
        w="100%"
        py="24px"
      >
        <Box
          fontSize="xs"
          color="#67544E"
          textAlign="center"
          pb="16px"
          px="16px"
          fontWeight="500"
        >
          Together with joyful hearts and the grace of God, we cordially request the honor of your presence at the wedding celebration of:
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgColor="#B4C5D5"
          gap="20px"
          h="324px"
          color="#FFF"
          textAlign="center"
          mt="60px"
        >
          <Box transform="translateY(80px)">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4px"
              mt="20px"
            >
              <Image src="https://user-images.githubusercontent.com/10141928/147430935-ac229ec9-0f46-4199-8623-6f3fdbbe92b9.jpeg" borderRadius="8px" w="120px" h="160px" />
              <Heading fontSize="24px" p="8px 0 4px" fontWeight="bold">Nailal Mustaghfiri</Heading>
              <Text w="180px" fontSize="sm" fontWeight="500">The son of Mr. Parents Man and Mrs. Parents Lady</Text>
              <Button
                backgroundColor="#0000005C"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                display="flex"
                alignItems="center"
                gap="2"
                w="128px"
                h="24px"
                borderRadius="8px"
              >
                <Image src="/icons/ig.svg" alt="ig" w="12px" h="12px" />
                <Text fontSize="xs" lineHeight="12px" fontWeight="bold">namakugroom</Text>
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4px"
              mt="40px"
              color="#67544E"
            >
              <Image src="https://user-images.githubusercontent.com/10141928/147430934-134504cd-f326-44f7-bb19-7bcc524e97d1.jpeg" borderRadius="8px" w="120px" h="160px" />
              <Heading fontSize="24px" p="8px 0 4px" fontWeight="bold">Oktavia Pramana Sulistyo</Heading>
              <Text w="180px" fontSize="sm" fontWeight="500">The daughter of Mr. Parents Man and Mrs. Parents Lady</Text>
              <Button
                backgroundColor="#B4C5D5"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                display="flex"
                alignItems="center"
                gap="2"
                w="128px"
                h="24px"
                borderRadius="8px"
              >
                <Image src="/icons/ig.svg" alt="ig" w="12px" h="12px" />
                <Text fontSize="xs" lineHeight="12px" fontWeight="bold">namakubride</Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
