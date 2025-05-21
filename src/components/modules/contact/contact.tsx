'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Facebook, Linkedin, Github, Instagram } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Message submitted successfully!')
    // Form handling logic here (e.g., emailjs or backend)
  }

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* Contact Info */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="text-muted-foreground text-lg">Feel free to reach out any time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-lg">mhrhabibdev@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-lg">+8801749959977</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-lg">Sunamganj, Sylhet, Bangladesh</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-6">
            <a href="https://www.facebook.com/mhrhabibdev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Facebook className="w-6 h-6 text-foreground hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com/mhrhabib_dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Instagram className="w-6 h-6 text-foreground hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://linkedin.com/md-habibur-rahman" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Linkedin className="w-6 h-6 text-foreground hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://github.com/mhrhabib2004" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Github className="w-6 h-6 text-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input type="text" placeholder="Your Name" required className="py-5 text-lg" />
          <Input type="email" placeholder="Your Email" required className="py-5 text-lg" />
          <Input type="text" placeholder="Subject" required className="py-5 text-lg" />
          <Textarea placeholder="Your Message..." rows={5} required className="text-lg" />
          <Button type="submit" className="w-full py-6 text-lg font-medium">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}