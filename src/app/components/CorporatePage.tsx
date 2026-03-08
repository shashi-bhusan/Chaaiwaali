import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export function CorporatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBib2FyZHJvb20lMjBlbGVnYW50JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI5NjkyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Corporate setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative z-10 text-center text-[var(--ivory)] px-6 max-w-4xl mx-auto">
          <h1 className="serif-heading text-5xl md:text-7xl mb-6">
            Corporate Hospitality, Reimagined
          </h1>
          <p className="text-xl opacity-90">
            Move beyond coffee.
          </p>
        </div>
      </section>

      {/* Why Chai */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
            Why Chai in the Workplace?
          </h2>
          <div className="divider-elegant"></div>
          <div className="space-y-6 text-lg text-[var(--navy)]/80">
            <p>
              Coffee energises.<br />
              <span className="text-[var(--navy)] text-xl">Chai connects.</span>
            </p>
            <p className="leading-relaxed">
              Inclusion, culture, and thoughtful hospitality matter in modern organisations. Chai offers a distinctive, meaningful alternative that signals care, consideration, and cultural awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-chaai px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Executive Boardroom Service */}
            <div className="border-2 border-[var(--navy)]/10 p-8">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full mb-6 flex items-center justify-center">
                <CheckCircle2 className="text-[var(--navy)]" size={24} />
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Executive Boardroom Service
              </h3>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                Discreet, elegant table presentation for senior leadership meetings. Premium teaware, professional service, and minimal disruption.
              </p>
            </div>

            {/* Pop-Up Installations */}
            <div className="border-2 border-[var(--navy)]/10 p-8">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full mb-6 flex items-center justify-center">
                <CheckCircle2 className="text-[var(--navy)]" size={24} />
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Pop-Up Installations
              </h3>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                Conferences, launches, networking events. Fully branded, self-contained stations that create memorable touchpoints.
              </p>
            </div>

            {/* Cultural Experience Days */}
            <div className="border-2 border-[var(--navy)]/10 p-8">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full mb-6 flex items-center justify-center">
                <CheckCircle2 className="text-[var(--navy)]" size={24} />
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Cultural Experience Days
              </h3>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                Diversity and inclusion activations. Educational, engaging, and authentic experiences that foster understanding and connection.
              </p>
            </div>

            {/* Seasonal Features */}
            <div className="border-2 border-[var(--navy)]/10 p-8">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full mb-6 flex items-center justify-center">
                <CheckCircle2 className="text-[var(--navy)]" size={24} />
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Seasonal Features
              </h3>
              <p className="text-[var(--navy)]/70 leading-relaxed">
                Diwali celebrations, winter programmes, client appreciation events. Thoughtfully timed offerings that mark cultural moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-4xl mx-auto px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Structured Service Training</h4>
                <p className="text-[var(--navy)]/70">
                  Our team undergoes comprehensive hospitality training to ensure consistent, professional service.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Premium Equipment & Styling</h4>
                <p className="text-[var(--navy)]/70">
                  Brass teaware, linen textiles, and curated presentation elements that elevate every interaction.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Brand-Consistent Presentation</h4>
                <p className="text-[var(--navy)]/70">
                  Every element reflects our refined aesthetic, creating a cohesive experience that aligns with your brand values.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Scalable Event Operations</h4>
                <p className="text-[var(--navy)]/70">
                  From intimate boardrooms to large conferences, we maintain quality and attention to detail at any scale.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Full Insurance & Compliance</h4>
                <p className="text-[var(--navy)]/70">
                  Comprehensive liability coverage and food safety certifications for peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-[var(--gold)] text-2xl mr-4">•</span>
              <div>
                <h4 className="text-lg mb-2 text-[var(--navy)]">Cultural Authenticity</h4>
                <p className="text-[var(--navy)]/70">
                  Rooted in genuine heritage, presented with global sophistication—never performative or stereotypical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--navy)] text-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6">
            Ready to Elevate Your Workplace Hospitality?
          </h2>
          <div className="divider-elegant bg-[var(--gold)]"></div>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Let's discuss how Chaaiwaali can bring warmth, culture, and refinement to your corporate environment.
          </p>
          <button className="btn-primary bg-[var(--ivory)] text-[var(--navy)] border-[var(--ivory)] hover:bg-transparent hover:text-[var(--ivory)]">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
