import Link from 'next/link'
import { Language } from '../i18n/settings'
import { Button } from '@/components/ui/button';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Terminal } from 'lucide-react';

interface PageProps {
  params: {
    lng: Language
  }
}

export default async function Page({ params: { lng } }: PageProps) {
  const messages = (await import(`../../messages/${lng}.json`)).default;
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{messages.Index.title}</AlertTitle>
        <AlertDescription>
          {messages.Index.content}
        </AlertDescription>
      </Alert>

      <Link href={`/${lng}/second-page`}>
        <Button variant="link">{messages.Index['to-second-page']}</Button>
      </Link>
    </>
  )
}
