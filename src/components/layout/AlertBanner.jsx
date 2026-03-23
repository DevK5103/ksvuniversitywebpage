import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function AlertBanner({ message, type = 'warning', dismissible = true }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const styles = {
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  const currentStyle = styles[type] || styles.warning;

  return (
    <div className={`w-full border-l-4 p-4 my-6 rounded-r shadow-sm flex items-start justify-between gap-4 ${currentStyle}`}>
      <div className="flex items-start gap-3">
        <AlertCircle size={20} className="shrink-0 mt-0.5" />
        <p className="font-body text-sm font-medium">{message}</p>
      </div>
      {dismissible && (
        <button 
          onClick={() => setVisible(false)}
          className="shrink-0 opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Dismiss alert"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
