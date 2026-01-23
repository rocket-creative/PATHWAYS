export interface Condition {
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
}

export const conditions: Record<string, Condition> = {
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
      { name: 'Cognitive Behavioral Therapy (CBT)', description: 'Helps identify and change negative thought patterns and behaviors', link: '/wisdom/services/individual-therapy' },
      { name: 'Exposure therapy', description: 'Gradual, controlled exposure to anxiety triggers to reduce fear response', link: '/wisdom/services/individual-therapy' },
      { name: 'EMDR therapy', description: 'Processes anxiety-related memories and reduces their emotional impact', link: '/wisdom/services/emdr-therapy' },
      { name: 'Somatic therapy', description: 'Addresses anxiety held in the body through mind-body techniques', link: '/wisdom/services/somatic-therapy' },
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
      { name: 'Cognitive Behavioral Therapy (CBT)', description: 'Identifies and changes negative thought patterns contributing to depression', link: '/wisdom/services/individual-therapy' },
      { name: 'Interpersonal Therapy', description: 'Focuses on improving relationships and communication skills', link: '/wisdom/services/individual-therapy' },
      { name: 'Behavioral Activation', description: 'Increases engagement in positive activities to improve mood', link: '/wisdom/services/individual-therapy' },
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
      { name: 'EMDR therapy', description: 'Processes traumatic memories through bilateral stimulation to reduce their emotional impact', link: '/wisdom/services/emdr-therapy' },
      { name: 'Trauma-focused CBT', description: 'Addresses trauma-related thoughts, feelings, and behaviors', link: '/wisdom/services/trauma-therapy' },
      { name: 'Somatic therapy', description: 'Releases trauma stored in the body through mind-body techniques', link: '/wisdom/services/somatic-therapy' },
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
  },
}

export const conditionsList = Object.values(conditions)
