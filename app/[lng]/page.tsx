import Link from 'next/link'
import { Language } from '../i18n/settings'
import Content from './Content';

interface PageProps {
  params: {
    lng: Language
  }
}

export default async function Page({ params: { lng } }: PageProps) {
  const messages = (await import(`../../messages/${lng}.json`)).default;
  return (
    <>
      <h1>{messages.Index.title}</h1>
      <Link href={`/${lng}/second-page`}>
        second page
      </Link>
      <Content />
    </>
  )
}
