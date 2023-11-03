import { Box, Text, Heading, Image, Button, Icon } from '@chakra-ui/react';
import Cover from '@/app/layouts/cover';

export default function Home() {
  return (
    <main>
      <Box
        bgImage={{ base: 'none', md: '#FFF', xl: "url('/photos/wedding.jpeg')" }}
        bgSize="contain"
        bgPosition="center"
        w="100%"
        h="100vh"
      >
        <Box
          w="100%"
          h="100%"
          bg={{base:"rgba(0,0,0,0)", xl:"rgba(0, 0, 0, 0.3)"}}
          display="grid"
          gridTemplateColumns={{xl: "67% 0.5% 32.5%"}}
          alignItems="center"
        >
          <Box
            bgImage="url('/photos/wedding.jpeg')"
            bgSize="cover"
            bgPosition="center"
            w="100%"
            h="100%"
            display={{ base: 'none', xl: 'block' }}
          >
            <Box
              w="100%"
              h="100%"
              bg="rgba(180, 197, 212, 0.35)"
            >
              <Box p="42px" color="#67544E">
                <Text letterSpacing="2px" fontSize="16px" fontWeight="300">THE WEDDING OF</Text>
                <Heading fontWeight="300" fontSize="72px" my="32px">Nailal & Via</Heading>
                <Text letterSpacing="1px" fontSize="16px" fontWeight="300" fontStyle="italic" w="500px">“And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.”</Text>
                <Text letterSpacing="1px" fontSize="16px" fontWeight="300" fontStyle="italic" w="500px">— Elizabeth Young</Text>
              </Box>
            </Box>
          </Box>
          <Box
            display={{ base: 'none', xl: 'block' }}
          ></Box>
          <Cover />
        </Box>
      </Box>
    </main>
  );
}
