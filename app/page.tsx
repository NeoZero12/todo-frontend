import React from 'react';
import TodoApp from './components/TodoApp';

export default function TodoPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-white text-dark-700">
      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
        <header className="mb-6 border-b border-gray-100 pb-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Daftar Tugas (Todo List)
          </h1>
        </header>

        {/* Komponen Utama Todo dengan integrasi API Database */}
        <TodoApp />
      </div>
    </main>
  );
}