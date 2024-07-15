import React from 'react'

const Home = () => {
  return (
    <section
    class="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-grey-200 rounded-none"
    id="home"
  >
    <div class="md:w-1/2">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      PCPS College
      </h1>
      <p class="text-gray-700 mb-1 text-justify mr-2">
      PCPS College is a multilingual, diverse, multicultural institution of higher
      education that ensures intellectual research, and informed teaching. PCPS College
      offers international(UK) undergraduate and graduate programs in various fields of study.
      </p>
      <br />
      <a
        href="#"
        class="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-6 border border-gray-600 rounded"
      >
        Learn More
      </a>
    </div>
    <div class="md:w-1/2 md:mt-0 py-3">
      <img
        src="src\assets\bibek.jpg"
        alt="Bibek"
        class="rounded-lg shadow-lg w-full"
      />
    </div>
  </section>
  )
}

export default Home
