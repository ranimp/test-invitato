import { Box, Text, Center, Image } from '@chakra-ui/react';
import Animation from '@/app/components/animation';

export default function Section10() {
  return (
    <Center bgColor="gray.400" color="white" w="100%" p="32px" textAlign="center" mt="100px" display="flex" flexDirection="column">
      <Animation>
        <Center>
          <Image src="https://user-images.githubusercontent.com/10141928/137603877-5d2ddf10-39a7-4586-8ab1-d9cca7fe8898.png" alt="invitato" w="120px" h="34px" />
        </Center>
        <Text fontSize="xs" fontWeight="500">Created with Love by Invitato</Text>
        <Text fontSize="xs" fontWeight="500" mt="12px">© 2023 Nailal & Via. All Rights Reserved</Text>
        <Text fontSize="xs" fontWeight="500">Song by I Finally Found Someone - Barbra Streisand ft. Bryan Adams</Text>
      </Animation>
  </Center>
  );
}
