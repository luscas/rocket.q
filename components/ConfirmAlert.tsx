import { AnimatePresence, motion } from 'framer-motion'
import { DialogOverlay } from '@reach/dialog'

import Input from './Input'
import Button from './Button'

const ConfirmAlert = ({ title, text, options = [], showDialog }) => {
  const backdrop = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay>
            <motion.div
              className="bg-[rgba(4,9,17,0.80)] w-screen h-screen fixed top-0 left-0 grid place-items-center"
              variants={backdrop}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delayChildren: 0.3 }}
              >
                <div className="bg-white px-24 py-16 rounded-lg text-center">
                  <div className="text-2xl font-bold text-[#0D114F]">
                    {title}
                  </div>
                  <div className="text-[#4D5E77] py-3">{text}</div>
                  <Input placeholder="Digite sua senha" />

                  <div className="flex justify-center items-center gap-2 mt-4">
                    {options.map((option, key) => (
                      <Button
                        color={option.style}
                        size="xl"
                        key={key}
                        onClick={option.handle}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </>
  )
}

export default ConfirmAlert
