'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { LogOut, LayoutDashboard, Shield } from 'lucide-react';

export default function Navbar() {
  const [token, setToken] = useState<string | undefined>();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const t = Cookies.get('token');
    setToken(t);

    if (t) {
      try {
        const payload = JSON.parse(atob(t.split('.')[1]));
        setIsAdmin(payload.role === 'GLOBAL_ADMIN');
      } catch {}
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    window.location.href = '/login';
  };

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text"
          >
            WorkspaceApp
          </Link>
          {token && (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>
          )}
          {token && isAdmin && (
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800 transition"
            >
              <Shield size={16} />
              Admin
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          {!token && (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-700 hover:text-indigo-600 transition"
              >
                Connexion
              </Link>

              <Link
                href="/register"
                className="text-sm px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
              >
                S'inscrire
              </Link>
            </>
          )}
          {token && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition shadow-sm"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
