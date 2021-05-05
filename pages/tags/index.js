import {
    Heading,
    Flex,
    Stack,
    Link,
    Divider,
    useColorMode,
    Tag
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Container from '../../components/Container'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { snippetsFilePaths, SNIPPETS_PATH } from '../../utils/mdxUtils'
import { tutorialsFilePaths, TUTORIALS_PATH } from '../../utils/mdxUtils'
import NextLink from 'next/link'

const url = `https://coffeeclass.io/tags`
const title = 'Tags – Coffeeclass'
const description = `Tags for Coffeeclass`

export default function Index({ tutorials, snippets }) {
    var tagArray = []
    tutorials.map(tut => tut.data.tags.map(tag => {
        tagArray.push(tag)
    }))
    snippets.map(snip => snip.data.tags.map(tag => {
        tagArray.push(tag)
    }))
    var tagArray = [...new Set(tagArray)]
    return (
        <Container>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Stack
                spacing={8}
                px={4}
            >
                <Flex
                    flexDir="column"
                    mt={50}
                >
                    <Heading as="h1" size="2xl">All Tags 🏷️</Heading>
                    <Divider my={6} />
                    <Flex wrap="wrap">
                        {
                            tagArray.map(tag => {
                                return (
                                    <Flex mr={2} mb={2} key={tag}>
                                        <NextLink href={`/tags/${tag}`} passHref>
                                            <Link 
                                            href={`/${tag}`}
                                            _hover={{
                                                textDecor: 'none',
                                                opacity: '.5'
                                            }}
                                            >
                                                <Tag size="lg">#{tag}</Tag>
                                            </Link>
                                        </NextLink>
                                    </Flex>
                                )
                            })
                        }
                    </Flex>
                </Flex>
            </Stack>
        </Container>
    )
}

export function getStaticProps() {
    const tutorials = tutorialsFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(TUTORIALS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    const snippets = snippetsFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    return { props: { tutorials, snippets } }
}