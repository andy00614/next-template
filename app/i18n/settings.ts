export const fallbackLng = 'en' as const;
export const languages = [fallbackLng, 'zh'] as const;


export type Language = typeof languages[number];  // 'en' | 'zh'
export const defaultNamespace = 'translation'

export function getOptions(lng: Language = fallbackLng, ns = defaultNamespace) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns
  }
}
