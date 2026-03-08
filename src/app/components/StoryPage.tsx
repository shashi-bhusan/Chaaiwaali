import { ImageWithFallback } from './figma/ImageWithFallback';

export function StoryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1546913989-305399a57db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaGFpJTIwdGVhJTIwY2VyZW1vbnklMjB3YXJtfGVufDF8fHx8MTc3Mjk2OTI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chai ceremony"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative z-10 text-center text-[var(--ivory)] px-6">
          <h1 className="serif-heading text-5xl md:text-7xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* Origins */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai max-w-4xl mx-auto px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)] text-center">
            Origins
          </h2>
          <div className="divider-elegant"></div>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-6">
            Chaaiwaali began with a simple belief: chai deserves intention.
          </p>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-6">
            Across generations, chai has been a connector. In homes, in workplaces, in moments of comfort. We sought to present it with the refinement it has always deserved.
          </p>
          <p className="text-lg leading-relaxed text-[var(--navy)]/80">
            What started as a passion for authentic chai craft has evolved into a hospitality brand that bridges cultures, generations, and modern business needs.
          </p>
        </div>
      </section>

      {/* The Balance - with Image */}
      <section className="section-padding bg-white">
        <div className="container-chaai px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGlnaHQlMjBsaW5lbiUyMHRleHR1cmUlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mjk2OTI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Natural light and linen"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-[var(--navy)]">
                The Balance
              </h2>
              <div className="divider-elegant mx-0"></div>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-4">
                Indian craft. British elegance. Global standards.
              </p>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80 mb-4">
                We source authentic spices and blends rooted in heritage, then present them with contemporary aesthetic discipline and professional execution.
              </p>
              <p className="text-lg leading-relaxed text-[var(--navy)]/80">
                This balance is not compromise—it is refinement. It allows chai to travel without losing its soul, to evolve without abandoning its roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding bg-[var(--ivory)]">
        <div className="container-chaai px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-12 text-[var(--navy)] text-center">
            The Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Ritual */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--navy)] rounded-full"></div>
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Ritual
              </h3>
              <p className="text-[var(--navy)]/70">
                We slow moments down.
              </p>
            </div>

            {/* Craft */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--navy)] rounded-full"></div>
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Craft
              </h3>
              <p className="text-[var(--navy)]/70">
                Authentic spice sourcing, refined preparation.
              </p>
            </div>

            {/* Refinement */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--gold)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--navy)] rounded-full"></div>
              </div>
              <h3 className="serif-heading text-2xl mb-4 text-[var(--navy)]">
                Refinement
              </h3>
              <p className="text-[var(--navy)]/70">
                Presented with English countryside grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="section-padding bg-[var(--navy)] text-[var(--ivory)]">
        <div className="container-chaai max-w-4xl mx-auto px-6">
          <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-center">
            The Future
          </h2>
          <div className="divider-elegant bg-[var(--gold)]"></div>
          <p className="text-lg leading-relaxed opacity-90 mb-6 text-center">
            Our ambition is to redefine chai as a premium global hospitality category, not just a cultural drink.
          </p>
          <p className="text-lg leading-relaxed opacity-90 text-center">
            We are building a brand that travels without dilution.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-sm tracking-wider uppercase opacity-70 mb-2">Focus</p>
              <p className="text-xl">Corporate presence</p>
            </div>
            <div className="text-center">
              <p className="text-sm tracking-wider uppercase opacity-70 mb-2">Scope</p>
              <p className="text-xl">International scaling</p>
            </div>
            <div className="text-center">
              <p className="text-sm tracking-wider uppercase opacity-70 mb-2">Position</p>
              <p className="text-xl">Premium hospitality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
