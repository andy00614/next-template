'use client'
import { useTranslations } from "next-intl";

function Content() {
  const t = useTranslations('Index');

  return <>content: {t('to-second-page')}</>
}

export default Content
