import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Projeto!</h1>
      <Link href="/login" className="text-blue-500 underline text-lg">
        Ir para o Login
      </Link>
    </main>
  );
}

