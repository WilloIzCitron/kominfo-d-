import { devStarterPack, idnStarterPack, linuxStarterPack, websiteListUSA, gamingEssensials } from './websites'

export const websiteSections = [
  {
    title: 'Indonesia Starterpack',
    description: <p>Situs atau service ini terpopuler dengan orang Indonesia</p>,
    sites: idnStarterPack
  },
  {
    title: 'Essential Developer Toolkit',
    description: <p>Service yang ✨ anak bangsa ✨ mungkin akan pakai saat membuat app</p>,
    sites: devStarterPack
  },
  {
    title: 'Gaming Essensials',
    description: <p>Service yang digunakan untuk gamer casual sampai gamer profesional, dan pula streamer gaming</p>,
    sites: gamingEssensials
  },
  {
    title: 'Top websites USA',
    description: (
      <>
        <p>
          2022 Top websites in the USA. Sumber data website diambil dari{' '}
          <a
            href='https://www.semrush.com/blog/most-visited-websites/'
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
          >
            semrush.com
          </a>
        </p>
        <p>
          <em>Catatan: Ada beberapa website ditiadakan karena tidak berhubungan</em>
        </p>
      </>
    ),
    sites: websiteListUSA
  },
  {
    title: 'Linux Starterpack',
    description: <p>Service yang sering dipakai Linux user 🐧</p>,
    sites: linuxStarterPack
  }
]
