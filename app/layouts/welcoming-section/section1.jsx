import { Box, Text, Heading } from '@chakra-ui/react';
import Animation from '@/app/components/animation';

export default function Section1() {
  return (
    <Box w="100%" h="100%" mb="20px">
      <Box
        bgImage="url('/photos/section1.jpeg')"
        bgSize="cover"
        bgPosition="start"
        w="100%"
        h="100%"
      >
        <Box
          w="100%"
          h="100%"
          bg="rgba(180, 197, 212, 0.35)"
        />
      </Box>
      <Box
        bgImage="url('/icons/footer.svg')"
        bgSize="cover"
        bgPosition="center"
        h="10%"
        w="100%"
        pt="60px"
        transform="translateY(-240px)"
      >
        <Box bgColor="#B4C5D5" color="#FFF" w="100%" p="16px" pb="60px" textAlign="center">
          <Animation>
            <Heading fontSize="20px" mb="8px">Dear Mr/Mrs/Ms,</Heading>
            <Heading fontSize="20px" mb="8px" >Family & Friends</Heading>
            <Text fontSize="sm" fontWeight="500">We are pleased to announce and invite you to our wedding. We sincerely hope that you will be able to attend and pray directly on our wedding day. Your presence will mean a lot to us.</Text>
          </Animation>
        </Box>
      </Box>
    </Box>
  );
}
