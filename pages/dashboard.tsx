import { useState } from 'react'
import Head from 'next/head'
import classNames from 'classnames'

import Default from '../layouts/Default'
import Button from '../components/Button'
import Answer from '../components/Answer'
import ConfirmAlert from '../components/ConfirmAlert'

const Dashboard = () => {
  const [answer, setAnswer] = useState('')
  const answers = [
    {
      title: 'Qual a diferença entre const, var e let no Javascript?',
      read: false,
    },
    { title: 'O que é Typescript?', read: true },
  ]

  const [deleteAnswer, setDeleteAnswer] = useState(false)

  return (
    <>
      <Head>
        <title>Dashboard - rocket.q</title>
      </Head>

      <Default>
        <ConfirmAlert
          showDialog={deleteAnswer}
          title="Excluir pergunta"
          text="Tem certeza que você deseja excluir esta pergunta?"
          options={[
            {
              text: 'Cancelar',
              style: 'secondary',
              handle: () => setDeleteAnswer(false),
            },
            {
              text: 'Sim, excluir',
              style: 'danger',
              handle: () => setDeleteAnswer(false),
            },
          ]}
        />

        <h1 className="font-bold text-3xl text-[#0D114F]">Faça sua pergunta</h1>
        <div
          className={classNames(
            'mt-6 rounded-tl-none rounded-lg grid p-3 border-2 border-[##A1B2CD] hover:border-[#3485FF] transition-colors',
            { 'border-[#3485FF]': answer.length > 0 }
          )}
        >
          <textarea
            className="bg-transparent w-full resize-none mb-2 outline-none text-[#0D114F]"
            placeholder="O que você quer perguntar?"
            onChange={(e) => setAnswer(e.target.value)}
            rows={4}
          ></textarea>

          <div className="flex justify-between items-center">
            <div className="text-sm text-[#CCCCCC] flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9999 6.66658H14.1666V4.99992C14.1666 2.69992 12.2999 0.833252 9.99992 0.833252C7.69992 0.833252 5.83325 2.69992 5.83325 4.99992V6.66658H4.99992C4.08325 6.66658 3.33325 7.41658 3.33325 8.33325V16.6666C3.33325 17.5833 4.08325 18.3333 4.99992 18.3333H14.9999C15.9166 18.3333 16.6666 17.5833 16.6666 16.6666V8.33325C16.6666 7.41658 15.9166 6.66658 14.9999 6.66658ZM9.99992 14.1666C9.08325 14.1666 8.33325 13.4166 8.33325 12.4999C8.33325 11.5833 9.08325 10.8333 9.99992 10.8333C10.9166 10.8333 11.6666 11.5833 11.6666 12.4999C11.6666 13.4166 10.9166 14.1666 9.99992 14.1666ZM12.5833 6.66658H7.41658V4.99992C7.41658 3.57492 8.57492 2.41659 9.99992 2.41659C11.4249 2.41659 12.5833 3.57492 12.5833 4.99992V6.66658Z"
                  fill="#A5B0C1"
                />
              </svg>
              Esta pergunta é anônima
            </div>
            <Button>Enviar</Button>
          </div>
        </div>

        {answers.length > 0 ? (
          <div className="flex flex-col my-2">
            {answers.map((item, index) => (
              <Answer
                key={index}
                title={item.title}
                read={item.read}
                dimiss={() => setDeleteAnswer(true)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center my-12">
            <svg
              width={149}
              height={135}
              viewBox="0 0 149 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.1"
                cx="81.5"
                cy="67.5"
                r="67.5"
                fill="url(#paint0_linear)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.4231 66.5012C64.6435 66.5012 55.0943 74.8799 55.0943 85.2155V85.2633C55.0943 95.5989 64.6435 103.978 76.4231 103.978H107.877C109.052 103.978 110.204 103.894 111.328 103.734L117.422 108.898C117.587 109.039 117.809 109.117 118.039 109.117C118.53 109.117 118.928 108.768 118.928 108.338L118.928 101.273C125.089 97.9914 129.206 92.0491 129.206 85.2633V85.2155C129.206 74.8799 119.656 66.5012 107.877 66.5012H76.4231Z"
                fill="#1D4885"
              />
              <path
                d="M81.5964 21.6649H36.6853C19.8573 21.6649 6.21558 33.6344 6.21558 48.3996C6.21558 63.1648 19.8573 75.1343 36.6853 75.1343H81.5964C98.4244 75.1343 112.066 63.1648 112.066 48.3996C112.066 33.6344 98.4244 21.6649 81.5964 21.6649Z"
                fill="url(#paint1_linear)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.895 67.3577V81.3535C20.895 81.9688 21.4634 82.4675 22.1646 82.4675C22.4934 82.4675 22.8095 82.3555 23.0461 82.1552L34.7678 72.2316L20.895 67.3577Z"
                fill="url(#paint2_linear)"
              />
              <path
                d="M38.7484 51.7415C41.4655 51.7415 43.668 49.8089 43.668 47.4249C43.668 45.041 41.4655 43.1084 38.7484 43.1084C36.0314 43.1084 33.8289 45.041 33.8289 47.4249C33.8289 49.8089 36.0314 51.7415 38.7484 51.7415Z"
                fill="white"
              />
              <path
                d="M58.903 51.7415C61.62 51.7415 63.8226 49.8089 63.8226 47.4249C63.8226 45.041 61.62 43.1084 58.903 43.1084C56.186 43.1084 53.9834 45.041 53.9834 47.4249C53.9834 49.8089 56.186 51.7415 58.903 51.7415Z"
                fill="white"
              />
              <path
                d="M79.5334 51.7415C82.2504 51.7415 84.453 49.8089 84.453 47.4249C84.453 45.041 82.2504 43.1084 79.5334 43.1084C76.8164 43.1084 74.6138 45.041 74.6138 47.4249C74.6138 49.8089 76.8164 51.7415 79.5334 51.7415Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="175.583"
                  y1="-204.224"
                  x2="74.4065"
                  y2="149.495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5498FF" />
                  <stop offset="0.515625" stopColor="#428EFF" />
                  <stop offset={1} stopColor="#297FFF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="132.909"
                  y1="-59.2221"
                  x2="111.458"
                  y2="89.2381"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5498FF" />
                  <stop offset="0.515625" stopColor="#428EFF" />
                  <stop offset={1} stopColor="#297FFF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="37.4995"
                  y1="44.5"
                  x2="25.337"
                  y2="83.5398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5498FF" />
                  <stop offset="0.515625" stopColor="#428EFF" />
                  <stop offset={1} stopColor="#297FFF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-lg font-semibold text-[#0D114F] py-3">
              Nenhuma pergunta por aqui...
            </div>

            <div className="font-opensans text-[#4D5E77] text-sm max-w-xs">
              Faça sua primeira pergunta e envie o código dessa sala para outras
              pessoas!
            </div>
          </div>
        )}
      </Default>
    </>
  )
}

export default Dashboard
