import { useState } from 'react'
import classnames from 'classnames'

interface Props {
  title: string;
  read: Boolean,
  dimiss: Function
}

const Answer = ({ title, read = false, dimiss } : Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div onClick={() => setToggle(!toggle)}>
      <div
        className={classnames('p-6 rounded-tl-none rounded-lg my-2', {
          'bg-[#E0ECFF]': !read,
          'bg-[#4D5E7710]': read,
          'cursor-pointer' : !toggle
        })}
      >
        <div className="flex items-center">
          <div
            className={classnames(
              'bg-azure-500 w-12 h-12 rounded-full grid place-items-center',
              { 'bg-[#A1B2CD]': read == true }
            )}
          >
            <svg
              className="text-white"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="text-[#0D114F] px-3">{title}</div>
        </div>

        {toggle && (
          <div className={classnames('mt-3 flex gap-6 justify-end')}>
            {read ? (
              <button className="flex gap-2 text-[#4D5E77] font-opensans">
                <svg
                  className="text-azure-500"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Pergunta lida
              </button>
            ) : (
              <>
                <button className="flex gap-2 text-[#4D5E77] font-opensans">
                  <svg
                    className="text-azure-500"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Marcar como lida
                </button>
                <button
                  className="flex gap-2 text-[#4D5E77] font-opensans"
                  onClick={() => dimiss()}
                >
                  <svg
                    className="text-[#E83F5B]"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Excluir
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Answer
