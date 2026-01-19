/**
 * Medical Schema (JSON-LD) for Healthcare E-E-A-T Compliance
 * 
 * Uses Schema.org medical types:
 * - MedicalWebPage
 * - MedicalCondition
 * - PsychologicalTreatment
 * - MedicalClinic
 */

export interface MedicalAuthor {
  name: string
  credentials: string
  url?: string
}

export interface MedicalConditionData {
  name: string
  alternateName?: string
  description: string
  symptoms: string[]
  possibleTreatments: string[]
  dsmCode?: string
  icdCode?: string
}

export interface TherapyServiceData {
  name: string
  description: string
  conditionsTreated: string[]
  duration?: string
  frequency?: string
}

/**
 * MedicalWebPage schema for therapy/health content pages
 */
export function createMedicalWebPageSchema({
  name,
  description,
  url,
  datePublished,
  lastReviewed,
  author,
  reviewer,
  medicalAudience = 'Patient',
  specialty = 'Psychology',
  about,
}: {
  name: string
  description: string
  url: string
  datePublished: string
  lastReviewed: string
  author?: MedicalAuthor
  reviewer?: MedicalAuthor
  medicalAudience?: 'Patient' | 'Clinician' | 'MedicalResearcher'
  specialty?: string
  about?: MedicalConditionData | TherapyServiceData
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url,
    datePublished,
    lastReviewed,
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: medicalAudience,
    },
    specialty: {
      '@type': 'MedicalSpecialty',
      name: specialty,
    },
  }

  if (author) {
    schema.author = {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.credentials,
      ...(author.url && { url: author.url }),
    }
  }

  if (reviewer) {
    schema.reviewedBy = {
      '@type': 'Person',
      name: reviewer.name,
      jobTitle: reviewer.credentials,
      ...(reviewer.url && { url: reviewer.url }),
    }
  }

  if (about && 'symptoms' in about) {
    schema.about = createMedicalConditionSchema(about)
  } else if (about) {
    schema.about = createPsychologicalTreatmentSchema(about)
  }

  return schema
}

/**
 * MedicalCondition schema for condition pages (anxiety, depression, etc.)
 */
export function createMedicalConditionSchema(condition: MedicalConditionData) {
  const schema: Record<string, unknown> = {
    '@type': 'MedicalCondition',
    name: condition.name,
    description: condition.description,
    ...(condition.alternateName && { alternateName: condition.alternateName }),
    signOrSymptom: condition.symptoms.map(symptom => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom,
    })),
    possibleTreatment: condition.possibleTreatments.map(treatment => ({
      '@type': 'PsychologicalTreatment',
      name: treatment,
    })),
  }

  if (condition.dsmCode || condition.icdCode) {
    schema.code = []
    if (condition.dsmCode) {
      (schema.code as Array<unknown>).push({
        '@type': 'MedicalCode',
        codingSystem: 'DSM-5',
        codeValue: condition.dsmCode,
      })
    }
    if (condition.icdCode) {
      (schema.code as Array<unknown>).push({
        '@type': 'MedicalCode',
        codingSystem: 'ICD-10',
        codeValue: condition.icdCode,
      })
    }
  }

  return schema
}

/**
 * PsychologicalTreatment schema for therapy service pages
 */
export function createPsychologicalTreatmentSchema(therapy: TherapyServiceData) {
  return {
    '@type': 'PsychologicalTreatment',
    name: therapy.name,
    description: therapy.description,
    ...(therapy.duration && { 
      procedureType: {
        '@type': 'MedicalProcedureType',
        name: `${therapy.duration} session`,
      },
    }),
    relevantCondition: therapy.conditionsTreated.map(condition => ({
      '@type': 'MedicalCondition',
      name: condition,
    })),
  }
}

/**
 * MedicalClinic schema for location pages
 */
export function createMedicalClinicSchema({
  name,
  description,
  url,
  telephone,
  address,
  geo,
  openingHours,
  medicalSpecialty,
  availableService,
  hasCredential,
}: {
  name: string
  description: string
  url: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
  }
  geo?: { latitude: number; longitude: number }
  openingHours: string[]
  medicalSpecialty: string[]
  availableService: string[]
  hasCredential?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressCountry: 'US',
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours,
    })),
    medicalSpecialty: medicalSpecialty.map(specialty => ({
      '@type': 'MedicalSpecialty',
      name: specialty,
    })),
    availableService: availableService.map(service => ({
      '@type': 'MedicalTherapy',
      name: service,
    })),
    ...(hasCredential && {
      hasCredential: hasCredential.map(cred => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: cred,
      })),
    }),
  }
}

/**
 * Common mental health conditions for schema
 */
export const MENTAL_HEALTH_CONDITIONS: Record<string, MedicalConditionData> = {
  anxiety: {
    name: 'Anxiety Disorders',
    alternateName: 'Anxiety',
    description: 'A group of mental health conditions characterized by excessive worry, fear, and related behavioral disturbances.',
    symptoms: [
      'Excessive worry',
      'Restlessness',
      'Difficulty concentrating',
      'Sleep disturbances',
      'Physical symptoms like rapid heartbeat',
      'Avoidance behaviors',
    ],
    possibleTreatments: [
      'Cognitive Behavioral Therapy',
      'Exposure Therapy',
      'Mindfulness-Based Therapy',
      'EMDR',
    ],
    dsmCode: '300.02',
    icdCode: 'F41.1',
  },
  depression: {
    name: 'Major Depressive Disorder',
    alternateName: 'Depression',
    description: 'A mood disorder causing persistent feelings of sadness, hopelessness, and loss of interest in activities.',
    symptoms: [
      'Persistent sad mood',
      'Loss of interest in activities',
      'Changes in appetite or weight',
      'Sleep disturbances',
      'Fatigue',
      'Difficulty concentrating',
      'Feelings of worthlessness',
    ],
    possibleTreatments: [
      'Cognitive Behavioral Therapy',
      'Interpersonal Therapy',
      'Behavioral Activation',
      'Mindfulness-Based Cognitive Therapy',
    ],
    dsmCode: '296.32',
    icdCode: 'F32.1',
  },
  ptsd: {
    name: 'Post-Traumatic Stress Disorder',
    alternateName: 'PTSD',
    description: 'A mental health condition triggered by experiencing or witnessing a traumatic event.',
    symptoms: [
      'Intrusive memories or flashbacks',
      'Avoidance of trauma reminders',
      'Negative changes in mood and thinking',
      'Hypervigilance',
      'Sleep disturbances',
      'Emotional reactivity',
    ],
    possibleTreatments: [
      'EMDR Therapy',
      'Cognitive Processing Therapy',
      'Prolonged Exposure Therapy',
      'Somatic Experiencing',
    ],
    dsmCode: '309.81',
    icdCode: 'F43.10',
  },
  trauma: {
    name: 'Trauma-Related Disorders',
    alternateName: 'Trauma',
    description: 'Mental health conditions resulting from exposure to traumatic events, including PTSD and complex trauma.',
    symptoms: [
      'Re-experiencing traumatic events',
      'Emotional numbing',
      'Hyperarousal',
      'Difficulty with relationships',
      'Negative self-perception',
      'Dissociation',
    ],
    possibleTreatments: [
      'Trauma-Focused CBT',
      'EMDR Therapy',
      'Somatic Therapy',
      'Internal Family Systems',
    ],
  },
  relationship: {
    name: 'Relationship Issues',
    description: 'Difficulties in interpersonal relationships including communication problems, conflict, and attachment issues.',
    symptoms: [
      'Communication difficulties',
      'Frequent conflict',
      'Trust issues',
      'Emotional distance',
      'Attachment concerns',
      'Intimacy problems',
    ],
    possibleTreatments: [
      'Couples Therapy',
      'Emotionally Focused Therapy',
      'Gottman Method',
      'Family Therapy',
    ],
  },
}
