import { ImageWithFallback } from './figma/ImageWithFallback';
import { Globe2, TrendingUp, Users, Award } from 'lucide-react';

export function FranchisePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1546913989-305399a57db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGFpJTIwdGVhJTIwY2VyZW1vbnklMjB3YXJtfGVufDF8fHx8MTc3Mjk2OTI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chai service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative z-10 text-center text-[var(--ivory)] px-6 max-w-4xl mx-auto">
          <h1 className="serif-heading text-5xl md:text-7xl mb-6">
            Partner With Chaaiwaali
          </h1>
          <p className="text-xl opacity-90 italic">
            A selective opportunity.
          </p>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
            We Are Not a Café Chain
          </h2>
          <div className="divider-elegant"></div>
          <p className="text-xl leading-relaxed text-[var(--navy)]">
            We are a hospitality ritual brand.
          </p>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80 mt-6">
            Chaaiwaali operates on a refined event-based and corporate hospitality model. We bring ceremony to modern spaces without compromising quality or authenticity.
          </p>
        </div>
      </section>

      {/* The Model */}
      <section className="section-padding bg-white">
        <div className="container-chaai px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            The Model
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Low-footprint */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="serif-heading text-xl mb-3 text-[var(--navy)]">
                Low-Footprint
              </h3>
              <p className="text-[var(--navy)]/70 text-sm">
                No traditional storefront required. Minimal overhead, maximum flexibility.
              </p>
            </div>

            {/* High-margin */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="serif-heading text-xl mb-3 text-[var(--navy)]">
                High-Margin Experiential
              </h3>
              <p className="text-[var(--navy)]/70 text-sm">
                Premium pricing for premium service. Event-based revenue model.
              </p>
            </div>

            {/* Corporate-first */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="serif-heading text-xl mb-3 text-[var(--navy)]">
                Corporate-First
              </h3>
              <p className="text-[var(--navy)]/70 text-sm">
                Target B2B clients for recurring, high-value contracts.
              </p>
            </div>

            {/* International */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--gold)]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe2 className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="serif-heading text-xl mb-3 text-[var(--navy)]">
                International Scalability
              </h3>
              <p className="text-[var(--navy)]/70 text-sm">
                Proven systems ready to travel across borders and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Partners Receive */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-5xl mx-auto px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            What Partners Receive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Full Brand Licensing</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Complete access to Chaaiwaali brand identity, visual systems, and positioning guidelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Training & Service Manuals</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Comprehensive onboarding, hospitality protocols, and ongoing support programmes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Recipe Standardisation</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Exact blend specifications, preparation methods, and quality control measures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Event Execution Playbooks</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Proven frameworks for corporate events, private gatherings, and seasonal activations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Supplier Guidance</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Vetted supplier networks for spices, equipment, and presentation materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-[var(--navy)]/10">
              <div className="flex items-start mb-4">
                <span className="text-[var(--gold)] text-2xl mr-3">•</span>
                <div>
                  <h4 className="text-lg mb-2 text-[var(--navy)]">Marketing Toolkit</h4>
                  <p className="text-[var(--navy)]/70 text-sm">
                    Templates, photography, copy frameworks, and digital assets ready to deploy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="section-padding bg-white">
        <div className="container-chaai max-w-4xl mx-auto px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            Ideal Partner Profile
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[var(--gold)] pl-6 py-4">
              <h4 className="text-xl mb-2 text-[var(--navy)]">Hospitality Operators</h4>
              <p className="text-[var(--navy)]/70">
                Established hospitality professionals looking to add a premium, differentiated offering to their portfolio.
              </p>
            </div>

            <div className="border-l-4 border-[var(--gold)] pl-6 py-4">
              <h4 className="text-xl mb-2 text-[var(--navy)]">Corporate Event Companies</h4>
              <p className="text-[var(--navy)]/70">
                B2B event specialists seeking a unique, culturally-rich activation for corporate clients.
              </p>
            </div>

            <div className="border-l-4 border-[var(--gold)] pl-6 py-4">
              <h4 className="text-xl mb-2 text-[var(--navy)]">Premium Wedding Planners</h4>
              <p className="text-[var(--navy)]/70">
                Luxury wedding and private event planners who value authenticity and refined presentation.
              </p>
            </div>

            <div className="border-l-4 border-[var(--gold)] pl-6 py-4">
              <h4 className="text-xl mb-2 text-[var(--navy)]">International Franchise Investors</h4>
              <p className="text-[var(--navy)]/70">
                Experienced franchise operators with vision for premium hospitality brands in emerging markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--navy)] text-[var(--ivory)]">
        <div className="container-chaai max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6">
            Build With Us
          </h2>
          <div className="divider-elegant bg-[var(--gold)]"></div>
          <p className="text-lg opacity-90 mb-4 leading-relaxed">
            We seek partners who value quality over speed, refinement over volume, and authenticity over trend.
          </p>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            If that resonates with you, we would like to hear from you.
          </p>
          <button className="btn-primary bg-[var(--ivory)] text-[var(--navy)] border-[var(--ivory)] hover:bg-transparent hover:text-[var(--ivory)]">
            Apply for Partnership
          </button>
          <p className="text-sm opacity-60 mt-6">
            Applications reviewed on a rolling basis. We partner selectively.
          </p>
        </div>
      </section>
    </div>
  );
}
