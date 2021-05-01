import {
    Heading,
    Text,
    Code,
    UnorderedList,
    ListItem,
    useColorMode,
    Link,
    Box,
    OrderedList,
    Alert,
    ListIcon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Quote = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900'
    }

    return (
        <Alert
            mt={2}
            w="100%"
            bg={bgColor[colorMode]}
            variant="left-accent"
            status="info"
            py={0}
            {...props}
        />
    )
}

const CustomLink = (props) => {
    // const router = useRouter()
    const { colorMode } = useColorMode()
    const color = {
        light: 'hsl(208, 99%, 44%)',
        dark: 'hsl(208, 95%, 68%)'
    }

    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
    // console.log(router.pathname)
    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color={color[colorMode]} {...props} />
            </NextLink>
        )
    }

    return <Link color={color[colorMode]} isExternal {...props} />
}

const CustomListItem = (props) => {
    return (
        <>
            <ListItem
                my={2}
                fontSize="xl"
                listStyleType="none"
            >
                <ListIcon as={ArrowForwardIcon} color="blue.500" />
                {props.children}
            </ListItem>
        </>
    )
}

const DocsHeading = (props) => (
    // console.log(props),
    <Heading
        css={{
            scrollMarginTop: '100px',
            scrollSnapMargin: '100px', // Safari
            '&[id]': {
                pointerEvents: 'none'
            },
            '&[id]:before': {
                display: 'block',
                height: ' 6rem',
                marginTop: '-6rem',
                visibility: 'hidden',
                content: `""`
            },
            '&[id]:hover a': { opacity: 1 }
        }}
        {...props}
    >
        <Box>
            {props.children}
            {props.children && (
                <Box
                    aria-label="anchor"
                    as="a"
                    color="blue.500"
                    fontWeight="normal"
                    outline="none"
                    _hover={{
                        opacity: 1,
                        boxShadow: 'outline'
                    }}
                    opacity="0"
                    ml="0.375rem"
                    href={`#${props.children}`}
                    id={props.children}
                >
                    #
                </Box>
            )}
        </Box>
    </Heading>
)

const CustomP = (props) => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'gray.700',
        dark: 'gray.300'
    }
    return (
        <Text fontSize="xl" my={4} color={color[colorMode]} {...props} />
    )
}

const MDXComponents = {
    h1: (props) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props) => <DocsHeading as="h2" size="xl" mt="1em" {...props} />,
    h3: (props) => <DocsHeading as="h3" size="lg" {...props} />,
    h4: (props) => <DocsHeading as="h4" size="md" {...props} />,
    h5: (props) => <DocsHeading as="h5" size="sm" {...props} />,
    h6: (props) => <DocsHeading as="h6" size="xs" {...props} />,
    p: CustomP,
    inlineCode: (props) => <Code colorScheme="gray" fontSize="0.84em" {...props} />,
    ul: (props) => <UnorderedList my={4} {...props} />,
    ol: (props) => <OrderedList my={4} {...props} />,
    li: CustomListItem,
    a: CustomLink,
    blockquote: Quote,
}

export default MDXComponents