import Head from 'next/head'
import RoomLayoutTransition from '../../layouts/RoomLayoutTransition'
import Input from '../../components/input'
import Button from '../../components/button'

const CreateRoom = () => (
  <>
    <Head>
      <title>Crie sua própria sala - rocket.q</title>
    </Head>

    <RoomLayoutTransition>
      <div className="max-w-sm">
        <div className="text-[#0D114F] text-3xl font-bold">
          Crie sua própria sala
        </div>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Insira uma senha" />

          <Button type="submit">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Criar sala
          </Button>
        </form>
      </div>
    </RoomLayoutTransition>
  </>
)
export default CreateRoom
