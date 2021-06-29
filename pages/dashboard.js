import Head from 'next/head'
import Default from '../layouts/Default'
import Button from '../components/button'

const Dashboard = () => (
  <>
    <Head>
      <title>Dashboard - rocket.q</title>
    </Head>

    <Default>
      <h1 className="font-bold text-3xl text-[#0D114F]">Faça uma pergunta</h1>
      <div className="mt-6 rounded-tl-none rounded-lg grid p-3 border-2 border-[#A1B2CD]">
        <textarea
          className="bg-transparent w-full resize-none mb-2 outline-none"
          placeholder="O que você quer perguntar?"
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
    </Default>
  </>
)

export default Dashboard
