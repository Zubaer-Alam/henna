import { motion } from 'framer-motion'
import Image from 'next/image'

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDF7F2]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/henna-logo.svg"
            alt="Faria's Henna Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-4xl font-bold text-[#4A3728]"
        >
          Faria's Henna
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4"
        >
          <div className="h-2 w-32 mx-auto bg-[#8B6E5A] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#4A3728]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}