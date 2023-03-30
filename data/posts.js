import hottakes from '../public/images/works/hottakes/rest.png'


const posts = [
    {
        id: 'how-to-create-a-blog-with-nextjs-and-markdown',
        title: 'How to create a blog with Next.js and Markdown',
        date: '2021-09-01',
        tags: ['Next.js', 'Markdown', 'React'],
        description: `In this tutorial, I will show you how to create a blog with Next.js and Markdown. I will also show you how to use the Next.js Image component to optimize your images.`,
        images: [
            {
                src: hottakes,
                alt: 'Next.js and Markdown',
                width: 1200,
                height: 630,
            },
        ],
    },
    {
        id: 'how-to-config-tailwindcss-with-nextjs',
        title: 'How to config TailwindCSS with Next.js',
        date: '2021-08-31',
        tags: ['Next.js', 'TailwindCSS', 'React'],
        description: `In this tutorial, I will show you how to config TailwindCSS with Next.js. I will also show you how to use the Next.js Image component to optimize your images.`,
        images: [
            {
                src: hottakes,
                alt: 'Next.js and TailwindCSS',
                width: 1200,
                height: 630,
            },
        ],
    }
]

export default posts