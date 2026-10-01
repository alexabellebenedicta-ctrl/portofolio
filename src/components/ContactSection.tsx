import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { UI_TRANSLATIONS } from '../data/portfolioData';
import { Instagram, Linkedin, Mail, Copy, Check, Send, Sparkles, Clock } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS.contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const myEmail = 'alexabellebenedicta@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessageSent(true);
    setTimeout(() => {
      setSenderName('');
      setMessage('');
      setMessageSent(false);
    }, 4500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7E22CE] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7E22CE]" />
                <span>{t.badge[language]}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2E1065] mb-3 text-balance">
                {t.title[language]}
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {t.subtitle[language]}
              </p>
            </div>

            {/* Social & Channel Cards */}
            <div className="space-y-4">
              {/* Instagram Card */}
              <a
                href="https://instagram.com/alexbl__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-[#7E22CE] group-hover:bg-[#3B0764] group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                      {t.instagramLabel[language]}
                    </h3>
                    <p className="text-sm font-bold text-[#2E1065] group-hover:text-[#6B21A8] transition-colors">
                      @alexbl__
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#7E22CE] group-hover:translate-x-0.5 transition-transform">
                  Follow & Connect →
                </span>
              </a>

              {/* LinkedIn: Real connected profile */}
              <a
                href="https://www.linkedin.com/in/alexabelle-benedicta-0459603a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-[#7E22CE] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                      {t.linkedinLabel[language]}
                    </h3>
                    <p className="text-sm font-bold text-[#2E1065] group-hover:text-[#0A66C2] transition-colors">
                      Alexabelle Benedicta
                    </p>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">
                      linkedin.com/in/alexabelle-benedicta-0459603a5
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[#7E22CE] group-hover:translate-x-0.5 transition-transform">
                  View Profile →
                </span>
              </a>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-[#7E22CE]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                      {t.emailLabel[language]}
                    </h3>
                    <p className="text-sm font-medium text-[#2E1065] select-all">
                      {myEmail}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#3B0764] bg-purple-50 hover:bg-purple-100/80 rounded-xl transition-colors self-start sm:self-auto"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t.copied[language]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7E22CE]" />
                      <span>{t.copyEmail[language]}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Friendly Discussion / Peer Note Form */}
          <div className="lg:col-span-6">
            <div className="p-8 bg-white rounded-3xl border border-purple-100 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#7E22CE]" />
                <h3 className="text-base font-bold text-[#2E1065]">
                  {t.sendNoteTitle[language]}
                </h3>
              </div>
              <p className="text-xs text-[#6B7280] mb-6">
                {language === 'id'
                  ? 'Tinggalkan sapaan, pesan apresiasi, atau ajakan diskusi akademik seputar proyek digital.'
                  : 'Leave a friendly hello, feedback, or invite for academic discussions regarding digital projects.'}
              </p>

              {messageSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-800">
                    {t.sentSuccess[language]}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {language === 'id'
                      ? 'Anda juga dapat menghubungi via Instagram @alexbl__ untuk respon yang lebih cepat.'
                      : 'You may also reach out via Instagram @alexbl__ for faster replies.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#2E1065] mb-1.5">
                      {t.namePlaceholder[language]}
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder={language === 'id' ? 'Nama atau Institusi Anda' : 'Your Name or Institution'}
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#2E1065] mb-1.5">
                      {t.messagePlaceholder[language]}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'id'
                          ? 'Halo Alexabelle, saya tertarik dengan case study HOSPI AI...'
                          : 'Hi Alexabelle, I found your HOSPI AI case study insightful...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-purple-200 focus:outline-hidden focus:ring-2 focus:ring-[#7E22CE] text-xs text-[#2E1065] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#3B0764] hover:bg-[#581C87] rounded-xl transition-all shadow-xs hover:shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.sendBtn[language]}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
