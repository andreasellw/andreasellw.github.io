import React from 'react'
import { PropTypes } from 'prop-types'
// import ExternalLinkIcon from 'assets/svg/external-link.svg';

export const Project = ({ css, title, date, stack, url, list }) => {
  return (
    <section className={css}>
      <header>
        <h3 className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white font-sans font-bold">
          <a className="inline-flex" href={url}>
            <span>{title} ↖</span>
          </a>
        </h3>
        <p className="font-sans text-black dark:text-white">
          {date} | {stack}
        </p>
      </header>
      <ul>
        {list.map((text, i) => (
          <li key={i} className="mt-1 font-sans text-gray-800 dark:text-gray-200 leading-normal">
            <span className="absolute -ml-3 sm:-ml-3 select-none font-bold transform -translate-y-px">
              ›
            </span>
            {text}
          </li>
        ))}
      </ul>
    </section>
  )
}

Project.propTypes = {
  css: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  stack: PropTypes.string,
  url: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
}
