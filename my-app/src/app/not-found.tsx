import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold">NOT-FOUND - 404</h1>
      <p className="mt-4">A página que você procura não foi encontrada...</p>
      <img src="https://http.cat/404" alt="404 Not Found" className="mt-6 max-w-full h-auto" />
    </div>
  );
}
