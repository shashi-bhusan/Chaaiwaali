import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566830221452-09d8c4437448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJhc3MlMjB0ZWFwb3QlMjBsaW5lbiUyMGNsb3RoJTIwZmxvcmFsc3xlbnwxfHx8fDE3NzI5NjkyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elegant brass teapot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80"></div>
        </div>

        <div className="relative z-10 text-center text-[var(--ivory)] px-6 max-w-4xl mx-auto">
          <h1 className="serif-heading text-5xl md:text-7xl mb-6">
            The Art of Chai. Refined.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            A modern hospitality ritual rooted in Indian heritage and elevated with British elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/corporate" className="btn-primary">
              Book a Corporate Experience
            </Link>
            <Link to="/story" className="btn-secondary bg-transparent border-[var(--ivory)] text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--navy)]">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto text-center">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
            Ritual, Not Refreshment
          </h2>
          <div className="divider-elegant"></div>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-4">
            Chai is not a beverage.
          </p>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-4">
            It is pause. Conversation. Ceremony.
          </p>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80">
            At Chaaiwaali, we honour traditional Indian chai craft while presenting it with contemporary global refinement. Each pour is deliberate. Each spice is balanced. Each setting is considered.
          </p>
          <p className="text-xl leading-relaxed text-[var(--navy)] mt-6 italic">
            This is hospitality, elevated.
          </p>
        </div>
      </section>

      {/* Signature Collection */}
      <section className="section-padding bg-white">
        <div className="container-chaai px-6">
          <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12 text-[var(--navy)]">
            Signature Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Classic Masala */}
            <div className="text-center group">
              <div className="aspect-square mb-6 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689163350991-19b40c6bd31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwc3BpY2VzJTIwd2FybSUyMGdsb3d8ZW58MXx8fHwxNzcyOTY5Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Classic Masala Chai"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="serif-heading text-2xl mb-3 text-[var(--navy)]">
                The Classic Masala
              </h3>
              <p className="text-[var(--navy)]/70 italic">
                Bold, warming, familiar. The foundation.
              </p>
            </div>

            {/* Kashmiri Pink */}
            <div className="text-center group">
              <div className="aspect-square mb-6 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1683990436724-d82e4a3b338c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwa2FzaG1pcmklMjB0ZWElMjBkZWxpY2F0ZSUyMGN1cHxlbnwxfHx8fDE3NzI5NjkyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kashmiri Pink Chai"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="serif-heading text-2xl mb-3 text-[var(--navy)]">
                Kashmiri Pink Chai
              </h3>
              <p className="text-[var(--navy)]/70 italic">
                Delicate, aromatic, distinctive. A visual statement.
              </p>
            </div>

            {/* Saffron & Cardamom */}
            <div className="text-center group">
              <div className="aspect-square mb-6 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1633881614907-8587c9b93c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZmcm9uJTIwY2FyZGFtb20lMjBsdXh1cmlvdXMlMjBzcGljZXN8ZW58MXx8fHwxNzcyOTY5Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Saffron & Cardamom Reserve"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="serif-heading text-2xl mb-3 text-[var(--navy)]">
                Saffron & Cardamom Reserve
              </h3>
              <p className="text-[var(--navy)]/70 italic">
                Layered, luxurious, quietly powerful.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-secondary">
              View Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Hospitality */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
                Move Beyond Coffee
              </h2>
              <div className="divider-elegant mx-0"></div>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-6">
                Chaaiwaali brings a considered alternative to corporate spaces.
              </p>
              <ul className="space-y-3 mb-8 text-[var(--navy)]/80">
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-2">•</span>
                  Executive boardroom service
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-2">•</span>
                  Conference and launch installations
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-2">•</span>
                  Cultural engagement events
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--gold)] mr-2">•</span>
                  Staff wellbeing activations
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-[var(--navy)]/70 mb-8">
                Our team operates with professional discretion, insurance compliance, and premium presentation standards.
              </p>
              <Link to="/corporate" className="btn-primary">
                Request a Proposal
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBib2FyZHJvb20lMjBlbGVnYW50JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI5NjkyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate boardroom"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="section-padding bg-white">
        <div className="container-chaai px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767986012154-db9a321c8832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc3Mjk2OTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury celebration"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
                Ceremony for Modern Gatherings
              </h2>
              <div className="divider-elegant mx-0"></div>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-4">
                Weddings. Celebrations. Cultural evenings.
              </p>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-8">
                We design bespoke chai experiences that feel intentional, not performative.
              </p>
              <button className="btn-primary">
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Ambition */}
      <section className="section-padding bg-[var(--navy)] text-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto text-center px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6">
            A Ritual Designed to Travel
          </h2>
          <div className="divider-elegant bg-[var(--gold)]"></div>
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            From London to Dubai. From corporate towers to private estates.
          </p>
          <p className="text-lg leading-relaxed opacity-90 mb-8">
            Chaaiwaali is built as a scalable hospitality brand with structured training, brand standards, and operational systems that protect quality across borders.
          </p>
          <Link to="/franchise" className="btn-secondary bg-transparent border-[var(--ivory)] text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--navy)]">
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
