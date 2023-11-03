import { Box, Text, Heading, Image, Button, Icon } from '@chakra-ui/react';

export default function Cover() {
  return (
    <Box
      w="100%"
      h="100%"
      bg="transparent"
      px={{md: "20%", xl: "0"}}
      overflowY="scroll"
      css={{
        '::-webkit-scrollbar': {
          width: '1px',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#B4C5D4AD',
        },
      }}
    
    >
      <Box
        bgImage="url('/photos/wedding.jpeg')"
        bgSize="cover"
        bgPosition="center"
        w="100%"
        h="92%"
      >
        <Box
          w="100%"
          h="100%"
          bg="rgba(180, 197, 212, 0.35)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="#FFF"
          >
            <Image src="/icons/bird.svg" alt="bird" pt="75px" mb="16px" />
            <Text fontSize="14px" mb="16px">THE WEDDING OF</Text>
            <Heading fontSize="36px">Nailal & Via</Heading>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
          >
            <Button
              backgroundColor="#B4C5D4AD"
              color="white"
              _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
              display="flex"
              alignItems="center"
              gap="2"
              w="145px"
              borderRadius="20px"
              mb="75px"
            >
              <Image src="/icons/message.svg" alt="msg" color="#FFF" />
              <Text fontSize="14px">Open Invitation</Text>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        bgImage="url('/icons/footer.svg')"
        bgSize="cover"
        bgPosition="center"
        h="8%"
        w="100%"
        pt="60px"
        transform="translateY(-60px)"
      >
        <Box bgColor="#B4C5D5" color="#FFF" w="100%" p="16px" textAlign="center" fontSize="16px">
          <Text>Created with 🤍 by Invitato</Text>
          <Text>© 2023 Nailal & Via. All Rights Reserved</Text>
        </Box>
      </Box>
    </Box>
  );
}
