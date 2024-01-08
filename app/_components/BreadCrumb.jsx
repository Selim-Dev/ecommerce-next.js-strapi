import React from 'react'
import Link from 'next/link'
function BreadCrumb({ path }) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex overflow-hidden text-gray-600 border border-gray-200 rounded-lg">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="ms-1.5 text-xs font-medium"> Home </span>
          </Link>
        </li>

        <li className="relative flex items-center">
          <span
            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
          >
          </span>

          <a
            href="#"
            className="flex items-center h-10 text-xs font-medium transition bg-white pe-4 ps-8 hover:text-gray-900"
          >
            {path?.split('/')[1]}
          </a>
        </li>
        <li className="relative flex items-center">
          <span
            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
          >
          </span>

          <a
            href="#"
            className="flex items-center h-10 text-xs font-medium transition bg-white pe-4 ps-8 hover:text-gray-900"
          >
            {path?.split('/')[2]}
          </a>
        </li>
      </ol>
    </nav>
  )
}

export default BreadCrumb