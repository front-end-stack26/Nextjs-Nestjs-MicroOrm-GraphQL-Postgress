import Link from "next/link";
import { Users, Zap, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="flex gap-6 items-center text-5xl leading-normal font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          <Sparkles className="text-indigo-600" size={40} />
          Collaborez plus intelligemment 
          <Sparkles className="text-indigo-600" size={40} />
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Gérez vos équipes, vos projets et vos workflows dans un espace collaboratif puissant et intuitif.
        </p>

        <p className="mt-4 max-w-xl text-lg text-pink-600 font-semibold">
          Prêt à booster votre productivité ?
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >
            Accéder au dashboard
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 mb-16 grid gap-8 md:grid-cols-3">
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition">
          <Users className="text-indigo-600 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-2">Gestion des équipes</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Organisez facilement vos équipes, vos rôles et vos permissions.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition">
          <Zap className="text-purple-600 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-2">Workflow en temps réel</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Collaborez efficacement grâce aux mises à jour en temps réel et aux actions rapides.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition">
          <Shield className="text-pink-600 mb-4" size={28} />
          <h3 className="text-xl font-semibold mb-2">Accès sécurisé</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Profitez d’une gestion avancée des rôles et d’un haut niveau de sécurité pour vos données.
          </p>
        </div>
      </section>
    </div>
  )
}
