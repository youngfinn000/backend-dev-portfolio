'use client'

import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I&apos;m{' '}
        <TypeAnimation
          sequence={[
            'laureano martin',
            1000,
            'a Backend Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-xl md:text-2xl mb-8">Crafting robust and scalable backend solutions</p>
    </section>
  )
}

export default Hero

