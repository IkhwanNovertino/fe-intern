import React from 'react';

export default function CardInform({ children }) {
  return (
    <div className="border-box pl-4 py-4 w-80 drop-shadow shadow-lg rounded-xl bg-slate-50">
      {children}
    </div>
  );
}
