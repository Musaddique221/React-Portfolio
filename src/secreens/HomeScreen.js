import React from 'react'
import {Flex} from "@chakra-ui/react"

import HeroOne from '../components/HeroOne'
import HeroTwo from '../components/HeroTwo'
import HeroThree from '../components/HeroThree'

const HomeScreen =()=> {
  return (
    <Flex direction="column" mt="85px" w="full" p="8" zIndex="100">
        {/* Section 1 Hero */}
        <HeroOne />
        {/* Section 2 Hero */}
        <HeroTwo />
        {/* Section 3 Hero */}

        <HeroThree />
      </Flex>
  )
}

export default HomeScreen
