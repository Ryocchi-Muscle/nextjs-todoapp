import Image from 'next/image'
import AddTask from './compornents/AddTask'
import TodoList from './compornents/TodoList'

export default function Home() {
  return (
<main className='flex flex-col items-center justify-center'>
  <h1>Nextjs 13 todo app</h1>
  <div>
    <AddTask />
    <TodoList />
  </div>
</main>
  )
}
