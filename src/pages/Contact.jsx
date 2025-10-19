import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Input, Textarea } from '../components/ui/input'

export default function Contact(){

const form = useRef()
const [sent, setSent] = useState(false)
const [loading, setLoading] = useState(false)


const sendEmail = (e) => {
e.preventDefault()
setLoading(true)


// configure environment variables in .env
// VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


if (!serviceId || !templateId || !publicKey) {
alert('Please set EmailJS env variables in .env file')
setLoading(false)
return
}
emailjs.sendForm(serviceId, templateId, form.current, publicKey)
.then((result) => {
console.log(result.text)
setSent(true)
setLoading(false)
form.current.reset()
}, (error) => {
console.log(error.text)
alert('Failed to send — check console')
setLoading(false)
})
}



return (
<div className="container mx-auto px-4 py-12">
<h1 className="text-3xl font-bold">Contact Us</h1>
<p className="mt-2 text-slate-600 dark:text-slate-300">Reach out for wholesale, partnerships, or general enquiries.</p>


<div className="mt-6 grid md:grid-cols-2 gap-6">
<form ref={form} onSubmit={sendEmail} className="p-4 bg-white dark:bg-slate-800 rounded">
<label className="block mb-2">Name</label>
<Input name="from_name" required />


<label className="block mt-4 mb-2">Email</label>
<Input name="reply_to" type="email" required />


<label className="block mt-4 mb-2">Message</label>
<Textarea name="message" required />


<div className="mt-4">
<button type="submit" disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">{loading ? 'Sending...' : 'Send Message'}</button>
</div>


{sent && <div className="mt-3 text-green-600">Thanks — your message has been sent.</div>}
</form>


<div className="p-4 bg-white dark:bg-slate-800 rounded">
<h3 className="font-semibold">Visit Us</h3>
<p className="mt-2 text-slate-600 dark:text-slate-300">Luminex Sparq Company<br/>Chennai, India</p>


<div className="mt-4">
<h4 className="font-semibold">Map</h4>
<div className="mt-2 w-full h-64 bg-gray-100 dark:bg-slate-700 rounded overflow-hidden">
<iframe
title="Luminex Sparq Location"
src="https://www.google.com/maps?q=Chennai&output=embed"
className="w-full h-full border-0"
/>
</div>


<div className="mt-4">
<div>WhatsApp: <a className="text-indigo-600" href={`https://wa.me/91${"7431007424"}`}>+91 74310 07424</a></div>
<div className="mt-1">Address: Chennai, Tamil Nadu, India</div>
</div>
</div>
</div>


</div>
</div>
)






}