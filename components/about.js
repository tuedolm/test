import React from "react"
import Image from "next/image"
import profile from "../public/images/profile.jpeg"


const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row  lg:-mx-4 flex flex-col-reverse item-center  ">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hi there :D
                    </h1>
                    <div className=" md:mt-4 text-gray-800 dark:text-white">
                        <p className="text-lg mb-4 ">
                            My name is Tue Do, a Software Engineer Senior at San Jose State University.
                            When I'm not coding I do fencing, reading and photography.
                        </p>
                        <p className="font-bold text-lg">Technical stacks</p>
                        <ul className="list-outside text-left ">
                          <li>
                          <p><b>Web development:</b> NodeJS, React, Flask</p>
                          </li>

                          <li>
                          <p><b>Database:</b> MySQL, MongoDB, Firebase </p>
                          </li>

                          <li>
                          <p><b>Data Analytics:</b> Numpy, Pandas, Matplotlib</p>
                          </li>

                          <li>
                          <p><b>Tools:</b> Git, NPM, Adobe XD, Figma </p>
                          </li>
                        </ul>
                        <br/>
                        <p className="text-lg font-bold"> This website is still under construction. Thank you for visiting and have a great day ! </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={300}
                        height={300}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
