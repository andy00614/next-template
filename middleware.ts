// import { NextRequest, NextResponse } from 'next/server'
// import acceptLanguage from 'accept-language'
// import { fallbackLng, languages } from './app/i18n/settings'

// /**
// `acceptLanguage.languages(languages)`方法用于设定`accept-language`库应该考虑的语言。如果你提供的`languages`数组包含`['en', 'zh']`，那么只有英文和中文会被视为有效的语言。

// `accept-language`库主要用于解析HTTP的`Accept-Language`头部，这个头部是由浏览器发送的，并表示用户的语言偏好。

// 如果`Accept-Language`头部包含一个`accept-language`库没有被设置为接受的语言，那么这个库就会忽略这个语言，继续查找下一个被接受的语言。

// 比如说，如果你设定了`acceptLanguage.languages(['en', 'zh'])`，而用户的`Accept-Language`头部是`'fr, en;q=0.8, zh;q=0.6'`（这表示用户偏好法语，其次是英语，最后是中文），`accept-language`库就会忽略法语，因为它不在被接受的语言列表中，然后选取英语，因为英语是下一个最高优先级的语言。

// 如果`Accept-Language`头部中的所有语言都不在`accept-language`库的接受列表中，那么这个库将无法确定用户的语言偏好。在这种情况下，通常会回退到一个默认的语言，比如在你的代码中，这个默认语言是`fallbackLng`。
//  */
// acceptLanguage.languages([...languages])

// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

// const cookieName = 'i18next'

// export function middleware(req: NextRequest) {
//   let lng
//   // cookie -> accpet-header -> url -> refer
//   if (req.cookies.has(cookieName)) {
//     lng = req.cookies.get(cookieName)?.value
//   }
//   if (!lng) {
//     lng = acceptLanguage.get(req.headers.get('Accept-Language') || '')
//   }
//   if (!lng) {
//     lng = fallbackLng
//   }

//   // redirect
//   if (
//     !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
//     !req.nextUrl.pathname.startsWith('/_next') &&
//     !req.nextUrl.pathname.startsWith('/api')
//   ) {
//     return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
//   }

//   // 整体来说，这段代码的目的是基于用户访问的上一个页面的URL的路径部分，来推测用户的语言偏好，并把这个偏好存储在cookie中，以便在后续的请求中使用。
//   if (req.headers.has('referer')) {
//     const refererUrl = new URL(req.headers.get('referer') || '')
//     const lngInRefer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
//     const response = NextResponse.next();
//     if (lngInRefer) {
//       response.headers.append('set-cookie', `${cookieName}=${lngInRefer};path=/;`)
//     }
//     return response
//   }
//   return NextResponse.next()
// }

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
