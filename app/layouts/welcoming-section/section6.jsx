import { Box, Text, Image, Heading, Button, Input, FormControl, FormLabel, Textarea, Select } from '@chakra-ui/react';

export default function Section6() {
  return (
    <Box bgColor="#FFF" w="100%" h="100%" pt="20px">
      <Box
        w="100%"
      >
        <Box
          fontSize="sm"
          color="#67544E"
          textAlign="center"
          pb="16px"
          px="16px"
          fontWeight="500"
        >
          Your presence shall be a great honor for us and our families. Please confirm your attendance through the reservation form below:
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgColor="#B4C5D5"
          color="#FFF"
          textAlign="center"
          m="16px"
          p="24px"
          borderRadius="16px"
          gap="8px"
        >
          <FormControl color="#67544E">
            <Input placeholder='Name' color="#67544E" bgColor="white" size="sm" />
          </FormControl>
          <FormControl color="#67544E">
            <Textarea placeholder='Address' color="#67544E" bgColor="white" size="sm" />
          </FormControl>
          <FormControl color="#67544E">
            <FormLabel fontSize="sm">Will you attend the wedding?</FormLabel>
            <Select color="#67544E" bgColor="white" size="sm">
              <option value='yes'>Yes, I will gladly attend</option>
              <option value='no'>No, I cant't attend the wedding</option>
            </Select>
          </FormControl>
          <FormControl color="#67544E">
            <FormLabel fontSize="sm">How many guests will be attend?</FormLabel>
            <Select color="#67544E" bgColor="white" size="sm">
              <option value='1'>1</option>
              <option value='1'>2</option>
            </Select>
          </FormControl>
          <Button
            backgroundColor="transparent"
            color="#67544E"
            variant="outline"
            borderColor="#67544E"
            _hover={{ backgroundColor: '#FFF' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
            w="180px"
            borderRadius="8px"
            h="32px"
            mt="8px"
          >
            <Image src="/icons/confirm.svg" alt="msg" />
            <Text fontSize="sm" fontWeight="500">Submit Confirmation</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
