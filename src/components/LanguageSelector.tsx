import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 bg-white/90 hover:bg-white px-3 py-2 rounded-full shadow-sm transition-colors">
        <Globe size={18} className="text-red-600" />
        <span className="text-gray-800 font-medium">{t('selectLanguage')}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-1">
          <button 
            onClick={() => changeLanguage('en')} 
            className={`block px-4 py-2 text-sm w-full text-left ${currentLanguage === 'en' ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {t('english')}
          </button>
          <button 
            onClick={() => changeLanguage('fr')} 
            className={`block px-4 py-2 text-sm w-full text-left ${currentLanguage === 'fr' ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {t('french')}
          </button>
          <button 
            onClick={() => changeLanguage('es')} 
            className={`block px-4 py-2 text-sm w-full text-left ${currentLanguage === 'es' ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {t('spanish')}
          </button>
          <button 
            onClick={() => changeLanguage('pt')} 
            className={`block px-4 py-2 text-sm w-full text-left ${currentLanguage === 'pt' ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {t('portuguese')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;