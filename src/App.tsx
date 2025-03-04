import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Language Selector - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>

      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl">{t('tagline')}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">{t('whoWeAre')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('aboutText1')}
          </p>
          <p className="text-lg text-gray-700">
            {t('aboutText2')}
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">{t('ourServices')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('undergraduateTitle')}</h3>
              <p className="text-gray-600">
                {t('undergraduateDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('mastersTitle')}</h3>
              <p className="text-gray-600">
                {t('mastersDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('phdTitle')}</h3>
              <p className="text-gray-600">
                {t('phdDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('languageTitle')}</h3>
              <p className="text-gray-600">
                {t('languageDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Scholarship Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">{t('scholarshipInfo')}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-4">
              {t('scholarshipIntro')}
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><span className="font-semibold">{t('cgsTitle')}</span> - {t('cgsDesc')}</li>
              <li><span className="font-semibold">{t('confuciusTitle')}</span> - {t('confuciusDesc')}</li>
              <li><span className="font-semibold">{t('provincialTitle')}</span> - {t('provincialDesc')}</li>
              <li><span className="font-semibold">{t('universityTitle')}</span> - {t('universityDesc')}</li>
            </ul>
            <p className="text-gray-700">
              {t('scholarshipOutro')}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">{t('contactUs')}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              {t('contactIntro')}
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <Mail className="text-red-600 mr-2" size={24} />
                <span className="text-gray-800">{t('email')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-red-600 mr-2" size={24} />
                <span className="text-gray-800">{t('phone')}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="text-red-600 mr-2" size={24} />
                <span className="text-gray-800">{t('whatsapp')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-red-500 pb-2 inline-block">{t('ourTeam')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/src/images/kate.jpg" 
                alt="Kate Don" 
                className="w-32 h-32 rounded-full object-cover border-4 border-red-500"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t('kateName')}</h3>
                <p className="text-red-600 font-medium mb-2">{t('kateTitle')}</p>
                <p className="text-gray-600">
                  {t('kateDesc')}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/src/images/kwamena.jpg" 
                alt="Kwamena Brakwah" 
                className="w-32 h-32 rounded-full object-cover border-4 border-red-500"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t('kwameName')}</h3>
                <p className="text-red-600 font-medium mb-2">{t('kwameTitle')}</p>
                <p className="text-gray-600">
                  {t('kwameDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>{t('copyright').replace('2025', currentYear.toString())}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;