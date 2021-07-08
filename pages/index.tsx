import Head from 'next/head'
import Link from 'next/link'
import RoomLayoutTransition from '../layouts/RoomLayoutTransition'
import Input from '../components/input'
import Button from '../components/button'

const Index = () => (
  <>
    <Head>
      <title>rocket.q</title>
    </Head>

    <RoomLayoutTransition>
      <div className="text-[#0D114F] text-3xl font-bold">
        Entre como participante
      </div>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Código da sala" />

        <Button type="submit">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
          Entrar na sala
        </Button>
      </form>

      <div className="other">
        <div className="bg-[#FBFCFF] relative z-10 px-4">ou</div>
      </div>

      <div className="text-[#0D114F] text-3xl font-bold mb-6">
        Crie sua própria sala, de forma fácil
      </div>

      <Link href="/room/create">
        <a className="grid gap-1">
          <Button variant="outline">
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Criar sala
          </Button>
        </a>
      </Link>
    </RoomLayoutTransition>
  </>
)

export default Index
