import Link from 'next/link'
import { Language } from '../i18n/settings'
import { useTranslations } from 'next-intl';
import Content from './Content';

interface PageProps {
  params: {
    lng: Language
  }
}

export default async function Page({ params: { lng } }: PageProps) {
  const messages = (await import(`../../messages/${lng}.json`)).default;
  // const t = useTranslations('Index');
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
