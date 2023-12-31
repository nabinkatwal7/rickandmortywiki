import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {motion, AnimatePresence} from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
