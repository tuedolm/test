import Link from "next/link"
import React from "react"
import ThemeSwitch from "../components/themeswitch"

const Nav = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 uppercase dark:text-white"}
                    >
                        Tue Do
                    </a>
                </Link>

                <div class="flex items-center">
                        <div class="md:flex lg:flex space-x-3 font-medium text-gray-900 dark:text-white">

                          <Link href="/project">
                              <a
                                  className={"font-medium tracking-wider transition-colors text-gray-900 dark:text-white"}
                              >
                                  Projects
                              </a>
                          </Link>



                          <Link href="https://docs.google.com/document/d/1gMY3_4geMnX_E5xHdKTYPSZ9eACKOjOgrhBx8NvatGo/edit?usp=sharing">
                              <a
                                  className={"font-medium tracking-wider transition-colors text-gray-800 dark:text-white"}
                                  target="_blank"
                              >
                                  Resume
                              </a>
                          </Link>

                        </div>

                        <ThemeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Nav;
