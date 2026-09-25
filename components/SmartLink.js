import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// 过滤 <a> 标签不能识别的 props
const filterDOMProps = props => {
  const {
    passHref,
    legacyBehavior,
    placeholderSrc,
    fallbackSrc,
    // target 必须透传给 <a>，否则站内链接的“新标签页打开”会被吃掉
    target,
    ...rest
  } = props
  return target === undefined ? rest : { ...rest, target }
}

// 过滤不应该透传给 next/link 的非链接属性
const filterLinkProps = props => {
  const {
    placeholderSrc,
    fallbackSrc,
    src,
    alt,
    width,
    height,
    loading,
    decoding,
    onLoad,
    onError,
    ...rest
  } = props
  return rest
}

const SmartLink = ({ href, children, ...rest }) => {
  const LINK = siteConfig('LINK')

  // 获取 URL 字符串用于判断是否是外链
  let urlString = ''

  if (typeof href === 'string') {
    urlString = href
  } else if (
    typeof href === 'object' &&
    href !== null &&
    typeof href.pathname === 'string'
  ) {
    urlString = href.pathname
  }

  const isExternal = urlString.startsWith('http') && !urlString.startsWith(LINK)

  const getPersistedQuery = () => {
    if (typeof window === 'undefined') return {}
    const queryString = window.location.search?.slice(1) || ''
    const params = new URLSearchParams(queryString)
    const preserved = {}
    for (const [key, value] of params.entries()) {
      if (value !== '') preserved[key] = value
    }
    return preserved
  }

  const mergePreservedQueryForStringHref = value => {
    if (typeof value !== 'string' || !value || value.startsWith('#')) return value
    const preservedQuery = getPersistedQuery()
    if (Object.keys(preservedQuery).length === 0) return value

    const isAbsolute = value.startsWith('http://') || value.startsWith('https://')
    const url = new URL(value, LINK)
    Object.entries(preservedQuery).forEach(([key, paramValue]) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, paramValue)
      }
    })

    if (isAbsolute) return url.toString()
    return `${url.pathname}${url.search}${url.hash}`
  }

  const mergePreservedQueryForObjectHref = value => {
    if (!value || typeof value !== 'object') return value
    const preservedQuery = getPersistedQuery()
    if (Object.keys(preservedQuery).length === 0) return value
    return {
      ...value,
      query: {
        ...preservedQuery,
        ...(value.query || {})
      }
    }
  }

  if (isExternal) {
    // 对于外部链接，必须是 string 类型
    const externalUrl =
      typeof href === 'string' ? href : new URL(href.pathname, LINK).toString()

    return (
      <a
        href={externalUrl}
        target='_blank'
        rel='noopener noreferrer'
        {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  // 内部链接（可为对象形式）
  const mergedHref =
    typeof href === 'string'
      ? mergePreservedQueryForStringHref(href)
      : mergePreservedQueryForObjectHref(href)

  // 站内链接是否统一新标签页打开（本站自定义：禁止覆盖当前标签页）
  // 开关：conf/post.config.js 的 OPEN_LINK_IN_NEW_TAB，或环境变量 NEXT_PUBLIC_OPEN_LINK_IN_NEW_TAB
  const openInNewTab = siteConfig('OPEN_LINK_IN_NEW_TAB', false, null)
  const newTabProps = openInNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link href={mergedHref} {...newTabProps} {...filterLinkProps(rest)}>
      {children}
    </Link>
  )
}

export default SmartLink

