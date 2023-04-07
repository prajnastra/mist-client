import { Box, Grid, GridItem } from '@chakra-ui/react'

export default function App() {
  return (
    <Box bg="gray.900" h="100vh" color="white" p="5">
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        gap={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          display={{ base: 'none', md: 'block' }}
          bg="tomato"
        />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
      </Grid>
    </Box>
  )
}
