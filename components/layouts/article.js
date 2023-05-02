import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title, description, keywords }) => {
  const d = `${description}`
  const t = `${title} - Noah Lhote`
  const k = `${keywords},`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name='description' content={d} />
            <meta name='keywords' content={k} />
            <meta property='og:title' content={t} />
            <meta property='og:description' content={d} />
            <meta property='og:type' content='website' />
            <meta property='og:site_name' content='Noah Lhote | Portfolio' />
            <meta name='author' content='Noah Lhote' />
            <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
            <link rel='shortcut icon' href='/images/favicon.ico' type='image/x-icon' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
