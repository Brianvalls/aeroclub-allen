import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import ServicesSection from "@/components/services-section"
import NewsSection from "@/components/news-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <NewsSection />
      <AboutUs />
      <FAQSection />
    </>
  )
}

