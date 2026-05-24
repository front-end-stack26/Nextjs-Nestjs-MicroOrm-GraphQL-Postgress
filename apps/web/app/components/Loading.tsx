'use client';

type LoadingProps = {
  message?: string;
};

export default function Loading({ message = 'Chargement...' }: LoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500" role="status" aria-live="polite">
      <svg
        className="animate-spin h-6 w-6 mr-3 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
