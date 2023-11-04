import { Box, Text, Heading, Center, Button, Image} from '@chakra-ui/react';
import Animation from '@/app/components/animation';

export default function Section7() {
  return (
    <Box w="100%" h="100%" mb="20px" mt={{base:"-10px", md:"-100px", xl:"-40%"}} bgColor="#FFF">
      <Animation>
        <Center display="flex" flexDirection="column" mb="24px">
          <Heading fontSize="30px" fontWeight="bold" fontStyle="italic" color="#B4C5D5">
            Live Wedding
          </Heading>
          <Text fontSize="18px" fontWeight="500" color="#1A202C">
            Nailal & Via
          </Text>
        </Center>
      </Animation>
      <Box
        bgImage="url('/photos/wedding.jpeg')"
        bgSize="cover"
        bgPosition="center bottom"
        w="100%"
        h="60%"
        mt="120px"
      >
        <Box
          w="100%"
          h="100%"
          bg="rgba(180, 197, 212, 0.35)"
        >
          <Box w="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px="32px">
            <Animation>
              <Center bgColor="#B4C5D5" borderRadius="16px" p="8px" mt="-100px">
                  <iframe
                    width="300"
                    height="200"
                    title='Holy Matrimony of NAILAL & VIA | Live Streaming Gereja Hati Kudus Yesus Tanah Mas Semarang'
                    src="https://www.youtube.com/embed/AhGpYiRxqlw"
                    allowFullScreen
                    frameBorder="0"
                    style={{ borderRadius: "16px" }}
                  />
              </Center>
              </Animation>
            <Animation>
              <Center display="flex" flexDirection="column" mt="20px" gap="8px">
              <Text fontSize="14px" fontWeight="500" w="240px" color="white" textAlign="center">Live wedding can also be watched via the youtube platform</Text>
              <Button
                backgroundColor="#DD6B20"
                color="white"
                _hover={{ backgroundColor: 'rgb(192, 92, 26)' }}
                display="flex"
                alignItems="center"
                gap="2"
                borderRadius="8px"
                h="24px"
              >
                <Text fontSize="xs" fontWeight="700">Open Via Youtube</Text>
              </Button>
            </Center>
            </Animation>
          </Box>
        </Box>
      </Box>
      <Box
        bgImage="url('/icons/footer.svg')"
        bgSize="cover"
        bgPosition="center"
        h="10%"
        w="100%"
        pt="60px"
        transform="translateY(-200px)"
      >
        <Box bgColor="#B4C5D5" color="#FFF" w="100%" p="16px" pb="32px" textAlign="center">
          <Animation>
            <Heading fontSize="30px" mb="8px">Wedding Gift</Heading>
            <Text fontSize="sm" fontWeight="500">For beloved ones who may want to show your sincere love by sending a gift, please kindly tap the button below:</Text>
            <Center display="flex" flexDirection="column" mt="12px" gap="12px">
              <Button
                backgroundColor="#0000005C"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                display="flex"
                alignItems="center"
                gap="2"
                w="128px"
                h="32px"
                borderRadius="8px"
              >
                <Text fontSize="sm" fontWeight="bold">Bank Transfer</Text>
              </Button>
              <Button
                backgroundColor="#0000005C"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                display="flex"
                alignItems="center"
                gap="2"
                h="32px"
                borderRadius="8px"
              >
                <Text fontSize="sm" fontWeight="bold">Send Gift</Text>
              </Button>
              <Button
                backgroundColor="#0000005C"
                color="white"
                _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                display="flex"
                alignItems="center"
                gap="2"
                h="32px"
                borderRadius="8px"
              >
                <Image src="/icons/check.svg" alt="check" />
                <Text fontSize="sm" fontWeight="bold">Confirmation</Text>
              </Button>
            </Center>
          </Animation>
        </Box>
      </Box>
    </Box>
  );
}
