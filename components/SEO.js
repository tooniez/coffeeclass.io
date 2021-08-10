import { NextSeo, ArticleJsonLd } from 'next-seo'

const SEO = ({ title, seoDescription, publishedAt, lastUpdated, url, author }) => {
    const date = new Date(publishedAt).toISOString()
    // const dataModified = dataModified ? new Date(modifiedAt).toISOString() : date
    const featuredImage = {
        url: `https://coffeeclass.io/favicons/logo-white-bg.png`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title} | coffeeclass.io`}
                description={seoDescription}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: seoDescription,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName={author}
                dateModified={lastUpdated ? lastUpdated : date}
                datePublished={date}
                description={seoDescription}
                images={[featuredImage]}
                publisherLogo="/favicons/logo-white-bg.png"
                publisherName="coffeeclass.io"
                title={`${title} | coffeeclass.io`}
                url={url}
            />
        </>
    )
}

export default SEO