import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RequirementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequirementsModal: React.FC<RequirementsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-800">{t('applicationRequirements')}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <ul className="space-y-4">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <li key={num} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mt-0.5">
                  {num}
                </div>
                <span className="text-gray-700">{t(`requirements.${num}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RequirementsModal;