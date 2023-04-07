import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
} from '@chakra-ui/react'

export default function InputFields() {
  return (
    <>
      <InputGroup>
        <InputLeftAddon bg="gray.700" border="none" p="0">
          <Select
            bg="gray.800"
            border="2px solid"
            borderColor="gray.600"
            color="gray.400"
            borderRadius="none"
            defaultValue="GET"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </Select>
        </InputLeftAddon>
        <Input
          type="text"
          bg="gray.800"
          border="2px solid"
          borderColor="gray.600"
          borderRadius="none"
          color="gray.400"
          colorScheme="red"
          placeholder="URL"
        />
        <InputRightAddon bg="none" border="none" p="0" borderRadius="none">
          <Button borderRadius="none" colorScheme="blue">
            Go
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  )
}
