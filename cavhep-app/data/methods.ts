export interface ContraceptiveMethod {
  id: string;
  name: string;
  category: 'long-acting' | 'short-acting' | 'barrier' | 'natural';
  duration: string;
  effectiveness: number;
  icon: string;
  color: string;
  colorPale: string;
  summary: string;
  howItWorks: string;
  benefits: string[];
  sideEffects: string[];
  whoCanUse: string;
  whoShouldAvoid: string;
  availability: 'widely' | 'clinic-only' | 'pharmacy';
}

export const METHODS: ContraceptiveMethod[] = [
  {
    id: 'implant',
    name: 'Implant',
    category: 'long-acting',
    duration: '3–5 ans',
    effectiveness: 99,
    icon: '💉',
    color: '#1E5631',
    colorPale: '#E8F5EE',
    summary: 'Un petit bâtonnet inséré sous la peau du bras. Très efficace et durable.',
    howItWorks:
      "Libère de faibles doses de progestérone qui empêchent l'ovulation et épaississent la glaire cervicale.",
    benefits: [
      'Très efficace (>99%)',
      'Dure 3 à 5 ans',
      'Réversible à tout moment',
      'Discret et pratique',
      'Pas de prise quotidienne',
    ],
    sideEffects: [
      'Changements des règles (irrégularités)',
      'Maux de tête possibles',
      "Légère douleur au site d'insertion",
    ],
    whoCanUse: "La plupart des femmes, y compris celles qui allaitent.",
    whoShouldAvoid:
      "Femmes avec certains cancers hormonaux sensibles. Consulter un professionnel.",
    availability: 'clinic-only',
  },
  {
    id: 'iud',
    name: 'DIU / Stérilet',
    category: 'long-acting',
    duration: '5–10 ans',
    effectiveness: 99,
    icon: '🔵',
    color: '#1E5631',
    colorPale: '#E8F5EE',
    summary: "Un petit dispositif en T inséré dans l'utérus. Long terme, réversible.",
    howItWorks:
      "Le DIU au cuivre empêche la fécondation. Le DIU hormonal épaissit aussi la glaire cervicale.",
    benefits: [
      'Efficacité >99%',
      'Durée 5 à 10 ans selon le type',
      'Réversible : fertilité retrouvée rapidement',
      'Option non-hormonale disponible (cuivre)',
    ],
    sideEffects: [
      'Règles plus abondantes (DIU cuivre)',
      'Crampes les premiers jours',
      "Risque faible d'expulsion",
    ],
    whoCanUse: "La majorité des femmes, y compris les nullipares.",
    whoShouldAvoid:
      "Femmes avec anomalie utérine, IST active non traitée. Consulter un professionnel.",
    availability: 'clinic-only',
  },
  {
    id: 'injectable',
    name: 'Injectable',
    category: 'short-acting',
    duration: '2–3 mois',
    effectiveness: 94,
    icon: '💊',
    color: '#D4621A',
    colorPale: '#FDF0E8',
    summary: "Une injection toutes les 2 à 3 mois. Pratique et discret.",
    howItWorks:
      "Libère de la progestérone pour empêcher l'ovulation et épaissir la glaire cervicale.",
    benefits: [
      'Pas de prise quotidienne',
      'Discret',
      'Peut réduire les douleurs menstruelles',
      'Efficace si injection régulière',
    ],
    sideEffects: [
      'Irrégularités menstruelles fréquentes',
      'Délai de retour à la fertilité (3–12 mois)',
      'Possible prise de poids',
    ],
    whoCanUse: "La plupart des femmes. Pratique pour celles qui allaitent.",
    whoShouldAvoid:
      "Femmes souhaitant une grossesse à court terme. Consulter un professionnel.",
    availability: 'clinic-only',
  },
  {
    id: 'pill',
    name: 'Pilule',
    category: 'short-acting',
    duration: 'Usage quotidien',
    effectiveness: 91,
    icon: '💊',
    color: '#D4621A',
    colorPale: '#FDF0E8',
    summary: "Un comprimé à prendre chaque jour. Simple et réversible.",
    howItWorks:
      "Les hormones empêchent l'ovulation et modifient l'endomètre.",
    benefits: [
      'Réversibilité immédiate',
      'Régulation des règles',
      'Réduction des douleurs menstruelles',
      'Disponible en pharmacie',
    ],
    sideEffects: [
      'Oubli = risque de grossesse',
      'Nausées initiales',
      "Changements d'humeur possibles",
    ],
    whoCanUse: "La majorité des femmes en bonne santé.",
    whoShouldAvoid:
      "Femmes qui allaitent (dans les 6 premières semaines), fumeuses de plus de 35 ans. Consulter un professionnel.",
    availability: 'pharmacy',
  },
  {
    id: 'condom',
    name: 'Préservatif',
    category: 'barrier',
    duration: 'Usage unique',
    effectiveness: 85,
    icon: '🛡️',
    color: '#F5A623',
    colorPale: '#FEF6E4',
    summary:
      "Protection contre les grossesses ET les IST. Seule méthode double-protection.",
    howItWorks:
      "Barrière physique empêchant le contact entre spermatozoïdes et ovule, et bloquant les agents infectieux.",
    benefits: [
      'Protège des IST (VIH, etc.)',
      'Sans ordonnance, abordable',
      "Pas d'effets hormonaux",
      'Utilisable immédiatement',
    ],
    sideEffects: [
      'Efficacité réduite si mal utilisé',
      'Allergie au latex (rare)',
    ],
    whoCanUse: "Tout le monde.",
    whoShouldAvoid:
      "Personnes allergiques au latex : préférer les préservatifs en polyuréthane.",
    availability: 'widely',
  },
  {
    id: 'fertility-awareness',
    name: 'Méthode naturelle',
    category: 'natural',
    duration: 'Suivi quotidien',
    effectiveness: 76,
    icon: '📅',
    color: '#4A9B6F',
    colorPale: '#E8F5EE',
    summary:
      "Suivi du cycle pour identifier les jours fertiles. Aucun produit chimique.",
    howItWorks:
      "Observation des signes du corps (température, glaire cervicale, cycle) pour identifier les jours fertiles.",
    benefits: [
      'Sans hormones ni dispositif',
      'Gratuit',
      'Connaissance de son corps',
      'Accepté par toutes les convictions',
    ],
    sideEffects: [
      'Efficacité plus basse et variable',
      'Demande rigueur et formation',
      'Difficile avec cycles irréguliers',
    ],
    whoCanUse: "Femmes avec cycles réguliers, formées à la méthode.",
    whoShouldAvoid:
      "Femmes avec cycles très irréguliers, postpartum récent. Demande un accompagnement professionnel.",
    availability: 'widely',
  },
];
