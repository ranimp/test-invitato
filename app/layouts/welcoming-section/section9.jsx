import { Box, Text, Heading, Center, Button, Image} from '@chakra-ui/react';
import Animation from '@/app/components/animation';

export default function Section9() {
  return (
    <Box w="100%" p="32px 16px" bgColor="#FFF">
      <Animation>
        <Center display="flex" flexDirection="column" mb="24px" textAlign="center" color="#67544E">
          <Heading fontSize="36px" fontWeight="700" fontStyle="italic" w="200px">
          Instagram Wedding Filter
          </Heading>
          <Text fontSize="14px" fontWeight="500" w="80%" mt="12px">
          Capture your moment while attending our wedding by using the Instagram filter below:
          </Text>
          <Image src="/photos/wedding.jpeg" alt="wedding" borderRadius="16px" my="16px" w="80%" />
          <Button
            backgroundColor="#67544E"
            color="white"
            _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            display="flex"
            alignItems="center"
            gap="2"
            w="128px"
            h="32px"
            borderRadius="8px"
          >
            <Image src="/icons/ig.svg" alt="ig" />
            <Text fontSize="sm" lineHeight="12px" fontWeight="400">Use Filter</Text>
          </Button>
        </Center>
      </Animation>
    </Box>
  );
}
