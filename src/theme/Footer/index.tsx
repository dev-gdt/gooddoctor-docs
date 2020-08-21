import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import useMetadataContext from "@theme/useMetadataContext"

import sectionStyles from "../../css/section.module.css"
import footerStyles from "./styles.module.css"
import { useLocation } from "react-router-dom"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href || "", { forcePrependBaseUrl: false })
  const linkTo = useBaseUrl(to || "")
  console.log(linkHref, linkTo)
  return (
    <a
      className={footerStyles.footer__link}
      {...(href
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
          }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const context = useDocusaurusContext()
  const metadataContext = useMetadataContext()
  const { siteConfig } = context
  const { themeConfig } = siteConfig
  const { footer } = themeConfig
  const { copyright, links } = footer

  const loc = useLocation()
  console.log(loc.pathname)

  if (loc.pathname.indexOf("/api") !== -1) {
    return null
  }

  return (
    <footer
      className={clsx(footerStyles.footer, sectionStyles.section, {
        [footerStyles["footer--alt"]]: metadataContext.altFooter === true,
      })}
    >
      <div
        className={clsx(
          footerStyles.footer__inner,
          sectionStyles["section--inner"],
        )}
      >
        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--left"],
          )}
        >
          <img
            alt="QuestDB logo"
            className={footerStyles.footer__logo}
            src="/img/logo.svg"
            title="QuestDB - Fastest open source database for time series and analytics"
          />
          <p className={footerStyles.footer__tagline}>{siteConfig.tagline}</p>
        </div>

        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={footerStyles.footer__links}>
              <ul className={footerStyles.footer__items}>
                {linkItem.title && (
                  <li className={footerStyles.footer__title}>
                    {linkItem.title}
                  </li>
                )}

                {linkItem.items &&
                  linkItem.items.map((item) => (
                    <li
                      className={footerStyles.footer__item}
                      key={item.href || item.to}
                    >
                      <FooterLink {...item} />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={footerStyles.footer__bottom}>
        <p
          className={footerStyles.footer__copyright}
          // Developer provided the HTML, so assume it's safe.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: copyright,
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
