import { getTasks } from '@/lib/tasks';
import ApiTodoList from './components/ApiTodoList';

export default async function ApiTodosPage() {
  // Ambil data tasks dari lib
  const result = await getTasks({ limit: 15, skip: 0 });

  // Pastikan result.tasks bernilai array, jika gagal beri array kosong []
  const tasks = result?.tasks ?? [];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <ApiTodoList initialTasks={tasks} />
    </main>
  );
}