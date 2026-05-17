import { Award, Target, Eye, Users, Globe, Shield, Star, CheckCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const whyUs = [
  { icon: Award, title: 'Legacy of Trust', desc: 'With 25 years of industry expertise, we are synonymous with reliability and quality.' },
  { icon: Globe, title: 'Comprehensive Services', desc: 'From planning to execution, we cover every aspect of your travel under one roof.' },
  { icon: Globe, title: 'Global Reach', desc: 'Our worldwide network ensures world-class experiences tailored to your preferences.' },
  { icon: Users, title: 'Customer-Centric', desc: 'Your satisfaction is our priority. Our dedicated team assists you at every step.' },
  { icon: Shield, title: 'ISO 9001:2015 Certified', desc: 'Internationally recognized quality management — delivering excellence in every service.' },
  { icon: Star, title: 'Best Price Guarantee', desc: 'Competitive pricing with exclusive deals ensuring you always get the best value.' },
];


const clientNames = [
  'Reskom', 'Kireeti Soft Technologies', 'Ananth Technologies', 'HuSys',
  'Andeui', 'Bitsilica', 'Evgateway', 'Kalyan Digitals',
  'Vignan Institute', 'Sparsh', 'TMSR Infra', 'Silver Oaks',
  'Leadspace', 'eSoft Consulting', 'Kennedy High School', 'Medwrite',
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">About Us</h1>
          <p className="text-neutral-200 text-lg">Your trusted travel partner since 2004</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">About Venkitravel.com</span>
          <h2 className="font-heading text-3xl md:text-4xl font-700 text-primary-900 mt-2 mb-4">
            Welcome to Venkitravel.com
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Welcome to <strong>Venkitravel.com</strong>, your trusted partner in travel for over 25 years. With a legacy of delivering exceptional travel experiences, we are proud to stand as a comprehensive travel solutions provider that caters to every traveler's dream.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Established in 2004 with a vision to redefine travel services, Venkitravel.com has grown to become a trusted leader in the travel industry, serving countless happy customers across the globe.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Whether you're planning a family vacation, a romantic getaway, or a business trip, Venkitravel.com ensures seamless, stress-free, and unforgettable journeys.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <CheckCircle size={16} className="text-secondary-500" /> ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <CheckCircle size={16} className="text-secondary-500" /> IATA Accredited
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <CheckCircle size={16} className="text-secondary-500" /> 25+ Years Experience
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Venkitravel"
            className="rounded-2xl shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center">
              <Award size={24} className="text-secondary-400" />
            </div>
            <div>
              <div className="font-heading font-700 text-primary-900 text-lg">ISO Certified</div>
              <div className="text-neutral-500 text-xs">9001:2015 Quality Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Target size={22} className="text-primary-900" />
              </div>
              <h3 className="font-heading font-700 text-2xl text-primary-900">Our Mission</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              To provide exceptional, personalized, and seamless travel services that transform journeys into unforgettable experiences. We are committed to fostering trust, innovation, and excellence while promoting sustainable and ethical travel practices.
            </p>
          </div>
          <div className="bg-primary-900 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center">
                <Eye size={22} className="text-secondary-400" />
              </div>
              <h3 className="font-heading font-700 text-2xl text-white">Our Vision</h3>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              To be a globally recognized leader in the travel industry, setting new standards in customer satisfaction, innovation, and sustainable tourism. We strive to connect people, cultures, and destinations, creating meaningful travel experiences that inspire exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary-900 to-secondary-700 rounded-3xl p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="./Founder_Image.png"
              alt="Raghu Babu"
              className="w-50 h-100  rounded-full"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-secondary-300 text-sm uppercase tracking-wider mb-2">Founder & CEO</p>
            <h2 className="font-heading text-3xl font-700 mb-4">Raghu Babu</h2>
            <p className="text-neutral-200 leading-relaxed mb-4">
         At the heart of Venkitravel.com is our founder and CEO, Mr. Babu, a seasoned leader with over 25 years of experience in the travel industry. Born in a small town in Andhra Pradesh, Mr. Babu’s passion for exploring new places and creating memorable travel experiences has been the driving force behind his career. A graduate of Nagarjuna University, his journey began with an esteemed travel organization, where he gained valuable insights into the industry and nurtured a vision to make travel seamless and accessible for everyone.

            </p>
            <p className="text-neutral-200 leading-relaxed mb-4">
          In 2004, Mr. Babu turned his vision into reality by founding Venkitravel.com. Starting with air ticket booking, he gradually expanded the company’s offerings to include a wide range of travel services such as Forex Services, Hotel Booking, Cruise Booking, Tour Packages, Visa Processing, Passport Assistance, Travel Insurance, Transport and Transfers, and Accommodation Services. Today, Venkitravel.com is a trusted name in the travel industry, recognized for its customer-first approach and exceptional service quality
            </p>
            <p className="text-neutral-200 leading-relaxed mb-4">
        Mr. Babu’s leadership has been pivotal in navigating challenges and driving innovation. By embracing digital transformation, forming strategic global partnerships, and fostering a customer-centric culture, he has steered Venkitravel.com toward remarkable growth. The recent expansion into South Africa marks a significant milestone, reflecting the company’s commitment to delivering world-class travel services on a global scale.

            </p>
            <p className="text-neutral-200 leading-relaxed mb-4">
          Under his guidance, Venkitravel.com operates on a foundation of values: trust, integrity, innovation, and excellence. Mr. Babu is equally committed to sustainability, ethical travel practices, and giving back to the community through impactful CSR initiatives. These principles not only define the company’s operations but also resonate with its customers, many of whom choose Venkitravel.com based on trust and strong referrals.
 </p>
              <p className="text-neutral-200 leading-relaxed mb-4">
              At Venkitravel.com, we are proud to be guided by Mr. Babu’s vision and unwavering dedication to redefining travel for a global audience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900">Why Choose Venkitravel.com?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-secondary-500" />
                </div>
                <h3 className="font-heading font-600 text-primary-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Our Clients */}
      <section className="bg-neutral-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-700 text-primary-900">Our Valued Clients</h2>
            <p className="text-neutral-500 mt-2">Trusted by leading organizations across industries</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientNames.map((client) => (
              <div key={client} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
                <p className="text-xs font-medium text-neutral-600">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-primary-900 text-white">
        <h2 className="font-heading text-3xl font-700 mb-3">Experience the Venkitravel Difference</h2>
        <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
          Whether booking last-minute deals, finding group travel discounts, or personalizing your dream vacation — Venkitravel.com is here to make it happen.
        </p>
        <button onClick={() => onNavigate('contact')} className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
