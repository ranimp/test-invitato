import { Box, Text, Heading } from '@chakra-ui/react';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';
import Section9 from './section9';
import Section10 from './section10';

export default function WelcomingSection() {
  return (
    <Box
      w="100%"
      h="100%"
      bgColor="#ECECEC"
      px={{md: "20%", xl: "0"}}
      overflowY="scroll"
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </Box>
  );
}
