
'use client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface PageProps {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: PageProps) {
  const t = useTranslations('Second');
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{t('title')}</AlertTitle>
        <AlertDescription>
          {t('content')}
        </AlertDescription>
      </Alert>
      <Link href={`/${lng}`}>
        <Button variant="link">{t('back')}</Button>
      </Link>
    </>
  )
}
