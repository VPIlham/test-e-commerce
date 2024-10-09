import Head from 'next/head';

type HeadMetaProps = {
    title: string;
    description: string;
    keywords?: string;
    author?: string;
    image?: string;
    url?: string;
};

const HeadMeta: React.FC<HeadMetaProps> = ({
    title,
    description,
    keywords = '',
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />

            <meta name="description" content={description} />

            {keywords && <meta name="keywords" content={keywords} />}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* Responsive meta tag */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
};

export default HeadMeta;
