import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="bg-grey-200 py-16 px-4 text-center rounded-none">
      <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
      <form class="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="w-full p-2 border rounded bg-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="w-full p-2 border rounded bg-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          class="w-full p-2 border rounded bg-white"
        ></textarea>
        <button
          type="submit"
          class="bg-red-600 hover:bg-red-900 text-white font-bold py-3 px-6 border border-gray-600 rounded-lg"
        >
          Send Messages
        </button>
      </form>
    </section>
  )
}

export default Contact
