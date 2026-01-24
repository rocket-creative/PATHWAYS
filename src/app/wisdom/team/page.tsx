import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SITE_URL } from '@/lib/site-config'
import { 
  createOpenGraph, 
  createTwitterCard, 
  standardRobots,
  createBreadcrumbSchema,
  createPersonSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Therapists on Long Island | Pathways Within',
  description: 'Meet our therapy team at Pathways Within. Licensed clinical social workers, mental health counselors, and marriage and family therapists on Long Island.',
  alternates: { canonical: `${SITE_URL}/wisdom/team` },
  openGraph: createOpenGraph({
    title: 'Therapists on Long Island | Pathways Within',
    description: 'Meet our therapy team at Pathways Within. Licensed clinical social workers, mental health counselors, and marriage and family therapists on Long Island.',
    url: `${SITE_URL}/wisdom/team`,
  }),
  twitter: createTwitterCard({
    title: 'Therapists on Long Island | Pathways Within',
    description: 'Meet our therapy team at Pathways Within. Licensed clinical social workers, mental health counselors, and more.',
  }),
  robots: standardRobots,
}

const therapyTeam = [
  {
    name: 'Rachel Lessard',
    title: 'LCSW-R, Founder & Clinical Director',
    image: '/images/team/rachel-lessard.jpeg',
    bio: 'Together we can explore your experiences in order to help you feel safe and secure again. In my office, with or without your loved one, we can develop new styles of communication that can create the relationship you have always wanted.',
    specializes: 'anxiety, depression, PTSD, couples, hypnotherapy, veterans, first responders, and weight loss surgery evals and counseling',
  },
  {
    name: 'Benjamin Marmorstein',
    title: 'LCSW',
    image: '/images/team/benjamin-marmorstein.jpeg',
    bio: 'Welcome to a compassionate and creative approach to some of life\'s difficult challenges. Together we will create a safe, non-judgmental space of unwavering support where we can explore your thoughts and feelings openly.',
    specializes: 'school related challenges, children, adolescence, young adults, complex PTSD, religious trauma, family conflict, anxiety, depression, ADHD and low self-esteem',
  },
  {
    name: 'Beth Gabellini',
    title: 'LCSW',
    image: '/images/team/beth-gabellini.jpg',
    bio: 'My philosophy is that we are all perfectly imperfect, and should seek to live as our authentic selves. I am an open-minded, caring professional who won\'t judge you, but rather, give you the space to feel safe, be heard, and work through your thoughts and emotions.',
    specializes: 'relationships, veterans, woman\'s empowerment, and life transitions',
  },
  {
    name: 'Carly Sandstrom',
    title: 'LMHC',
    image: '/images/team/carly-sandstrom.jpg',
    bio: 'In therapy, there is no "one size fits all" approach. Using an eclectic approach, I tailor each session to be the most beneficial for you on your journey with mental health. You can expect a warm, trusting, and empathetic environment.',
    specializes: 'trauma, anxiety, veterans & first responders, attachment theory & parts work',
  },
  {
    name: 'Jennifer Thieke',
    title: 'LCSW',
    image: '/images/team/jennifer-thieke.jpg',
    bio: 'My approach to psychotherapy is cognitive-behavioral and psychodynamic. We will explore your current beliefs and habits through the lens of your history to help you break free from old patterns of behavior.',
    specializes: 'mood disorders, anxiety disorders, trauma, self-esteem',
  },
  {
    name: 'Joe Bush',
    title: 'LCSW',
    image: '/images/team/joe-bush.jpg',
    bio: 'You do not have to go through this alone. In my sessions, I strive to create a non-judgmental and empathetic environment where we can safely explore life challenges.',
    specializes: 'anxiety, depression, adolescents, college transition, relationship issues, bipolar disorder, men\'s issues, anger, school refusal, ADHD, job-related stress, and family work',
  },
  {
    name: 'Joy Fullhardt',
    title: 'LCSW',
    image: '/images/team/joy-fullhardt.jpg',
    bio: 'We will have the opportunity to work together in an agreed-upon, comfortable, safe environment in order to build trust, help focus on issues presented, enhance motivation, and establish realistic goals.',
    specializes: 'anxiety, depression (including postpartum depression), addiction, marriage/couples counseling, anger management, grief/loss counseling, PTSD & Autism Spectrum for adults',
  },
  {
    name: 'Ksusha Cascio',
    title: 'LCSW',
    image: '/images/team/ksusha-cascio.jpeg',
    bio: 'Reaching out for help can feel daunting but nothing happens in our comfort (or discomfort) zone. I am here to provide a judgment-free safe space to explore, challenge, and develop the best version of yourself.',
    specializes: 'Complex PTSD, adult ADHD, job related stress, Internal Family Systems and parts work',
  },
  {
    name: 'Laura DeSilva',
    title: 'LMHC',
    image: '/images/team/laura-desilva.jpg',
    bio: 'As an eclectic clinician, I pull from humanistic, cognitive behavioral, and psychodynamic frameworks to suit my clients\' needs. I view counseling as a collaboration between the therapist and client.',
    specializes: 'anxiety, trauma, and depression',
  },
  {
    name: 'Lauren Hollander',
    title: 'LCSW',
    image: '/images/team/lauren-hollander.jpeg',
    bio: 'I focus on incorporating a client\'s mind, body spirit, and emotions in the healing process. I focus on moving toward healing and growth in a safe and judgment-free space that I create with my clients.',
    specializes: 'somatic therapy, trauma, PTSD, depression, anxiety, bipolar disorder, and borderline personality disorder',
  },
  {
    name: 'Lee Wasser',
    title: 'LMHC-D',
    image: '/images/team/lee-wasser.jpeg',
    bio: 'The world is a very diverse place. Every person is so different and comes from a different perspective. I am skilled in a variety of backgrounds and clinical approaches and continually work to build my toolbox for treatment.',
    specializes: 'LGBTQ+ Issues, teens, adults, trauma, depression, self-harm, anxiety, mood disorders, sex, addiction, relationship issues',
  },
  {
    name: 'Paula Gonthier',
    title: 'LCSW',
    image: '/images/team/paula-gonthier.jpeg',
    bio: 'I will help you access your own strengths and talents to recognize and remove the roadblocks that prevent you from achieving your goals and living your ideal life.',
    specializes: 'couples, health issues, and midlife crisis',
  },
  {
    name: 'Ryan Gallo',
    title: 'LMHC',
    image: '/images/team/ryan-gallo.jpeg',
    bio: 'My passion for therapy stems from the belief that we are all in need of safe spaces in life where vulnerability and trust can develop, yielding healing and growth in areas that tend to hold us back.',
    specializes: 'anxiety, depression, self-esteem, addiction, life transition',
  },
  {
    name: 'Samantha Tavel',
    title: 'LMFT',
    image: '/images/team/samantha-tavel.jpg',
    bio: 'I believe that everyone can benefit from therapy. Coming to see me, you can expect an open and safe space where you should feel free to be yourself. I use a very relaxed CBT approach.',
    specializes: 'anxiety, trauma, CBT, communication, self-esteem, ADHD, adults, teens, couples & families',
  },
  {
    name: 'Stephanie Procopiou',
    title: 'LMHC-D',
    image: '/images/team/stephanie-procopiou.jpeg',
    bio: 'Together we can create a safe and comfortable environment to explore your life experiences and work toward discovering a more positive version of yourself.',
    specializes: 'adolescents, anxiety, depression, trauma, eating disorders, self-esteem',
  },
  {
    name: 'Tia Baumohl',
    title: 'Certified Coach & Energy Practitioner',
    image: '/images/team/tia-baumohl.jpeg',
    bio: 'With over five years of expertise in energy work and coaching practices, I empower individuals and couples to navigate challenging dynamics, facilitating breakthroughs and uncovering untapped potentials.',
    specializes: 'assertiveness/confidence building, effective communication, IFS-parts work, healing attachment patterns, breaking codependency patterns',
  },
  {
    name: 'Anna Ostrow',
    title: 'MHC-LP',
    image: '/images/team/anna-ostrow.jpeg',
    bio: 'Life can be overwhelming, but you don\'t have to go through it alone. I\'m here to create a warm, supportive, and judgment-free space where you can feel safe to be yourself.',
    specializes: 'adolescents, young adults, adults, anxiety, depression, life transitions, relationships, stress management',
  },
  {
    name: 'Alexandra Cella',
    title: 'LMSW',
    image: '/images/team/alexandra-cella.jpg',
    bio: 'I strive to create a compassionate, grounded space where clients can reconnect with their strengths, deepen self-awareness, and move toward meaningful change.',
    specializes: 'teens and adults coping with trauma, grief, neurodivergence, chronic illness, and caregiving responsibilities',
  },
  {
    name: 'Charity (Valen) Meyer',
    title: 'MFT-LP',
    image: '/images/team/charity-meyer.jpeg',
    bio: 'Recognizing that every person\'s journey is unique, my passion is to create a safe, warm, and non-judgmental space where you feel truly heard and understood.',
    specializes: 'LGBTQIA+ Issues, Neurodivergence, Addiction, Depression, Anxiety, Bipolar Disorder, and Relationship Issues',
  },
  {
    name: 'Chelsea Bell',
    title: 'LMSW',
    image: '/images/team/chelsea-bell.jpg',
    bio: 'Taking the first step to seek help can be a very difficult yet rewarding task. My goal is to create a comfortable environment that is free of judgment and unique to you.',
    specializes: 'anxiety, depression, trauma, self-esteem, and mindfulness',
  },
  {
    name: 'Frank Tropeano',
    title: 'LMSW',
    image: '/images/team/frank-tropeano.jpeg',
    bio: 'Life can sometimes feel overwhelming, but you do not have to go through those times alone. I strive to create an open space where clients feel safe and supported.',
    specializes: 'anxiety, depression, conflict and problem-solving, couples and relationships',
  },
  {
    name: 'Jen Brooks',
    title: 'LMSW',
    image: '/images/team/jen-brooks.jpg',
    bio: 'Life can hand us many challenges, but you are not alone. I will strive to provide a balance of support, understanding, and compassion in your journey of growth.',
    specializes: 'anxiety, depression, anger management, trauma, adults with traumatic brain injuries, autism and ADHD (Teens+), behavior modification & mindfulness',
  },
  {
    name: 'Juliette Squicciarini',
    title: 'LMSW',
    image: '/images/team/juliette-squicciarini.jpeg',
    bio: 'The thought of therapy can be intimidating! That\'s why as a therapist, I am committed to creating a positive, uplifting, and safe space where you will feel seen and heard.',
    specializes: 'adolescents, adults, anxiety, depression, stress management, substance use',
  },
  {
    name: 'Kaitlyn Kelly',
    title: 'MHC-LP',
    image: '/images/team/kaitlyn-kelly.jpeg',
    bio: 'Therapy is for everyone! In a session with me, you can expect a genuine judgment-free zone where you can feel comfortable to share openly and honestly.',
    specializes: 'anxiety, depression, stress management, communication, teens, adults',
  },
  {
    name: 'Kathleen Dimartino',
    title: 'LMSW',
    image: '/images/team/kathleen-dimartino.jpg',
    bio: 'I understand that the challenges we face in life may feel overwhelming at times. Therapy is often a great place to start (or continue) when we are in need of some extra support.',
    specializes: 'chronic pain and illnesses, borderline personality disorder, self-harm, depression, and anxiety',
  },
  {
    name: 'Kelly Imperial',
    title: 'LMSW',
    image: '/images/team/kelly-imperial.jpg',
    bio: 'Life is full of transitions. Together we can work through these changes and challenges to empower you to feel your best. With empathy, compassion, and even a bit of humor, I look forward to supporting you.',
    specializes: 'eating disorders, self esteem, college transition, special needs parenting, co-parenting, and divorce',
  },
  {
    name: 'Lindsay Laier',
    title: 'MFT-LP',
    image: '/images/team/lindsay-laier.jpeg',
    bio: 'Life is a cycle and change can bring many challenges. In therapy, I work with individuals, families and couples to provide insight and perspective on the challenges that life puts in our paths.',
    specializes: 'individuals, family relationships, life transitions, boundaries, couples, parenting, divorce, teens and young adults',
  },
  {
    name: 'Maddy Zambri',
    title: 'MHC-LP',
    image: '/images/team/maddy-zambri.jpeg',
    bio: 'Life is full of changes and challenges that affect people across many aspects of their lives. I want to help you take that first step by providing a safe, judgment-free environment.',
    specializes: 'life transitions, stress management, addiction, anxiety, mood disorders, LGBTQIA+, and neurodivergence',
  },
  {
    name: 'Mariah Simone',
    title: 'MHC-LP',
    image: '/images/team/mariah-simone.jpeg',
    bio: 'My goal as a therapist is to help you feel safe, heard, and comfortable while working toward your therapeutic goals. In our time together, you will always be greeted with unconditional positive regard.',
    specializes: 'anxiety, depression, self-esteem, coping skills, stress, adolescents, teens, young adults',
  },
  {
    name: 'Nicole Duffy',
    title: 'LMSW',
    image: '/images/team/nicole-duffy.jpg',
    bio: 'Everyone should feel comfortable, safe, and understood. With a person-centered approach, I strive to meet you where you\'re at. Each session will be tailored to meet your goals.',
    specializes: 'recovery from domestic violence and sexual assault, rediscovering joy and purpose, building strength and confidence',
  },
]

export default function TherapyTeamPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Therapy', url: `${SITE_URL}/wisdom` },
    { name: 'Team', url: `${SITE_URL}/wisdom/team` },
  ])
  
  const personSchemas = therapyTeam
    .filter(m => m.image)
    .slice(0, 10)
    .map(member => createPersonSchema({
      name: member.name,
      title: member.title,
      description: member.bio,
      image: member.image || undefined,
      specialties: member.specializes?.split(',').map(s => s.trim()),
    }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {personSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHero
        eyebrow="Our Team"
        headline="Meet our therapists"
        body="Our clinical team includes licensed clinical social workers, licensed mental health counselors, and licensed marriage and family therapists. Each clinician works with special populations based on their expertise and passions."
        image="/images/hero/hero-4-people.png"
        imageAlt="Therapy team at Pathways Within"
      />

      {/* Team Grid */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {therapyTeam.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-lg border border-[rgb(var(--border))]/50">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[rgb(var(--color-linen))]">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={100}
                      unoptimized
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[rgb(var(--color-navy))]">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-green))]">{member.title}</p>
                  <p className="mb-3 text-sm text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.7 }}>{member.bio}</p>
                  <p className="text-xs text-[rgb(var(--color-navy))]/60">
                    <span className="font-medium">Specializes in:</span> {member.specializes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Team */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Admin Team</p>
            <h2 className="mb-8 text-[rgb(var(--color-navy))]">Here to help you every step of the way</h2>
            <div className="flex justify-center">
              <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-[rgb(var(--border))]/50">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[rgb(var(--color-linen))]">
                  <Image
                    src="/images/team/gloria-saladino.jpg"
                    alt="Gloria Saladino"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-[rgb(var(--color-navy))]">Gloria Saladino</h3>
                  <p className="mb-2 text-sm text-[rgb(var(--color-green))]">Front Desk Manager</p>
                  <p className="text-sm text-[rgb(var(--color-text-light))]">
                    Here to ensure every client&apos;s experience is welcoming, seamless and supportive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Insurance</p>
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">We accept most major insurance</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              We are in-network with Aetna, Cigna, Optum, UHC, Oxford, Oscar, Medicare, Humana, NYSHIP, MVP, and more. We also accept VA Community Care benefits for veterans.
            </p>
            <Link href="/contact" className="btn-pill btn-pill-secondary">
              <span className="btn-text">Verify your coverage</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to find your therapist?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Schedule a consultation and we will match you with the right clinician for your needs.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-pill btn-pill-green">
              <span className="btn-text">Schedule consultation</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
            <Link href="/wisdom/services" className="btn-pill btn-pill-white">
              <span className="btn-text">View services</span>
              <span className="btn-arrow"><ArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
