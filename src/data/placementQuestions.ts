import type { FillInQuestion, Language, MCQuestion, ReadingPassage } from '@/types';

/**
 * Question banks for all five placement test parts.
 *
 * Part 1 — MCQuestion (section: 1): 24 questions per language, adaptive MC.
 * Part 2 — FillInQuestion (section: 2): 8 questions per language, typed answers.
 * Part 3 — ReadingPassage (section: 3): 2 passages per language with grouped MC.
 *
 * Parts 4–5 have no question bank (writing prompt is a constant; voice is open-ended).
 *
 * Difficulty scale (anchored to CEFR):
 *   1 = A1   2 = A2   3 = B1   4 = B2   5 = C1
 */

// ---------------------------------------------------------------------------
// PART 1 — FRENCH MC (section 1)
// French daily life: Paris, café culture, métro, grammar pain points.
// ---------------------------------------------------------------------------
export const FRENCH_QUESTIONS: MCQuestion[] = [
  // ============= A1 (difficulty 1) =============
  {
    id: 'fr-1',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 1,
    prompt: 'Complete: "Je ___ étudiante à la Sorbonne."',
    options: ['suis', 'es', 'est', 'sommes'],
    correctIndex: 0,
  },
  {
    id: 'fr-2',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 1,
    prompt: 'A waiter brings your coffee. What do you say?',
    options: ['Pardon', 'Merci', "S'il vous plaît", 'De rien'],
    correctIndex: 1,
  },
  {
    id: 'fr-3',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'grammar',
    difficulty: 1,
    prompt: 'Which article is correct?',
    options: ['le boulangerie', 'la boulangerie', 'les boulangerie', 'un boulangerie'],
    correctIndex: 1,
  },
  {
    id: 'fr-4',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 1,
    prompt: 'It is 3 PM. How would a French speaker say the time?',
    options: ['Il est trois heures', 'Il a trois heures', "C'est trois heures", 'Trois heures il est'],
    correctIndex: 0,
  },

  // ============= A2 (difficulty 2) =============
  {
    id: 'fr-5',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 2,
    prompt: 'Complete: "Demain, nous ___ au marché de Belleville."',
    options: ['allons', 'allez', 'vont', 'sommes allés'],
    correctIndex: 0,
  },
  {
    id: 'fr-6',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 2,
    prompt: 'In a Parisian café, "une noisette" is:',
    options: [
      'A glass of red wine',
      'An espresso with a dash of milk',
      'A small pastry',
      'A type of tea',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-7',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'prepositions',
    difficulty: 2,
    prompt: 'Complete: "Je vais ___ Paris en train, puis ___ Italie en avion."',
    options: ['à / en', 'en / à', 'à / au', 'au / en'],
    correctIndex: 0,
  },
  {
    id: 'fr-8',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 2,
    prompt: 'Make this negative: "Je mange de la viande."',
    options: [
      'Je ne mange pas de la viande.',
      'Je ne mange pas de viande.',
      'Je mange ne pas de viande.',
      'Je ne pas mange de viande.',
    ],
    correctIndex: 1,
  },

  // ============= B1 (difficulty 3) =============
  {
    id: 'fr-9',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 3,
    prompt:
      'Choose the right tense: "Quand je ___ enfant, nous ___ tous les étés en Bretagne."',
    options: [
      'étais / allions',
      'ai été / sommes allés',
      'étais / sommes allés',
      'ai été / allions',
    ],
    correctIndex: 0,
  },
  {
    id: 'fr-10',
    language: 'french',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 3,
    context:
      'Marie habite à Lyon depuis cinq ans. Architecte dans un cabinet près du Rhône, elle prend le métro tous les matins, mais le week-end elle préfère marcher le long des quais.',
    prompt: 'How does Marie usually get to work?',
    options: [
      'On foot, along the river',
      'By bicycle',
      'By metro',
      'She works from home',
    ],
    correctIndex: 2,
  },
  {
    id: 'fr-11',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 3,
    prompt: "Replace the underlined words: \"J'ai donné le cadeau __à Sophie__.",
    options: [
      'Je le lui ai donné.',
      "Je l'ai lui donné.",
      "Je lui l'ai donné.",
      "Je le l'ai donné.",
    ],
    correctIndex: 0,
  },
  {
    id: 'fr-12',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 3,
    prompt: 'Your French colleague says "On se tutoie?" — they are asking:',
    options: [
      'If you want to leave together',
      'If you can use the informal "tu" with each other',
      'If you have met before',
      'If you would like a coffee',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-13',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'prepositions',
    difficulty: 3,
    prompt: 'Complete: "Ce livre est ___ Camus, il a été publié ___ 1942."',
    options: ['de / en', 'par / dans', 'à / en', 'de / dans'],
    correctIndex: 0,
  },

  // ============= B2 (difficulty 4) =============
  {
    id: 'fr-14',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 4,
    prompt: "Complete: \"Si j'avais su, je ___ autrement.\"",
    options: ['agirais', 'aurais agi', 'agissais', 'aurai agi'],
    correctIndex: 1,
  },
  {
    id: 'fr-15',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 4,
    prompt: 'Which sentence uses the subjunctive correctly?',
    options: [
      "Bien qu'il fait froid, nous sortons.",
      "Bien qu'il fasse froid, nous sortons.",
      "Bien qu'il fera froid, nous sortons.",
      "Bien qu'il faisait froid, nous sortons.",
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-16',
    language: 'french',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 4,
    context:
      "À la rentrée, les Parisiens retrouvent leurs habitudes : les terrasses se remplissent dès la fin d'après-midi, les libraires sortent leurs nouveautés, et les enfants reprennent le chemin de l'école avec un mélange d'appréhension et d'enthousiasme.",
    prompt: 'What does the passage suggest about la rentrée?',
    options: [
      'It is a stressful, mostly negative period for everyone.',
      'It marks a return to familiar routines, with mixed feelings for children.',
      'It is mainly a commercial event for bookshops.',
      'Parisians tend to leave the city during this time.',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-17',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 4,
    prompt: 'What does the expression "se débrouiller" mean in everyday French?',
    options: [
      'To argue loudly',
      'To manage on your own / get by',
      'To forget something',
      'To tidy up',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-18',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 4,
    prompt:
      "Complete: \"C'est la ville ___ je suis née et ___ j'ai passé toute mon enfance.\"",
    options: ['où / où', 'que / où', 'dans laquelle / que', 'où / que'],
    correctIndex: 0,
  },

  // ============= C1 (difficulty 5) =============
  {
    id: 'fr-19',
    language: 'french',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 5,
    context:
      "Quoique l'orage eût grondé toute la nuit, les organisateurs s'obstinèrent à maintenir le festival en plein air, persuadés qu'une éclaircie finirait par récompenser leur ténacité — pari qui, du reste, leur réussit pleinement.",
    prompt: 'What is implied about the festival?',
    options: [
      'It was cancelled because of the storm.',
      'The organizers stubbornly kept it outdoors and were ultimately proven right.',
      'The weather forced it to move indoors at the last minute.',
      'The organizers regretted their decision.',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-20',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 5,
    prompt: "In French, \"tirer les vers du nez à quelqu'un\" means:",
    options: [
      'To insult someone',
      'To get someone to reveal information by persistent questioning',
      'To clean something thoroughly',
      'To miss someone deeply',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-21',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 5,
    prompt: 'Choose the correctly formed sentence:',
    options: [
      "Je ne pense pas qu'il vienne demain.",
      "Je ne pense pas qu'il viendra demain.",
      "Je ne pense pas qu'il vient demain.",
      "Je ne pense pas qu'il venait demain.",
    ],
    correctIndex: 0,
  },
  {
    id: 'fr-22',
    language: 'french',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 5,
    prompt:
      'Which sentence uses the right register for a formal email to a recruiter?',
    options: [
      "Salut, je voulais juste savoir si t'as reçu mon CV.",
      'Bonjour, je vous prie de bien vouloir me confirmer la bonne réception de ma candidature.',
      'Coucou, dis-moi si mon CV est arrivé !',
      'Hello, est-ce que mon CV est bien arrivé ?',
    ],
    correctIndex: 1,
  },
  {
    id: 'fr-23',
    language: 'french',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 5,
    prompt: 'In context, "un coup de fil" most naturally translates as:',
    options: ['A close call', 'A phone call', 'A piece of advice', 'A fight'],
    correctIndex: 1,
  },
  {
    id: 'fr-24',
    language: 'french',
    section: 1,
    type: 'reading',
    category: 'real-world-usage',
    difficulty: 5,
    context:
      "« Écoutez, je ne vous le cache pas, le dossier est loin d'être bouclé, mais nous sommes en bonne voie. »",
    prompt: 'How should this sentence be understood?',
    options: [
      'The case is fully resolved.',
      'The speaker is hiding important information from the listener.',
      'The case is not yet finished, but progress is being made.',
      'The speaker has given up on the case.',
    ],
    correctIndex: 2,
  },
];

// ---------------------------------------------------------------------------
// PART 1 — SPANISH MC (section 1)
// Anchored in Spain and Latin America: ser/estar, por/para, subjunctive,
// preterite vs imperfect, common idioms.
// ---------------------------------------------------------------------------
export const SPANISH_QUESTIONS: MCQuestion[] = [
  // ============= A1 (difficulty 1) =============
  {
    id: 'es-1',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'grammar',
    difficulty: 1,
    prompt: 'Complete: "Yo ___ de Buenos Aires, pero vivo en Madrid."',
    options: ['soy', 'estoy', 'es', 'somos'],
    correctIndex: 0,
  },
  {
    id: 'es-2',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 1,
    prompt: 'A friend sneezes. What is the most common thing to say in Spanish?',
    options: ['¡Hola!', '¡Salud!', '¡Vale!', '¡Ya!'],
    correctIndex: 1,
  },
  {
    id: 'es-3',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'grammar',
    difficulty: 1,
    prompt: 'Which form is correct?',
    options: ['el problema', 'la problema', 'lo problema', 'los problema'],
    correctIndex: 0,
  },
  {
    id: 'es-4',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 1,
    prompt: 'How do you say "I have two siblings" in Spanish?',
    options: [
      'Tengo dos hermanos.',
      'Tienes dos hermanos.',
      'Tiene dos hermanos.',
      'He dos hermanos.',
    ],
    correctIndex: 0,
  },

  // ============= A2 (difficulty 2) =============
  {
    id: 'es-5',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'grammar',
    difficulty: 2,
    prompt: 'Choose the correct form: "Mi café ___ frío."',
    options: ['es', 'está', 'son', 'están'],
    correctIndex: 1,
  },
  {
    id: 'es-6',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 2,
    prompt: 'In Spain, "una caña" usually refers to:',
    options: [
      'A small glass of draft beer',
      'A walking stick',
      'A type of bread',
      'A piece of cake',
    ],
    correctIndex: 0,
  },
  {
    id: 'es-7',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'prepositions',
    difficulty: 2,
    prompt: 'Complete: "Este regalo es ___ ti, lo compré ___ veinte euros."',
    options: ['para / por', 'por / para', 'para / para', 'por / por'],
    correctIndex: 0,
  },
  {
    id: 'es-8',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 2,
    prompt: 'Which sentence is correct?',
    options: [
      'Me gusta los tacos.',
      'Me gustan los tacos.',
      'Yo gusto los tacos.',
      'A mí gusto los tacos.',
    ],
    correctIndex: 1,
  },

  // ============= B1 (difficulty 3) =============
  {
    id: 'es-9',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 3,
    prompt:
      'Choose the right tense: "Cuando ___ pequeño, mi familia y yo ___ a la playa cada verano."',
    options: ['era / íbamos', 'fui / fuimos', 'era / fuimos', 'fui / íbamos'],
    correctIndex: 0,
  },
  {
    id: 'es-10',
    language: 'spanish',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 3,
    context:
      'Carlos lleva tres años viviendo en Madrid. Trabaja como diseñador gráfico en una agencia cerca de Gran Vía, pero los fines de semana suele coger el AVE para visitar a sus padres en Sevilla.',
    prompt: 'What does Carlos typically do on weekends?',
    options: [
      'Stays in Madrid to work overtime',
      'Travels to Seville to visit his parents',
      'Goes to the beach with friends',
      'Visits his parents in Madrid',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-11',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 3,
    prompt: 'Replace the underlined words: "Le di __las llaves__ a Marta."',
    options: ['Se las di.', 'Le las di.', 'Las le di.', 'Se les di.'],
    correctIndex: 0,
  },
  {
    id: 'es-12',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 3,
    prompt: 'A Spanish friend texts: "¿Quedamos a las ocho?" — they are asking:',
    options: [
      'If you can stay until eight',
      'If you want to meet up at eight',
      'If you are free at eight',
      "If it is already eight o'clock",
    ],
    correctIndex: 1,
  },
  {
    id: 'es-13',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 3,
    prompt: 'Complete: "Esta mañana ___ a mi jefe en el ascensor."',
    options: ['he visto', 'vi', 'veía', 'había visto'],
    correctIndex: 0,
    correctIndices: [0, 1], // he visto (Spain) and vi (Latin America) are both correct
  },

  // ============= B2 (difficulty 4) =============
  {
    id: 'es-14',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 4,
    prompt: 'Complete: "Si tuviera más tiempo, ___ contigo al concierto."',
    options: ['iría', 'iré', 'iba', 'había ido'],
    correctIndex: 0,
  },
  {
    id: 'es-15',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 4,
    prompt: 'Pick the sentence with the correct subjunctive form:',
    options: [
      'Es importante que tú estudias para el examen.',
      'Es importante que tú estudies para el examen.',
      'Es importante que tú estudiarás para el examen.',
      'Es importante que tú has estudiado para el examen.',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-16',
    language: 'spanish',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 4,
    context:
      'En España, la sobremesa es esa parte de la comida que ya no es comer, pero todavía no es irse. Se queda uno en la mesa, con el café o un chupito, hablando de cualquier cosa, sin prisa, a veces durante horas.',
    prompt: 'According to the passage, sobremesa is best described as:',
    options: [
      'A specific dessert eaten after lunch.',
      'A long, unhurried conversation that continues at the table after the meal.',
      'The act of clearing the table at the end of a meal.',
      'A formal toast given before coffee.',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-17',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 4,
    prompt: 'What does "echar de menos" mean in everyday Spanish?',
    options: [
      'To throw away',
      'To miss someone or something',
      'To reduce in size',
      'To arrive late',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-18',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 4,
    prompt: 'Choose the correct sentence:',
    options: [
      'A mi hermana le vi en el parque.',
      'A mi hermana la vi en el parque.',
      'A mi hermana se vi en el parque.',
      'A mi hermana lo vi en el parque.',
    ],
    correctIndex: 1,
  },

  // ============= C1 (difficulty 5) =============
  {
    id: 'es-19',
    language: 'spanish',
    section: 1,
    type: 'reading',
    category: 'reading',
    difficulty: 5,
    context:
      'Por más que la lluvia hubiera arreciado durante toda la madrugada, la organización se empeñó en mantener el evento al aire libre, convencida de que el cielo terminaría despejándose — apuesta que, a la postre, les salió redonda.',
    prompt: 'What does the passage imply?',
    options: [
      'The event was cancelled due to the heavy rain.',
      'The organizers insisted on keeping the event outdoors and the gamble paid off.',
      'The event was moved indoors halfway through.',
      'The organizers regretted holding the event outdoors.',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-20',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 5,
    prompt: 'The Spanish expression "no tener pelos en la lengua" means:',
    options: [
      'To be very polite',
      'To be unable to speak',
      'To speak very directly, without filtering',
      'To be a beginner at something',
    ],
    correctIndex: 2,
  },
  {
    id: 'es-21',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 5,
    prompt: 'Choose the most natural sentence:',
    options: [
      'Cuando llegues, llámame.',
      'Cuando llegas, llámame.',
      'Cuando llegarás, llámame.',
      'Cuando has llegado, llámame.',
    ],
    correctIndex: 0,
  },
  {
    id: 'es-22',
    language: 'spanish',
    section: 1,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 5,
    prompt: 'Which sentence is appropriate for a formal cover letter?',
    options: [
      'Hola, te mando mi CV a ver si te interesa.',
      'Buenas, mira, ahí va mi CV por si acaso.',
      'Estimada Sra. López: Adjunto le remito mi currículum para su consideración.',
      'Oye, te paso el CV y me dices, ¿vale?',
    ],
    correctIndex: 2,
  },
  {
    id: 'es-23',
    language: 'spanish',
    section: 1,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 5,
    prompt: 'In context, "estar hasta las narices" most naturally means:',
    options: [
      'To be very tall',
      'To be fed up / sick of something',
      'To smell something strong',
      'To be late',
    ],
    correctIndex: 1,
  },
  {
    id: 'es-24',
    language: 'spanish',
    section: 1,
    type: 'reading',
    category: 'real-world-usage',
    difficulty: 5,
    context:
      '"Mira, no te voy a engañar: el proyecto está verde, todavía nos queda muchísimo, pero vamos por buen camino."',
    prompt: 'What is the speaker actually conveying?',
    options: [
      'The project is finished and successful.',
      'The speaker is hiding the truth about the project.',
      'The project is still immature and far from done, but moving in the right direction.',
      'The project has been abandoned.',
    ],
    correctIndex: 2,
  },
];

// ---------------------------------------------------------------------------
// PART 2 — FRENCH FILL-IN (section 2)
// 8 questions, 2 per difficulty 1–4. correctAnswer is pre-lowercased.
// Levenshtein tolerance (distance ≤ 1) applies when correctAnswer.length ≥ 5.
// ---------------------------------------------------------------------------
export const FRENCH_FILL_IN_QUESTIONS: FillInQuestion[] = [
  // ===== A1 (difficulty 1) =====
  {
    id: 'fr-fill-1',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 1,
    prompt: 'Complete: "Elle ___ seize ans."',
    correctAnswer: 'a',
  },
  {
    id: 'fr-fill-2',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'grammar',
    difficulty: 1,
    prompt: "Complete: \"C'est ___ idée formidable !\"",
    correctAnswer: 'une',
  },

  // ===== A2 (difficulty 2) =====
  {
    id: 'fr-fill-3',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'prepositions',
    difficulty: 2,
    prompt: 'Complete: "Je vais ___ États-Unis en août."',
    correctAnswer: 'aux',
  },
  {
    id: 'fr-fill-4',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 2,
    prompt: 'Complete: "Il ___ du café tous les matins avant de partir."',
    correctAnswer: 'boit',
  },

  // ===== B1 (difficulty 3) =====
  {
    id: 'fr-fill-5',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 3,
    prompt: 'Complete: "La ville ___ je vous ai parlé la semaine dernière s\'appelle Bordeaux."',
    correctAnswer: 'dont',
  },
  {
    id: 'fr-fill-6',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 3,
    prompt: 'Complete: "Il faut ___ tu arrives à l\'heure pour la réunion."',
    correctAnswer: 'que',
  },

  // ===== B2 (difficulty 4) =====
  {
    id: 'fr-fill-7',
    language: 'french',
    section: 2,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 4,
    prompt: 'Complete: "Si nous ___ su, nous n\'aurions jamais accepté cette proposition."',
    correctAnswer: 'avions',
  },
  {
    id: 'fr-fill-8',
    language: 'french',
    section: 2,
    type: 'vocabulary',
    category: 'vocabulary',
    difficulty: 4,
    prompt: 'Complete: "Après des semaines de négociations, les deux parties ont trouvé un ___."',
    correctAnswer: 'accord',
  },
];

// ---------------------------------------------------------------------------
// PART 2 — SPANISH FILL-IN (section 2)
// ---------------------------------------------------------------------------
export const SPANISH_FILL_IN_QUESTIONS: FillInQuestion[] = [
  // ===== A1 (difficulty 1) =====
  {
    id: 'es-fill-1',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'grammar',
    difficulty: 1,
    prompt: 'Complete: "Ella ___ estudiante de medicina en la Universidad de Barcelona."',
    correctAnswer: 'es',
  },
  {
    id: 'es-fill-2',
    language: 'spanish',
    section: 2,
    type: 'vocabulary',
    category: 'real-world-usage',
    difficulty: 1,
    prompt: 'Complete: "Buenos días. ¿Cómo ___ usted hoy?"',
    correctAnswer: 'está',
  },

  // ===== A2 (difficulty 2) =====
  {
    id: 'es-fill-3',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'grammar',
    difficulty: 2,
    prompt: 'Complete: "Mi café ___ frío cuando por fin lo probé."',
    correctAnswer: 'estaba',
  },
  {
    id: 'es-fill-4',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'prepositions',
    difficulty: 2,
    prompt: 'Complete: "Este regalo es ___ mi madre; lo compré ayer."',
    correctAnswer: 'para',
  },

  // ===== B1 (difficulty 3) =====
  {
    id: 'es-fill-5',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 3,
    prompt: 'Complete: "Cuando era niño, siempre ___ al parque con mis amigos."',
    correctAnswer: 'iba',
  },
  {
    id: 'es-fill-6',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'pronouns',
    difficulty: 3,
    prompt: 'Complete: "Le compré las flores a María; se ___ di ayer por la tarde."',
    correctAnswer: 'las',
  },

  // ===== B2 (difficulty 4) =====
  {
    id: 'es-fill-7',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'verb-tense',
    difficulty: 4,
    prompt: 'Complete: "Si ___ más tiempo libre, iría contigo al concierto este fin de semana."',
    correctAnswer: 'tuviera',
    // "tuvieras" is accepted in voseo dialects
    acceptedAlternatives: ['tuvieras'],
  },
  {
    id: 'es-fill-8',
    language: 'spanish',
    section: 2,
    type: 'grammar',
    category: 'sentence-structure',
    difficulty: 4,
    prompt: 'Complete: "Es fundamental que los alumnos ___ a clase a tiempo."',
    correctAnswer: 'lleguen',
  },
];

// ---------------------------------------------------------------------------
// PART 3 — FRENCH READING PASSAGES (section 3)
// Two passages: one B1, one B2. Questions are grouped MC within the passage.
// ---------------------------------------------------------------------------
export const FRENCH_READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'fr-passage-1',
    language: 'french',
    section: 3,
    difficulty: 3,
    passageText:
      "Depuis quelques années, le télétravail s'est imposé dans de nombreuses entreprises françaises. Certains salariés apprécient cette flexibilité : plus besoin de prendre le métro aux heures de pointe, et la possibilité de s'organiser à leur guise. D'autres, en revanche, trouvent difficile de séparer vie professionnelle et vie personnelle lorsque le bureau est installé dans leur salon.",
    questions: [
      {
        id: 'fr-p1-q1',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'What do some employees appreciate about remote work?',
        options: [
          'Having a larger workspace',
          'Avoiding the metro commute during rush hour',
          'Receiving a higher salary',
          'Working alongside international colleagues',
        ],
        correctIndex: 1,
      },
      {
        id: 'fr-p1-q2',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'What challenge do some remote workers face?',
        options: [
          'Learning new software tools',
          'Managing tight deadlines',
          'Separating professional and personal life',
          'Finding a quiet environment',
        ],
        correctIndex: 2,
      },
      {
        id: 'fr-p1-q3',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'What is the main idea of the passage?',
        options: [
          'French companies are facing serious financial difficulties.',
          'Remote work has both benefits and drawbacks for employees.',
          'The Paris metro is too crowded during rush hour.',
          'Most French workers prefer to stay in the office.',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'fr-passage-2',
    language: 'french',
    section: 3,
    difficulty: 4,
    passageText:
      "La langue française, souvent perçue comme rigoureuse et codifiée, est en réalité bien plus dynamique qu'on ne le croit. Chaque génération y apporte ses néologismes, ses emprunts à l'anglais, ses raccourcis de l'oral. L'Académie française, gardienne officielle de la norme, tente de réguler ces évolutions — non sans susciter des débats passionnés sur la nécessité de préserver la langue.",
    questions: [
      {
        id: 'fr-p2-q1',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'What does the passage imply about the French language?',
        options: [
          'It is a declining language that urgently needs protection.',
          'It is more dynamic and evolving than commonly assumed.',
          'It should adopt more English words to remain relevant.',
          'The Académie française has fully standardised it.',
        ],
        correctIndex: 1,
      },
      {
        id: 'fr-p2-q2',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'What role does the Académie française play?',
        options: [
          'It publishes a new dictionary every year.',
          'It runs language schools across France.',
          'It tries to regulate changes to the language.',
          'It approves new words from social media.',
        ],
        correctIndex: 2,
      },
      {
        id: 'fr-p2-q3',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'vocabulary',
        difficulty: 4,
        prompt: 'In this context, "néologismes" most likely means:',
        options: [
          'Old-fashioned expressions that have been revived',
          'Grammatical errors gradually accepted as correct',
          'New words or expressions created by each generation',
          'Terms borrowed directly from Latin',
        ],
        correctIndex: 2,
      },
      {
        id: 'fr-p2-q4',
        language: 'french',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'What passionate debates does the passage mention?',
        options: [
          'Whether French should be the sole language of the EU',
          'Whether language evolution threatens or enriches French',
          'Whether the Académie française should be abolished',
          'Whether English words should be banned from French media',
        ],
        correctIndex: 1,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// PART 3 — SPANISH READING PASSAGES (section 3)
// ---------------------------------------------------------------------------
export const SPANISH_READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'es-passage-1',
    language: 'spanish',
    section: 3,
    difficulty: 3,
    passageText:
      'En muchas ciudades españolas, la bicicleta se está convirtiendo en un medio de transporte cada vez más popular. Varios ayuntamientos han invertido en carriles bici y sistemas de préstamo municipal. Sin embargo, algunos ciudadanos siguen prefiriendo el coche por comodidad, especialmente cuando tienen que hacer trayectos largos o llevar compras pesadas.',
    questions: [
      {
        id: 'es-p1-q1',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'What trend does the passage describe?',
        options: [
          'The decline of public transport in Spain',
          'The growing popularity of cycling in Spanish cities',
          'Conflict between cyclists and car drivers',
          'Government plans to ban cars from city centres',
        ],
        correctIndex: 1,
      },
      {
        id: 'es-p1-q2',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'What have local councils done to encourage cycling?',
        options: [
          'Built new roads for cars',
          'Introduced free public transport',
          'Invested in bike lanes and rental systems',
          'Banned bikes from certain areas',
        ],
        correctIndex: 2,
      },
      {
        id: 'es-p1-q3',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 3,
        prompt: 'Why do some people still prefer cars?',
        options: [
          'Cars are cheaper than bicycles in Spain',
          'Cycling infrastructure is still very limited',
          'They prefer car culture for social reasons',
          'They need them for long trips or carrying heavy shopping',
        ],
        correctIndex: 3,
      },
    ],
  },
  {
    id: 'es-passage-2',
    language: 'spanish',
    section: 3,
    difficulty: 4,
    passageText:
      'La economía circular propone un modelo donde los residuos de un proceso productivo se convierten en recursos para otro. A diferencia del modelo lineal — producir, usar, desechar —, este enfoque busca cerrar el ciclo y reducir el impacto ambiental. Aunque varias empresas europeas han comenzado a adoptarlo, su implementación a gran escala sigue siendo un reto considerable.',
    questions: [
      {
        id: 'es-p2-q1',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'What does the circular economy model propose?',
        options: [
          'Producing more goods with fewer workers',
          'Recycling only plastic and glass materials',
          'Converting waste from one process into resources for another',
          'Banning non-renewable energy sources',
        ],
        correctIndex: 2,
      },
      {
        id: 'es-p2-q2',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'How does the circular model differ from the linear model?',
        options: [
          'It uses more energy but produces less waste',
          'It aims to close the production cycle rather than discard at the end',
          'It relies entirely on renewable energy',
          'It produces goods more quickly and cheaply',
        ],
        correctIndex: 1,
      },
      {
        id: 'es-p2-q3',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'reading',
        difficulty: 4,
        prompt: 'What challenge does the passage mention?',
        options: [
          'Finding companies willing to try the model',
          'Convincing governments to fund the transition',
          'Implementing the circular economy at large scale',
          'Making it cost-competitive with traditional manufacturing',
        ],
        correctIndex: 2,
      },
      {
        id: 'es-p2-q4',
        language: 'spanish',
        section: 3,
        type: 'reading',
        category: 'vocabulary',
        difficulty: 4,
        prompt: '"Desechar" in this context most likely means:',
        options: [
          'To recycle carefully',
          'To store for later use',
          'To throw away / discard',
          'To sell to other companies',
        ],
        correctIndex: 2,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// PART 4 — WRITING PROMPTS
// One per language. No bank needed — the prompt is a constant.
// ---------------------------------------------------------------------------
export const WRITING_PROMPTS: Record<Language, string> = {
  french: `Décrivez un endroit où vous aimez passer du temps libre. Qu'est-ce qui le rend spécial pour vous ? (5–8 phrases)`,
  spanish: `Describe un lugar donde te gusta pasar tu tiempo libre. ¿Qué lo hace especial para ti? (5–8 frases)`,
};

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

export function getPlacementQuestions(language: Language): MCQuestion[] {
  return language === 'french' ? FRENCH_QUESTIONS : SPANISH_QUESTIONS;
}

export function getFillInQuestions(language: Language): FillInQuestion[] {
  return language === 'french' ? FRENCH_FILL_IN_QUESTIONS : SPANISH_FILL_IN_QUESTIONS;
}

export function getReadingPassages(language: Language): ReadingPassage[] {
  return language === 'french' ? FRENCH_READING_PASSAGES : SPANISH_READING_PASSAGES;
}

export function getWritingPrompt(language: Language): string {
  return WRITING_PROMPTS[language];
}
