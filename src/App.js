import React from 'react'
import styles from './style'

import { Navbar, Hero, About, Blog, Contact, Portfolio, Testimonials, Mission, Footer } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar */}
      <div className={``}>
        <div className={``}>
          <Navbar />
        </div>
      </div>
      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart} border-t border-lightGrey`}>
        <div className={`${styles.boxWidthSec}`}>
          <Hero />
        </div>
      </div>
      {/* Sections */}
      <div className={`bg-tertiary ${styles.flexStart} flex-col items-center`}>
          <About />
          <Portfolio />
          <Mission />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
      </div>
    </div>
  )
}

export default App
