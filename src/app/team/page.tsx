import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'

export const metadata: Metadata = {
  title: 'Meet Our Team | Pathways Within',
  description: 'Meet the licensed therapists, certified wellness providers, and support staff at Pathways Within. Our expert team serves Long Island with compassionate, personalized care.',
}

const leadership = [
  {
    name: 'Rachel Lessard, LCSW-R',
    title: 'Founder and Clinical Director',
    bio: 'Together we can explore your experiences to help you feel safe and secure again. In my office, with or without your loved one, we can develop new styles of communication that can create the relationship you have always wanted.',
    specialties: ['Anxiety', 'Depression', 'PTSD', 'Couples therapy', 'Hypnotherapy', 'Veterans support', 'First responders support', 'Weight loss surgery evaluations'],
  },
]

const clinicalTeam = [
  {
    name: 'Benjamin Marmorstein, LCSW',
    bio: 'Welcome to a compassionate and creative approach to some of life\'s difficult challenges. Together we will create a safe, judgment free space of unwavering support.',
    specialties: ['School related challenges', 'Children', 'Adolescence', 'Complex PTSD', 'Religious trauma', 'Family conflict'],
  },
  {
    name: 'Beth Gabellini, LCSW',
    bio: 'My philosophy is that we are all perfectly imperfect and should seek to live as our authentic selves. I am an open minded, caring professional who will not judge you.',
    specialties: ['Relationships', 'Veterans support', 'Women\'s empowerment', 'Life transitions'],
  },
  {
    name: 'Carly Sandstrom, LMHC',
    bio: 'In therapy, there is no one size fits all approach. Using an eclectic approach, I tailor each session to be the most beneficial for you on your journey.',
    specialties: ['Trauma', 'Anxiety', 'Veterans and first responders', 'Attachment theory', 'Parts work'],
  },
  {
    name: 'Jennifer Thieke, LCSW',
    bio: 'My approach to psychotherapy is cognitive behavioral and psychodynamic. We will explore your current beliefs and habits through the lens of your history.',
    specialties: ['Mood disorders', 'Anxiety disorders', 'Trauma', 'Self esteem'],
  },
  {
    name: 'Joe Bush, LCSW',
    bio: 'You do not have to go through this alone. In my sessions, I strive to create a judgment free and empathetic environment where we can safely explore life challenges.',
    specialties: ['Anxiety', 'Depression', 'Adolescents', 'College transition', 'Relationship issues', 'Men\'s issues'],
  },
  {
    name: 'Joy Fullhardt, LCSW',
    bio: 'We will have the opportunity to work together in an agreed upon, comfortable, safe environment to build trust, help focus on issues presented, and establish realistic goals.',
    specialties: ['Anxiety', 'Depression', 'Addiction', 'Marriage counseling', 'Anger management', 'Grief and loss'],
  },
  {
    name: 'Ksusha Cascio, LCSW',
    bio: 'Reaching out for help can feel daunting, but nothing happens in our comfort zone. I am here to provide a judgment free safe space to develop the best version of yourself.',
    specialties: ['Complex PTSD', 'Adult ADHD', 'Job related stress', 'Internal Family Systems', 'Parts work'],
  },
  {
    name: 'Laura DeSilva, LMHC',
    bio: 'As an eclectic clinician, I pull from humanistic, cognitive behavioral, and psychodynamic frameworks to suit my clients\' needs. I view counseling as a collaboration.',
    specialties: ['Anxiety', 'Trauma', 'Depression'],
  },
  {
    name: 'Lauren Hollander, LCSW',
    bio: 'I focus on incorporating a client\'s mind, body, spirit, and emotions in the healing process. I focus on moving toward healing and growth in a safe space.',
    specialties: ['Somatic therapy', 'Trauma', 'PTSD', 'Depression', 'Anxiety', 'Bipolar disorder'],
  },
  {
    name: 'Lee Wasser, LMHC-D',
    bio: 'The world is a very diverse place. Every person is so different and comes from a different perspective. I want you to embrace your individuality as we work together.',
    specialties: ['LGBTQ+ issues', 'Teens', 'Adults', 'Trauma', 'Depression', 'Self harm'],
  },
  {
    name: 'Paula Gonthier, LCSW',
    bio: 'I will help you access your own strengths and talents to recognize and remove the roadblocks that prevent you from achieving your goals and living your ideal life.',
    specialties: ['Couples therapy', 'Health issues', 'Midlife crisis'],
  },
  {
    name: 'Ryan Gallo, LMHC',
    bio: 'My passion for therapy stems from the belief that we are all in need of safe spaces in life where vulnerability and trust can develop, yielding healing and growth.',
    specialties: ['Anxiety', 'Depression', 'Self esteem', 'Addiction', 'Life transition'],
  },
  {
    name: 'Samantha Juravich, LCSW',
    bio: 'My first goal as a therapist is to create a safe space and supportive therapeutic environment that assists clients with self discovery, change, and improving quality of life.',
    specialties: ['Children', 'Teens', 'Families', 'Trauma', 'Behavior concerns', 'ADHD'],
  },
  {
    name: 'Samantha Tavel, LMFT',
    bio: 'I believe that everyone can benefit from therapy. Coming to see me, you can expect an open and safe space where you should feel free to be yourself.',
    specialties: ['Anxiety', 'Trauma', 'CBT', 'Communication', 'Self esteem', 'ADHD'],
  },
  {
    name: 'Stephanie Procopiou, LMHC-D',
    bio: 'Together we can create a safe and comfortable environment to explore your life experiences and work toward discovering a more positive version of yourself.',
    specialties: ['Adolescents', 'Anxiety', 'Depression', 'Trauma', 'Eating disorders', 'Self esteem'],
  },
  {
    name: 'Tia Baumohl',
    bio: 'With over five years of expertise in energy work and coaching practices, I empower individuals and couples to navigate challenging dynamics and uncover untapped potentials.',
    specialties: ['Assertiveness', 'Effective communication', 'IFS parts work', 'Attachment patterns', 'Codependency'],
  },
]

const associateTeam = [
  { name: 'Anna Ostrow, MHC-LP', specialties: ['Adolescents', 'Young adults', 'Anxiety', 'Depression', 'Life transitions'] },
  { name: 'Alexandra Cella, LMSW', specialties: ['Trauma', 'Grief', 'Neurodivergence', 'Chronic illness', 'Caregiving'] },
  { name: 'Charity (Valen) Meyer, MFT-LP', specialties: ['LGBTQIA+', 'Neurodivergence', 'Addiction', 'Depression', 'Anxiety'] },
  { name: 'Chelsea Bell, LMSW', specialties: ['Anxiety', 'Depression', 'Trauma', 'Self esteem', 'Mindfulness'] },
  { name: 'Frank Tropeano, LMSW', specialties: ['Anxiety', 'Depression', 'Conflict resolution', 'Couples', 'Relationships'] },
  { name: 'Jen Brooks, LMSW', specialties: ['Anxiety', 'Depression', 'Anger management', 'Trauma', 'Autism', 'ADHD'] },
  { name: 'Joshua P. Locantore, LMSW', specialties: ['PTSD', 'Generalized anxiety', 'Panic attacks', 'Depression'] },
  { name: 'Juliette Squicciarini, LMSW', specialties: ['Adolescents', 'Adults', 'Anxiety', 'Depression', 'Substance use'] },
  { name: 'Kaitlyn Kelly, MHC-LP', specialties: ['Anxiety', 'Depression', 'Stress management', 'Communication', 'Teens'] },
  { name: 'Kathleen Dimartino, LMSW', specialties: ['Chronic pain', 'Borderline personality', 'Self harm', 'Depression'] },
  { name: 'Kelly Imperial, LMSW', specialties: ['Eating disorders', 'Self esteem', 'College transition', 'Divorce'] },
  { name: 'Lindsay Laier, MFT-LP', specialties: ['Family relationships', 'Life transitions', 'Boundaries', 'Parenting'] },
  { name: 'Maddy Zambri, MHC-LP', specialties: ['Life transitions', 'Stress management', 'Addiction', 'LGBTQIA+'] },
  { name: 'Mariah Simone, MHC-LP', specialties: ['Anxiety', 'Depression', 'Self esteem', 'Coping skills', 'Teens'] },
  { name: 'Nicole Duffy, LMSW', specialties: ['Domestic violence recovery', 'Sexual assault recovery', 'Building confidence'] },
  { name: 'Zach Pardo, MSW-LP', specialties: ['Anxiety', 'Depression', 'Trauma', 'Adolescents', 'Anger', 'Grief'] },
]

const wellnessTeam = [
  { name: 'Christine Cervo', title: 'Certified Massage Therapist', bio: 'Specializes in Swedish, deep tissue, sports, prenatal massage, and energy work modalities.' },
  { name: 'Nicole Imbasciani', title: 'Medical Director', bio: 'Dedicated to ensuring the safety and efficacy of all medical grade treatments offered.' },
  { name: 'Evelina Abayev', title: 'Registered Nurse', bio: 'Passionate about helping clients achieve their wellness and beauty goals through medical grade treatments.' },
  { name: 'Angela Gestone', title: 'Licensed Esthetician', bio: 'Extensive knowledge in skincare treatments including facials, chemical peels, and advanced modalities.' },
]

const therapyDogs = [
  { name: 'Domino', bio: 'With his calm presence, gentle eyes, and intuitive heart, Domino brings comfort and connection to every client he meets. Known for offering the best snuggles and silent support.' },
  { name: 'Gypsy Sassafras', bio: 'A kind soul with a warm smile who connects with people on an emotional level. She holds space for laughter and crying and comforts the most sensitive feelings.', instagram: '@Gypsy_Sassafras' },
]

export default function TeamPage() {
  return (
    <main>
      {/* Hero - Stacked banner style */}
      <PageHero
        eyebrow="Our Team"
        headline="The people behind your care"
        subheadline="Licensed therapists, certified providers, and compassionate support staff"
        body="Our team brings together decades of combined experience in mental health, holistic wellness, and whole person care. Every member shares our commitment to creating a safe, judgment free space where you can heal and grow."
        variant="stacked"
        size="md"
        image={{ alt: 'Pathways Within team members', placeholder: true }}
      />

      {/* Leadership */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Leadership
            </p>
            <h2 className="text-[rgb(var(--color-navy))]">Our founder</h2>
          </div>
          
          {leadership.map((person) => (
            <div key={person.name} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="img-placeholder aspect-[4/5]" />
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-[rgb(var(--color-navy))]">{person.name}</h3>
                <p 
                  className="mb-6 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
                >
                  {person.title}
                </p>
                <p className="mb-6 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                  {person.bio}
                </p>
                <div>
                  <p className="mb-2 text-sm font-medium text-[rgb(var(--color-navy))]">Specializes in:</p>
                  <p className="text-sm text-[rgb(var(--color-text-light))]">
                    {person.specialties.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Clinical Team
            </p>
            <h2 className="text-[rgb(var(--color-navy))]">Licensed therapists</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clinicalTeam.map((person) => (
              <div key={person.name} className="group">
                <div className="img-placeholder mb-6 aspect-square" />
                <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{person.name}</h3>
                <p className="mb-4 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {person.bio}
                </p>
                <p className="text-xs text-[rgb(var(--color-text-light))]/70">
                  {person.specialties.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associate Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Associate Clinicians
            </p>
            <h2 className="text-[rgb(var(--color-navy))]">Growing professionals</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {associateTeam.map((person) => (
              <div key={person.name} className="rounded-lg bg-white p-6">
                <div className="img-placeholder mb-4 aspect-square" />
                <h3 className="mb-2 text-sm text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{person.name}</h3>
                <p className="text-xs text-[rgb(var(--color-text-light))]/70">
                  {person.specialties.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Wellness Team
            </p>
            <h2 className="text-[rgb(var(--color-navy))]">Body care specialists</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {wellnessTeam.map((person) => (
              <div key={person.name}>
                <div className="img-placeholder mb-6 aspect-square" />
                <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{person.name}</h3>
                <p 
                  className="mb-3 text-xs uppercase tracking-wider text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
                >
                  {person.title}
                </p>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.6 }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Dogs */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-20 lg:py-28">
          <div className="mb-12 text-center">
            <p 
              className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
            >
              Therapy Dogs
            </p>
            <h2 className="mb-4 text-[rgb(var(--color-navy))]">Our furry team members</h2>
            <p className="mx-auto max-w-2xl text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Specializing in creating a comfortable and cozy place where humans can express their dreams, hopes, and feelings.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            {therapyDogs.map((dog) => (
              <div key={dog.name} className="text-center">
                <div className="img-placeholder mx-auto mb-6 aspect-square max-w-xs rounded-full" />
                <h3 className="mb-3 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{dog.name}</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  {dog.bio}
                </p>
                {dog.instagram && (
                  <p className="mt-3 text-sm text-[rgb(var(--color-green))]">{dog.instagram}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p 
                className="mb-4 text-sm uppercase tracking-widest text-[rgb(var(--color-green))]"
                style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 500 }}
              >
                Admin Team
              </p>
              <h2 className="mb-6 text-[rgb(var(--color-navy))]">Behind the scenes</h2>
              <p className="text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
                Our administrative team ensures every client's experience is welcoming, seamless, and supportive. They are proud to be part of a team that honors whole person wellness.
              </p>
            </div>
            <div className="flex items-center">
              <div className="rounded-lg bg-[rgb(var(--color-linen))] p-8">
                <h3 className="mb-1 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>Gloria Saladino</h3>
                <p 
                  className="mb-4 text-xs uppercase tracking-wider text-[rgb(var(--color-green))]"
                  style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif' }}
                >
                  Front Desk Manager
                </p>
                <p className="text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>
                  As a front desk manager at Pathways Within, I am here to ensure every client's experience is welcoming, seamless, and supportive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-white">Find the right provider for you</h2>
            <p className="mb-10 text-lg text-white/70" style={{ lineHeight: 1.8 }}>
              Ready to start your journey? Let us help you find the provider who is the best fit for your needs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/start" className="btn-pill btn-pill-green">
                <span className="btn-text">Get Started Today</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/contact" className="btn-pill btn-pill-white">
                <span className="btn-text">Contact Us</span>
                <span className="btn-arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Same-week appointments available
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
