'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Facebook, Linkedin, Github, Instagram } from 'lucide-react'
import { toast } from 'sonner'
import { CreateContact, IContactPayload } from '@/services/contact'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

const onSubmit = async (formData: IContactPayload) => {
  const res = await CreateContact(formData);
  if (res.success) {
    toast.success(res.message);
    reset();
  } else {
    toast.error(res.message);
  }
};


  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12 space-y-8">
      {/* Contact Info */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold items-center text-center mb-12 relative inline-block after:absolute after:w-20 after:h-1 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-2">Get in Touch</h2>
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
              <Facebook className="w-6 h-6 text-foreground hover:text-blue-500" />
            </a>
            <a href="https://instagram.com/mhrhabib_dev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Instagram className="w-6 h-6 text-foreground hover:text-pink-600" />
            </a>
            <a href="https://linkedin.com/md-habibur-rahman" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Linkedin className="w-6 h-6 text-foreground hover:text-blue-700" />
            </a>
            <a href="https://github.com/mhrhabib2004" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Github className="w-6 h-6 text-foreground hover:text-gray-900 dark:hover:text-gray-100" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input {...register('name', { required: 'Name is required' })} placeholder="Your Name" className="py-5 text-lg" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Input type="email" {...register('email', { required: 'Email is required' })} placeholder="Your Email" className="py-5 text-lg" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <Input {...register('subject', { required: 'Subject is required' })} placeholder="Subject" className="py-5 text-lg" />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>
          <div>
            <Textarea {...register('message', { required: 'Message is required' })} placeholder="Your Message..." rows={5} className="text-lg" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full py-6 text-lg font-medium" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
