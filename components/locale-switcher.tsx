'use client'
import { Language, languages } from "@/app/i18n/settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next-intl/client';

const LocaleSwitcher = () => {
  const locale = useLocale()
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams()


  const handleOnValueChange = (e: Language) => {
    setCurrentLocale(e)
    startTransition(() => {
      router.replace('/' + e + pathname + '?' + searchParams.toString())
    })
  }
  return <>
    <Select value={currentLocale} onValueChange={handleOnValueChange} disabled={isPending}>
      <SelectTrigger>
        <SelectValue placeholder="Locale" />
      </SelectTrigger>
      <SelectContent>
        {
          languages.map(item => (<SelectItem key={item} value={item}>{item}</SelectItem>))
        }
      </SelectContent>
    </Select>
  </>
}

export default LocaleSwitcher
