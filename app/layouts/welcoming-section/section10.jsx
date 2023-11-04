import { Box, Text, Heading, FormControl, Input, Textarea, Center, Button, VStack, HStack, Avatar } from '@chakra-ui/react';
import Footer from '@/app/components/footer';
import Animation from '@/app/components/animation';

export default function Section10() {
  const wishes = [
    {
       author: "Invitato",
       desc: "May your love continue to grow each and every year. Best wishes on your wedding Nailal & Via. Thank you for trusting Invitato for your e-invitation 🤍",
    },
    {
       author: "Om Jakarta",
       desc: "May your love continue to grow each and every year. Best wishes on your wedding Nailal & Via. Thank you for trusting Invitato for your e-invitation 🤍",
    },
    {
       author: "Pakdhe Surabaya",
       desc: "May your love continue to grow each and every year. Best wishes on your wedding Nailal & Via. Thank you for trusting Invitato for your e-invitation 🤍",
    },
    {
       author: "Tante Surabaya",
       desc: "May your love. Thank you for trusting Invitato for your e-invitation 🤍",
    },
    {
       author: "Tante Timur",
       desc: "May your love continue to grow each and every year. Best wishes on your wedding Nailal & Via. Thank you for trusting Invitato for your e-invitation 🤍",
    },
  ];
  return (
    <Box w="100%" h="100%" mb="20px">
      <Box
        bgImage="https://user-images.githubusercontent.com/10141928/147430927-d0a770ca-e416-46c0-b170-4cbd5ccf8c11.jpeg"
        bgSize="cover"
        bgPosition="start"
        w="100%"
        h="100%"
      >
        <Box
          w="100%"
          h="100%"
          bg="rgba(180, 196, 212, 0.64)"
        >
          <Animation>
            <Center display="flex" flexDirection="column" p="32px 16px 12px" color="#FFF" gap="8px">
              <Heading fontSize="36px" fontStyle="italic" fontWeight="bold" mt="20px">Prayers & Wishes</Heading> 
              <Text fontSize="16px" fontWeight="500" w="240px">Please leave your sincere prayers and wishes to us and our families</Text> 
              <FormControl color="#67544E">
                <Input placeholder='Name' color="#67544E" bgColor="white" size="sm" />
              </FormControl>
              <FormControl color="#67544E">
                <Textarea placeholder='Address' color="#67544E" bgColor="white" size="sm" />
              </FormControl>
            </Center>
            <Box display="flex" justifyContent="end" alignItems="end" px="16px" color="#FFF">
              <Button colorScheme='orange' fontSize="14px" h="32px">Send</Button>
            </Box>
          </Animation>
          <Animation>
            <VStack overflow="hidden" zIndex="3" height="300px" mx="20px" mt="12px">
              <VStack overflow="auto" spacing="5">
                  {wishes.map((item, i) => (
                    <HStack
                        key={i}
                        gap="6"
                        align="center"
                        wrap="nowrap">
                        <Avatar
                          name={item.author[0]}
                          w="40px"
                          h="40px"
                          color="white"
                          fontWeight="bold"
                          bg="var(--color-main-blue)"
                          border="3px solid white"
                        />
                        <Box
                          gap="4"
                          textAlign="left"
                          bg="white"
                          p="4px 16px"
                          shadow="sm"
                          borderBottomRadius="2xl"
                          borderTopEndRadius="2xl">
                          <Text fontWeight="700">
                            {item.author}
                          </Text>
                          <Text
                              fontWeight="normal"
                              fontSize="sm">
                              {item.desc}
                          </Text>
                        </Box>
                    </HStack>
                  ))}
              </VStack>
            </VStack>
          </Animation>
        </Box>
      </Box>
      <Box
        bgImage="url('/icons/footer.svg')"
        bgSize="cover"
        bgPosition="center"
        h="10%"
        w="100%"
        pt="60px"
        transform="translateY(-50px)"
      >
        <Box bgColor="#B4C5D5" color="#FFF" w="100%" p="16px" textAlign="center">
          <Animation>
            <Text fontSize="xs" fontWeight="500">It will be a joy for us if you are able to be attend on our wedding day. Thank you for all the kind words, prayers, and attentions given. We wish your understanding for all health protocols restrictions. See you on our wedding day!</Text>
            <Heading fontSize="36px" mt="24px">Nailal & Via</Heading>
          </Animation>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
