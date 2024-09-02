import React from 'react';

export default function ItemLogbook({ date, status, log_desc, children }) {
  const classnameStatus = ['status-logbook font-semibold ml-2']
  if (status === 'pending') classnameStatus.push('text-warn');
  if (status === 'success') classnameStatus.push('text-primary');
  return (
    <div className="w-full py-2 px-4 mb-1 bg-slate-200 rounded-md border-b-2 border-dark">
      <div className="w-full pl-1 flex items-center justify-between gap-x-2">
        <div>
          <p className="text-xs logbook-date font-medium text-light mt-1">{date}<span className={classnameStatus.join(' ')}>{status === 'success' ? 'accept': 'pending'}</span></p>
          <p className="text-sm text-black mt-2 line-clamp-5">{log_desc}</p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}