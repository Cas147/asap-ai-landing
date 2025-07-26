import Navigation from '../../components/Navigation'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black no-scroll-x">
      <Navigation />
      <div className="pt-16 md:pt-0">
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
} 