// FAQ content for page and FAQPage JSON-LD schema

export const faqCategories = [
  {
    name: 'General',
    questions: [
      { q: 'Where are you located?', a: 'We have five locations in the greater Long Island area. You can find us in Garden City, Port Jefferson, Massapequa, Smithtown, and Rockville Centre. Each location offers both therapy and wellness services. To minimize stress before and after your appointments, each location has dedicated parking for your convenience.' },
      { q: 'Do you take insurance?', a: 'We are in network for most major insurance providers in New York. Insurance coverage applies to both therapy and applicable wellness services. We accept Aetna, Cigna, Optum, UHC, Oxford, UMR, Oscar, 1199, Meritain, Magnacare, Humana, Medicare, NYSHIP, Student Resource Allied Benefit, ComPsych, VA Community Care benefits, MVP, and Northwell Brighton Health.' },
      { q: 'Do you offer discounts or sliding scale fees?', a: 'Yes, we offer a limited number of sliding scale spots based on financial need and availability. If you are paying out of pocket and have concerns about affordability, we encourage you to speak with us directly. Our goal is to make therapy as accessible as possible.' },
      { q: 'How do you incorporate therapy and wellness in a collaborative treatment plan?', a: 'At Pathways Within, we believe true healing happens when the mind and body are supported together. Our therapy services focus on emotional insight, personal growth, and mental wellbeing, but we do not stop there. Through our 360 degree approach to care, we provide a truly holistic experience.' },
    ],
  },
  {
    name: 'Scheduling',
    questions: [
      { q: 'How often will we meet?', a: 'At the beginning, we will meet once a week, more often if it is deemed therapeutically necessary, for as long as our therapeutic relationship feels beneficial to you. The work you are doing may grow or change, and the schedule you need may vary.' },
      { q: 'How long do sessions last?', a: 'Each therapy session will be one full hour. This is your hour and we are committed to showing up wholly to support the work you are so bravely doing.' },
      { q: 'What is your cancellation policy?', a: 'Appointments must be canceled 72 hours in advance. There will be a $75 fee for appointments canceled within the 72 hour window or missed without notice.' },
      { q: 'Do you have evening appointments?', a: 'We do offer appointments outside regular business hours. With advance scheduling, we can accommodate schedules of every kind. Our appointments can be offered up to 11pm with select clinicians.' },
    ],
  },
  {
    name: 'Telehealth',
    questions: [
      { q: 'Do you offer virtual visits?', a: 'Yes, we offer virtual visits! Called telehealth, our therapy services can be offered in any format you feel most comfortable with. Whether that means you meet with your therapist every time through our virtual platform or you switch it up between telehealth and in person visits, we are happy to work with you.' },
      { q: 'Is virtual therapy private?', a: 'Absolutely. SimplePractice is both HIPAA compliant and VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality in every format.' },
      { q: 'Where can you provide telehealth?', a: 'We offer telehealth therapy to clients in New York, New Jersey, North Carolina, and Florida.' },
    ],
  },
  {
    name: 'Therapy',
    questions: [
      { q: 'Why would I want to talk to a therapist?', a: 'Therapists are people too! The benefit of talking to a therapist is the training and experience we have collected over the years. Friends can be a great source of support, but they are often unable to provide an unbiased and judgment free perspective.' },
      { q: 'How long do I have to be in therapy?', a: 'Therapy is meant to work for you, so that means we accommodate any preferences you may have. The length and frequency of therapy will depend on your goals and the effort you put forth. You get to decide and the process can be as flexible as you need.' },
      { q: 'How confidential is therapy?', a: 'Your privacy is a major ethical concern for us. We adhere to the guidelines set forth by the American Psychological Association (APA) and HIPAA. There are some limitations: if you express the intent to hurt a child, an elderly person, or yourself, we are required to report some information to relevant authorities.' },
      { q: 'What happens in a counseling session?', a: 'Part of that is entirely up to you. We want your session to be yours. It is a space for you to talk about whatever is on your mind. Your first session will be where you have the opportunity to work out your specific concerns.' },
    ],
  },
] as const

export const allFaqs = faqCategories.flatMap((c) =>
  c.questions.map((q) => ({ question: q.q, answer: q.a }))
)
