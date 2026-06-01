import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Couture Med Spa",
    tagline: "Rejuvenate Your Beauty Today",
    phone: "(407) 555-1234",
    phoneHref: "tel:+14075551234",
    email: "info@couturemedspa.com",
    address: "123 Luxury Lane, Winter Park, FL 32789",
    city: "Winter Park",
    serviceAreas: ["Winter Park, FL", "Ocoee, FL", "Oviedo, FL", "Lake Mary, FL", "Kissimmee, FL", "Nashua, NH", "Williamsburg, VA"],
    license: "FL-MEDSPA-12345",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Dysport", desc: "Smooth away wrinkles and fine lines for a youthful glow.", urgent: false },
    { icon: "heart", title: "Weight Loss Program", desc: "Personalized plans and support to achieve your health goals.", urgent: false },
    { icon: "droplets", title: "Dermal Fillers", desc: "Restore volume and contour for a naturally refreshed appearance.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Achieve permanent hair reduction with advanced laser technology.", urgent: false },
    { icon: "star", title: "Hydrafacial", desc: "Deeply cleanse, extract, and hydrate for glowing, healthy skin.", urgent: false },
    { icon: "shield-check", title: "Memberships", desc: "Exclusive access to treatments and savings with our membership options.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Winter Park, FL", stars: 5, text: "I had a Hydrafacial and Botox treatment at Couture Med Spa last month, and I'm absolutely thrilled with the results! My skin has never looked better, and the staff was incredibly professional and made me feel so comfortable. It was worth every penny for such a luxurious experience." },
    { name: "Mark T.", location: "Ocoee, FL", stars: 5, text: "The weight loss program at Couture Med Spa has been life-changing for me. In just three months, I've lost 20 pounds and feel more energetic than ever. The team provided amazing support and guidance, making it easy to stick to the plan. Highly recommend their personalized approach!" },
    { name: "Jessica R.", location: "Lake Mary, FL", stars: 5, text: "My lip filler experience at Couture Med Spa was fantastic. The nurse was so skilled and listened to exactly what I wanted, resulting in a natural yet noticeable enhancement. The clinic is beautiful and everyone is so friendly. I'll definitely be back for more treatments!" }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Memberships Available", "Free Visia Skin Analysis", "Referral Rewards Program", "Advanced Laser Technology"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "dollar-sign", title: "Membership Savings", desc: "Enjoy exclusive discounts and benefits with our flexible membership plans." },
    { icon: "sparkles", title: "Luxury Experience", desc: "Indulge in a serene and upscale environment designed for your comfort." },
    { icon: "shield-check", title: "Personalized Plans", desc: "We tailor every treatment to your unique needs and aesthetic goals." },
    { icon: "star", title: "Cutting-Edge Technology", desc: "Utilizing the latest advancements in medical aesthetics for superior results." },
    { icon: "heart", title: "Complimentary Consults", desc: "Receive a free Visia Skin Analysis to start your beauty journey." }
  ],

  formServiceOptions: ["Memberships", "Weight Loss Program", "Botox & Dysport", "Sculptra", "Kybella", "Lip Filler", "Dermal Fillers", "SkinVive", "NAD+", "Laser Hair Removal", "Laser Tattoo Removal", "Fractional Laser", "Leg Vein Removal", "IPL Photorejuvenation", "Emsculpt", "Vanquish Me", "Cellulite Treatment", "Red Light Therapy", "Couture Facials", "SkinPen Microneedling", "Hydrafacial", "Facial Products", "Cryo-Facial", "Nutrition & Weight Loss", "Weight Loss Shots", "Visia Skin Analysis"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!