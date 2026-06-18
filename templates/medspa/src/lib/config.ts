import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Couture Med Spa",
    tagline: "Experience Luxury, Reveal Your Radiance",
    phone: "(407) 555-1234",
    phoneHref: "tel:+14075551234",
    email: "info@couturemedspa.com",
    address: "123 Main St, Kissimmee, FL 34741",
    city: "Kissimmee",
    serviceAreas: ["Kissimmee, FL", "Winter Park, FL", "Ocoee, FL", "Oviedo, FL", "Lake Mary, FL", "Nashua, NH", "Williamsburg, VA"],
    license: "FL Medical License #12345",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Dysport", desc: "Smooth away wrinkles and fine lines for a youthful, refreshed appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers", desc: "Restore volume, enhance contours, and achieve a naturally beautiful look.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with our advanced laser hair removal treatments.", urgent: false },
    { icon: "star", title: "Hydrafacial", desc: "Deeply cleanse, extract, and hydrate your skin for an instant glow.", urgent: false },
    { icon: "thermometer", title: "Emsculpt", desc: "Build muscle and sculpt your body non-invasively with cutting-edge technology.", urgent: false },
    { icon: "droplets", title: "Nutrition & Weight Loss", desc: "Personalized plans to help you achieve your health and wellness goals.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Winter Park, FL", stars: 5, text: "I had my first Hydrafacial at Couture Med Spa and it was an amazing experience! My skin felt incredibly clean and looked so radiant afterwards. The esthetician was so knowledgeable and made me feel completely comfortable. I've already booked my next appointment!" },
    { name: "Mark T.", location: "Ocoee, FL", stars: 5, text: "The team at Couture Med Spa is fantastic. I came in for Botox and was really impressed with the results. Dr. Smith took the time to understand exactly what I wanted and delivered a natural, refreshed look. Highly recommend their professional and friendly service." },
    { name: "Jessica R.", location: "Kissimmee, FL", stars: 5, text: "After struggling with stubborn fat, I decided to try Emsculpt. The staff explained everything clearly, and the sessions were comfortable. I've seen a noticeable improvement in my core strength and definition in just a few weeks. So happy with my decision!" }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Free Visia Skin Analysis", "Premium Med Spa Services", "Personalized Treatment Plans", "Advanced Technology"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Professionals", desc: "Our team consists of highly trained and certified medical professionals dedicated to your care." },
    { icon: "sparkles", title: "Luxury Experience", desc: "Indulge in a serene and upscale environment designed for your ultimate comfort and relaxation." },
    { icon: "shield-check", title: "Safe & Effective", desc: "We use only FDA-approved products and state-of-the-art technology for optimal results and safety." },
    { icon: "heart", title: "Personalized Care", desc: "Every treatment plan is tailored to your unique needs and aesthetic goals for natural-looking results." },
    { icon: "star", title: "Cutting-Edge Technology", desc: "Access the latest advancements in medical aesthetics for superior outcomes and innovative treatments." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Your beauty and satisfaction are our top priorities, ensuring a positive and rewarding experience." }
  ],

  formServiceOptions: ["Botox & Dysport", "Sculptra", "Kybella", "Lip Filler", "Dermal Fillers", "SkinVive", "NAD+", "Laser Hair Removal", "Laser Tattoo Removal", "Fractional Laser", "Leg Vein Removal", "IPL Photorejuvenation", "Emsculpt", "Vanquish Me", "Cellulite Treatment", "Red Light Therapy", "Couture Facials", "SkinPen Microneedling", "Hydrafacial", "Facial Products", "Cryo-Facial", "Nutrition & Weight Loss", "Weight Loss Shots", "Visia Skin Analysis"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!