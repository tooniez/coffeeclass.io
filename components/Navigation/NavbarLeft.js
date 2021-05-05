import React, { useState } from 'react'
import {
    Flex,
    Box,
    IconButton,
    Button,
    useColorMode,
    Tooltip,
    WrapItem,
    Icon,
    Text,
    Image
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { FiInfo, FiScissors, FiBookOpen, FiHome, FiBookmark, FiSearch } from "react-icons/fi"
import { useRouter } from 'next/router'

const NavBarLeft = () => {
    const [display, changeDisplay] = useState('none')
    const { colorMode } = useColorMode()
    const bgColor = {
        light: 'gray.100',
        dark: 'gray.700'
    }
    const boxShadowColor = {
        light: '0 4px 12px 0 rgba(0, 0, 0, 0.3)',
        dark: '0 4px 12px 0 rgba(0, 0, 0, 1)'
    }
    const activeNavColor = {
        light: 'black',
        dark: 'white'
    }
    const router = useRouter()
    const slug = router.asPath
    return (
        <Box
            w={100}
            h="100vh"
            bgColor={bgColor[colorMode]}
            pos="fixed"
            left={0}
            top={0}
            as="nav"
            boxShadow={boxShadowColor[colorMode]}
            display={['none', 'none', 'flex']}
        >
            <Flex
                flexDir="column"
                align="center"
                w="100%"
            >
                <NextLink href="/" passHref>
                    <WrapItem w="100%">
                        <Tooltip
                            hasArrow
                            label="coffeeclass.io Home"
                            placement="right"
                            closeDelay={100}
                        >
                            <Box borderRight={`2px solid ${slug == '/' ? activeNavColor[colorMode] : null}`} w="100%">

                                <Button
                                    variant="ghost"
                                    aria-label="Home"
                                    my={5}
                                    w="100%"
                                    _hover={{ background: 'none' }}
                                >
                                    <Flex
                                        flexDir="column"
                                        align="center"
                                    >
                                        {/* <Image
                                        src="/favicons/coffee-only-transparent-bg.png"
                                        w={50}
                                    /> */}
                                        <Icon as={FiHome} fontSize="2xl" color={slug == '/' ? activeNavColor[colorMode] : null} />
                                        <Text fontSize="xs" mt={2}>coffeeclass.io</Text>
                                    </Flex>
                                </Button>
                            </Box>
                        </Tooltip>
                    </WrapItem>
                </NextLink>


                <NextLink href="/snippets" passHref>
                    <WrapItem w="100%">
                        <Tooltip
                            hasArrow
                            label="Snippets"
                            placement="right"
                            closeDelay={100}
                        >
                            <Box borderRight={`2px solid ${slug.includes('snippets') ? activeNavColor[colorMode] : null}`} w="100%">
                                <Button
                                    variant="ghost"
                                    aria-label="Snippets"
                                    my={5}
                                    w="100%"
                                    _hover={{ background: 'none' }}
                                >
                                    <Icon as={FiScissors} fontSize="2xl" />
                                </Button>
                            </Box>
                        </Tooltip>
                    </WrapItem>
                </NextLink>

                {/* <NextLink href="/learn" passHref>
                    <WrapItem w="100%">
                        <Tooltip
                            hasArrow
                            label="Learn"
                            placement="right"
                            closeDelay={100}
                        >
                            <Button
                                variant="ghost"
                                aria-label="Learn"
                                my={5}
                                w="100%"
                                _hover={{ background: 'none' }}
                            >
                                <Icon as={FiEdit2} fontSize="2xl" color={slug.includes('learn') ? activeNavColor[colorMode] : null} />
                            </Button>
                        </Tooltip>
                    </WrapItem>
                </NextLink> */}

                <NextLink href="/tutorials" passHref>
                    <WrapItem w="100%">
                        <Tooltip
                            hasArrow
                            label="Tutorials"
                            placement="right"
                            closeDelay={100}
                        >
                            <Box borderRight={`2px solid ${slug.includes('tutorials') ? activeNavColor[colorMode] : null}`} w="100%">
                                <Button
                                    variant="ghost"
                                    aria-label="Tutorials"
                                    my={5}
                                    w="100%"
                                    _hover={{ background: 'none' }}
                                >
                                    <Icon as={FiBookOpen} fontSize="2xl" />
                                </Button>
                            </Box>
                        </Tooltip>
                    </WrapItem>
                </NextLink>

                {display == 'none' &&
                    <IconButton
                        onClick={() => changeDisplay('flex')}
                        icon={<ChevronDownIcon />}
                        background="none"
                        _hover={{ background: 'none' }}
                    />
                }

                <Flex
                    display={display}
                    flexDir="column"
                    align="center"
                    w="100%"
                >
                    <NextLink href="/tags" passHref>
                        <WrapItem w="100%">
                            <Tooltip
                                hasArrow
                                label="Tags"
                                placement="right"
                                closeDelay={100}
                            >
                                <Box borderRight={`2px solid ${slug.includes('tags') ? activeNavColor[colorMode] : null}`} w="100%">
                                    <Button
                                        variant="ghost"
                                        aria-label="Tags"
                                        my={5}
                                        w="100%"
                                        _hover={{ background: 'none' }}
                                    >
                                        <Icon as={FiBookmark} fontSize="2xl" color={slug.includes('tags') ? activeNavColor[colorMode] : null} />
                                    </Button>
                                </Box>
                            </Tooltip>
                        </WrapItem>
                    </NextLink>

                    <NextLink href="/about" passHref>
                        <WrapItem w="100%">
                            <Tooltip
                                hasArrow
                                label="About"
                                placement="right"
                                closeDelay={100}
                            >
                                <Box borderRight={`2px solid ${slug.includes('about') ? activeNavColor[colorMode] : null}`} w="100%">
                                    <Button
                                        variant="ghost"
                                        aria-label="About"
                                        my={5}
                                        w="100%"
                                        _hover={{ background: 'none' }}
                                    >
                                        <Icon as={FiInfo} fontSize="2xl" color={slug.includes('about') ? activeNavColor[colorMode] : null} />
                                    </Button>
                                </Box>
                            </Tooltip>
                        </WrapItem>
                    </NextLink>

                    <NextLink href="/search" passHref>
                        <WrapItem w="100%">
                            <Tooltip
                                hasArrow
                                label="Search"
                                placement="right"
                                closeDelay={100}
                            >
                                <Box borderRight={`2px solid ${slug.includes('search') ? activeNavColor[colorMode] : null}`} w="100%">
                                    <Button
                                        variant="ghost"
                                        aria-label="Search"
                                        my={5}
                                        w="100%"
                                        _hover={{ background: 'none' }}
                                    >
                                        <Icon as={FiSearch} fontSize="2xl" color={slug.includes('search') ? activeNavColor[colorMode] : null} />
                                    </Button>
                                </Box>
                            </Tooltip>
                        </WrapItem>
                    </NextLink>

                    <IconButton
                        onClick={() => changeDisplay('none')}
                        icon={<ChevronUpIcon />}
                        background="none"
                        _hover={{ background: 'none' }}
                    />
                </Flex>
            </Flex>
        </Box >
    )
}

export default NavBarLeft