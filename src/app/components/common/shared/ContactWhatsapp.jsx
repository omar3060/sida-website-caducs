import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactWhatsapp = () => {
  return (
    <div>
    <Link
      href="https://wa.me/+1(302)837-9280"
      className="fixed bottom-4 left-4  px-2 py-2 md:px-4 md:py-4 rounded-full shadow-lg z-10"
    >
      <Image
        src="/assets/images/Whatsapp.svg"
        width={50}
        height={50}
        alt="WhatsApp"/>
    </Link>
  </div>
  )
}

export default ContactWhatsapp;


