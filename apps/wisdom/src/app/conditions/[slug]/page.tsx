import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Check, AlertCircle } from 'lucide-react'
import { 
  PageHero, 
  JsonLd, 
  createBreadcrumbSchema,
  MedicalDisclaimer,
  ContentMeta,
  SourcesCitations,
} from '@pathways/ui'
import { 
  createMedicalWebPageSchema, 
  MENTAL_HEALTH_CONDITIONS,
} from '@pathways/ui/lib/medical-schema'

const siteUrl = process.env.NEXT_PUBLIC_WISDOM_URL || 'http://localhost:3001'
const mainUrl = process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000'

// Enhanced condition data with E-E-A-T content
const conditions: Record<string, {
  slug: string
  name: string
  headline: string
  metaDescription: string
  overview: string
  prevalence: string
  symptoms: { name: string; description: string }[]
  causes: string[]
  treatments: { name: string; description: string; link: string }[]
  selfCare: string[]
  whenToSeekHelp: string[]
  sources: { title: string; organization: string; url: string; year?: string }[]
}> = {
  'anxiety': {
    slug: 'anxiety',
    name: 'Anxiety disorders',
    headline: 'Understanding and treating anxiety',
    metaDescription: 'Learn about anxiety disorders, symptoms, causes, and evidence-based treatments available at Pathways Within. Expert care from licensed therapists.',
    overview: 'Anxiety disorders are among the most common mental health conditions, affecting approximately 40 million adults in the United States each year. While anxiety is a normal response to stress, anxiety disorders involve persistent, excessive worry that interferes with daily activities.',
    prevalence: 'According to the National Institute of Mental Health, an estimated 31.1% of U.S. adults experience an anxiety disorder at some point in their lives.',
    symptoms: [
      { name: 'Excessive worry', description: 'Persistent worrying about everyday situations that is difficult to control' },
      { name: 'Restlessness', description: 'Feeling on edge, keyed up, or unable to relax' },
      { name: 'Physical symptoms', description: 'Rapid heartbeat, sweating, trembling, shortness of breath' },
      { name: 'Sleep difficulties', description: 'Trouble falling asleep, staying asleep, or restless sleep' },
      { name: 'Difficulty concentrating', description: 'Mind going blank or trouble focusing on tasks' },
      { name: 'Avoidance', description: 'Avoiding situations that trigger anxiety' },
    ],
    causes: [
      'Genetic factors and family history',
      'Brain chemistry and neurotransmitter imbalances',
      'Traumatic or stressful life events',
      'Medical conditions or medication side effects',
      'Personality traits such as perfectionism',
    ],
    treatments: [
      { name: 'Cognitive Behavioral Therapy (CBT)', description: 'Helps identify and change negative thought patterns and behaviors', link: '/services/individual-therapy' },
      { name: 'Exposure therapy', description: 'Gradual, controlled exposure to anxiety triggers to reduce fear response', link: '/services/individual-therapy' },
      { name: 'EMDR therapy', description: 'Processes anxiety-related memories and reduces their emotional impact', link: '/services/emdr-therapy' },
      { name: 'Somatic therapy', description: 'Addresses anxiety held in the body through mind-body techniques', link: '/services/somatic-therapy' },
    ],
    selfCare: [
      'Practice deep breathing and relaxation techniques',
      'Maintain regular physical exercise',
      'Prioritize sleep and establish a consistent routine',
      'Limit caffeine and alcohol consumption',
      'Stay connected with supportive friends and family',
    ],
    whenToSeekHelp: [
      'Anxiety interferes with work, relationships, or daily activities',
      'You avoid situations due to fear',
      'Physical symptoms persist or worsen',
      'You experience panic attacks',
      'You use substances to cope with anxiety',
    ],
    sources: [
      { title: 'Anxiety Disorders', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders', year: '2024' },
      { title: 'What Are Anxiety Disorders?', organization: 'American Psychiatric Association', url: 'https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders', year: '2024' },
      { title: 'Anxiety and Depression Association of America', organization: 'ADAA', url: 'https://adaa.org/', year: '2024' },
    ],
  },
  'depression': {
    slug: 'depression',
    name: 'Depression',
    headline: 'Understanding and treating depression',
    metaDescription: 'Learn about depression, its symptoms, causes, and evidence-based treatments. Expert care from licensed therapists at Pathways Within.',
    overview: 'Depression is more than feeling sad. It is a serious mental health condition that affects how you feel, think, and handle daily activities. Major depressive disorder is one of the most common mental health conditions, but it is also highly treatable.',
    prevalence: 'The World Health Organization estimates that approximately 280 million people worldwide experience depression. In the U.S., about 8.4% of adults had at least one major depressive episode in 2020.',
    symptoms: [
      { name: 'Persistent sadness', description: 'Feeling sad, empty, or hopeless most of the day, nearly every day' },
      { name: 'Loss of interest', description: 'Reduced interest or pleasure in activities once enjoyed' },
      { name: 'Changes in appetite', description: 'Significant weight loss or gain, or changes in eating habits' },
      { name: 'Sleep disturbances', description: 'Insomnia or sleeping too much' },
      { name: 'Fatigue', description: 'Loss of energy or increased tiredness' },
      { name: 'Difficulty concentrating', description: 'Trouble thinking, concentrating, or making decisions' },
      { name: 'Feelings of worthlessness', description: 'Excessive guilt or feelings of being a burden' },
    ],
    causes: [
      'Brain chemistry and neurotransmitter imbalances',
      'Genetic factors and family history',
      'Traumatic or stressful life events',
      'Major life changes or transitions',
      'Chronic medical conditions',
      'Certain medications',
    ],
    treatments: [
      { name: 'Cognitive Behavioral Therapy (CBT)', description: 'Identifies and changes negative thought patterns contributing to depression', link: '/services/individual-therapy' },
      { name: 'Interpersonal Therapy', description: 'Focuses on improving relationships and communication skills', link: '/services/individual-therapy' },
      { name: 'Behavioral Activation', description: 'Increases engagement in positive activities to improve mood', link: '/services/individual-therapy' },
      { name: 'Light therapy', description: 'Exposure to bright light to regulate mood, especially for seasonal depression', link: '/services/light-therapy' },
    ],
    selfCare: [
      'Maintain a regular sleep schedule',
      'Engage in regular physical activity',
      'Stay connected with supportive people',
      'Set small, achievable goals',
      'Practice self-compassion and avoid self-criticism',
    ],
    whenToSeekHelp: [
      'Symptoms persist for more than two weeks',
      'Depression interferes with daily functioning',
      'You have thoughts of self-harm or suicide',
      'Previous treatments have not been effective',
      'Symptoms significantly impact relationships or work',
    ],
    sources: [
      { title: 'Depression', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/depression', year: '2024' },
      { title: 'What Is Depression?', organization: 'American Psychiatric Association', url: 'https://www.psychiatry.org/patients-families/depression/what-is-depression', year: '2024' },
      { title: 'Depression', organization: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/depression', year: '2023' },
    ],
  },
  'trauma': {
    slug: 'trauma',
    name: 'Trauma and PTSD',
    headline: 'Healing from traumatic experiences',
    metaDescription: 'Learn about trauma, PTSD symptoms, and evidence-based treatments. Compassionate, trauma-informed care from licensed therapists at Pathways Within.',
    overview: 'Trauma results from deeply distressing or disturbing experiences that overwhelm our ability to cope. While trauma responses are natural, they can develop into conditions like PTSD that benefit from professional treatment. Healing is possible with the right support.',
    prevalence: 'About 6 out of every 100 people (6% of the U.S. population) will have PTSD at some point in their lives. Women are more likely to develop PTSD than men.',
    symptoms: [
      { name: 'Intrusive memories', description: 'Flashbacks, nightmares, or unwanted memories of the event' },
      { name: 'Avoidance', description: 'Avoiding places, people, or activities that remind you of the trauma' },
      { name: 'Negative changes in thinking', description: 'Negative thoughts about yourself or the world, feelings of detachment' },
      { name: 'Hyperarousal', description: 'Being easily startled, feeling tense, or having difficulty sleeping' },
      { name: 'Emotional numbing', description: 'Feeling emotionally numb or unable to feel positive emotions' },
      { name: 'Physical reactions', description: 'Racing heart, sweating, or nausea when reminded of the trauma' },
    ],
    causes: [
      'Experiencing or witnessing violence or abuse',
      'Accidents or natural disasters',
      'Combat or military service',
      'Sudden loss of a loved one',
      'Childhood neglect or abuse',
      'Medical trauma or serious illness',
    ],
    treatments: [
      { name: 'EMDR therapy', description: 'Processes traumatic memories through bilateral stimulation to reduce their emotional impact', link: '/services/emdr-therapy' },
      { name: 'Trauma-focused CBT', description: 'Addresses trauma-related thoughts, feelings, and behaviors', link: '/services/trauma-therapy' },
      { name: 'Somatic therapy', description: 'Releases trauma stored in the body through mind-body techniques', link: '/services/somatic-therapy' },
      { name: 'Internal Family Systems (IFS)', description: 'Works with different parts of the self affected by trauma', link: '/services/ifs-therapy' },
    ],
    selfCare: [
      'Establish safety and routine in daily life',
      'Practice grounding techniques when feeling overwhelmed',
      'Connect with supportive, trustworthy people',
      'Be patient with yourself and your healing process',
      'Limit exposure to trauma reminders when possible',
    ],
    whenToSeekHelp: [
      'Symptoms persist for more than a month after the event',
      'You experience flashbacks or severe anxiety',
      'Trauma affects your ability to work or maintain relationships',
      'You use substances to cope',
      'You have thoughts of harming yourself',
    ],
    sources: [
      { title: 'Post-Traumatic Stress Disorder', organization: 'National Institute of Mental Health', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd', year: '2024' },
      { title: 'How Common is PTSD in Adults?', organization: 'U.S. Department of Veterans Affairs', url: 'https://www.ptsd.va.gov/understand/common/common_adults.asp', year: '2024' },
      { title: 'PTSD Facts & Treatment', organization: 'Anxiety and Depression Association of America', url: 'https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd', year: '2024' },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(conditions).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = conditions[slug]
  
  if (!condition) return { title: 'Condition not found' }
  
  return {
    title: condition.name,
    description: condition.metaDescription,
    openGraph: {
      title: `${condition.name} | Pathways Within Wisdom`,
      description: condition.metaDescription,
    },
  }
}

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params
  const condition = conditions[slug]
  
  if (!condition) notFound()

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Conditions', url: '/conditions' },
    { name: condition.name, url: `/conditions/${slug}` },
  ], siteUrl)

  const medicalCondition = MENTAL_HEALTH_CONDITIONS[slug]
  const medicalPageSchema = createMedicalWebPageSchema({
    name: condition.name,
    description: condition.metaDescription,
    url: `${siteUrl}/conditions/${slug}`,
    datePublished: '2024-01-15',
    lastReviewed: '2026-01-15',
    reviewer: {
      name: 'Clinical Review Team',
      credentials: 'Licensed Mental Health Professionals',
    },
    medicalAudience: 'Patient',
    specialty: 'Psychology',
    about: medicalCondition,
  })

  return (
    <main>
      <JsonLd data={[breadcrumbs, medicalPageSchema]} />
      
      <PageHero
        eyebrow="Mental health conditions"
        headline={condition.name}
        body={condition.overview}
        image="/hero-images/freepik__professional-studio-portrait-of-a-person-diverse-w__19265.jpeg"
        site="wisdom"
      />

      {/* Content Meta for E-E-A-T */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-4">
          <ContentMeta
            reviewer="Clinical Review Team"
            reviewerCredentials="Licensed Mental Health Professionals"
            lastReviewed="January 2026"
          />
        </div>
      </section>

      {/* Prevalence */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section-sm">
          <div className="mx-auto max-w-3xl rounded-lg bg-[rgb(var(--color-green))]/10 p-6">
            <p className="text-center text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>
              {condition.prevalence}
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8">Common symptoms</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {condition.symptoms.map((symptom) => (
                <div key={symptom.name} className="rounded-lg border border-[rgb(var(--border))]/50 p-4">
                  <h3 className="mb-2 text-[rgb(var(--color-navy))]" style={{ fontWeight: 500 }}>{symptom.name}</h3>
                  <p className="text-sm text-[rgb(var(--color-text-light))]">{symptom.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8">Possible causes</h2>
            <ul className="space-y-3">
              {condition.causes.map((cause) => (
                <li key={cause} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--color-green))]" />
                  <span className="text-[rgb(var(--color-text-light))]">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4">Evidence-based treatments</h2>
            <p className="mb-8 text-[rgb(var(--color-text-light))]">
              Our licensed therapists use proven, research-backed approaches to treat {condition.name.toLowerCase()}.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {condition.treatments.map((treatment) => (
                <Link
                  key={treatment.name}
                  href={treatment.link}
                  className="group rounded-lg border border-[rgb(var(--border))]/50 p-5 transition-all hover:border-[rgb(var(--color-green))] hover:shadow-md"
                >
                  <h3 className="mb-2 text-[rgb(var(--color-navy))] group-hover:text-[rgb(var(--color-green))]" style={{ fontWeight: 500 }}>
                    {treatment.name}
                  </h3>
                  <p className="mb-3 text-sm text-[rgb(var(--color-text-light))]">{treatment.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[rgb(var(--color-green))]">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self Care */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-linen))]">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8">Self-care strategies</h2>
            <div className="rounded-lg bg-white p-6">
              <ul className="space-y-3">
                {condition.selfCare.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
                    <span className="text-[rgb(var(--color-text-light))]">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg border border-[rgb(var(--color-green))] bg-[rgb(var(--color-green))]/5 p-6">
              <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[rgb(var(--color-green))]" aria-hidden="true" />
              <div>
                <h2 className="mb-4 text-[rgb(var(--color-navy))]">When to seek professional help</h2>
                <ul className="space-y-2">
                  {condition.whenToSeekHelp.map((item) => (
                    <li key={item} className="text-[rgb(var(--color-text-light))]">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site section-sm">
          <div className="mx-auto max-w-4xl">
            <MedicalDisclaimer variant="prominent" />
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site section">
          <div className="mx-auto max-w-4xl">
            <SourcesCitations sources={condition.sources} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-gradient-navy">
        <div className="container-site section text-center">
          <h2 className="mb-6 text-white">Ready to get help?</h2>
          <p className="mx-auto mb-10 max-w-xl text-white/70" style={{ lineHeight: 1.8 }}>
            Our licensed therapists specialize in treating {condition.name.toLowerCase()}. 
            Schedule a consultation to learn how we can help.
          </p>
          <a href={`${mainUrl}/contact`} className="btn-pill btn-pill-white">
            <span className="btn-text">Schedule a consultation</span>
            <span className="btn-arrow"><ArrowRight aria-hidden="true" /></span>
          </a>
        </div>
      </section>
    </main>
  )
}
