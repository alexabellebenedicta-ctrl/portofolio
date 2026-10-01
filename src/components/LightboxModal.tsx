import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  imageUrl: string | null;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageUrl, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (imageUrl) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-3.5 bg-white border-b border-gray-100">
          <span className="text-xs font-semibold text-[#2E1065] truncate pr-4">
            {title}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-auto p-2 bg-[#120F1D] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
