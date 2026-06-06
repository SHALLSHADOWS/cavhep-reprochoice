export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export const FAQ_CATEGORIES = [
  'Généralités',
  'Méthodes',
  'Effets secondaires',
  'IST & Protection',
  'Vie quotidienne',
  'Après grossesse',
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quelle est la méthode contraceptive la plus efficace ?',
    answer:
      "Les méthodes les plus efficaces sont l'implant et le DIU (stérilet), avec une efficacité supérieure à 99%. Elles nécessitent une pose par un professionnel de santé mais fonctionnent sans intervention quotidienne de votre part.",
    category: 'Méthodes',
    tags: ['efficacité', 'implant', 'DIU'],
  },
  {
    id: 'faq-2',
    question: 'Est-ce que la contraception affecte ma fertilité à long terme ?',
    answer:
      "Non. Toutes les méthodes contraceptives modernes sont réversibles. La fertilité revient généralement rapidement après l'arrêt de la pilule ou le retrait d'un implant. Seul l'injectable peut retarder le retour à la fertilité de quelques mois.",
    category: 'Généralités',
    tags: ['fertilité', 'réversibilité'],
  },
  {
    id: 'faq-3',
    question: "Puis-je utiliser la contraception si j'allaite ?",
    answer:
      "Oui. Certaines méthodes sont particulièrement adaptées à l'allaitement : l'implant, le DIU, l'injectable à base de progestérone. La pilule combinée est à éviter dans les 6 premières semaines. Consultez un professionnel de santé pour un choix personnalisé.",
    category: 'Après grossesse',
    tags: ['allaitement', 'postpartum'],
  },
  {
    id: 'faq-4',
    question: 'Comment éviter les IST (infections sexuellement transmissibles) ?',
    answer:
      "Le préservatif (masculin ou féminin) est la seule méthode qui protège à la fois contre les grossesses non désirées ET contre les IST, y compris le VIH. Il est recommandé de l'associer à une autre méthode contraceptive pour une double protection.",
    category: 'IST & Protection',
    tags: ['IST', 'VIH', 'préservatif', 'protection'],
  },
  {
    id: 'faq-5',
    question: "J'ai oublié de prendre ma pilule, que faire ?",
    answer:
      "Si l'oubli est inférieur à 12h (pilule progestative) ou 24h (pilule combinée) : prenez-la dès que vous y pensez et continuez normalement. Si l'oubli est plus long : prenez la pilule oubliée, utilisez un préservatif pendant 7 jours et consultez un professionnel si vous avez eu des rapports non protégés.",
    category: 'Vie quotidienne',
    tags: ['pilule', 'oubli', 'urgence'],
  },
  {
    id: 'faq-6',
    question: 'La contraception est-elle disponible gratuitement dans les centres de santé ?',
    answer:
      "Dans de nombreux pays d'Afrique subsaharienne, les méthodes contraceptives sont disponibles gratuitement ou à faible coût dans les centres de santé publics, les cliniques de planning familial et les ONG partenaires. Renseignez-vous auprès de votre centre de santé local.",
    category: 'Généralités',
    tags: ['accès', 'coût', 'centre de santé'],
  },
  {
    id: 'faq-7',
    question: "L'implant contraceptif est-il douloureux à poser ?",
    answer:
      "La pose est réalisée sous anesthésie locale. Vous pouvez ressentir une légère douleur ou un hématome les premiers jours. L'intervention dure moins de 5 minutes et l'implant est ensuite invisible et imperceptible dans le quotidien.",
    category: 'Méthodes',
    tags: ['implant', 'pose', 'douleur'],
  },
  {
    id: 'faq-8',
    question: 'Est-ce que mon partenaire peut sentir le DIU ?',
    answer:
      "Normalement, non. Les fils du DIU sont très fins et se replient naturellement. Dans de rares cas, un partenaire peut les sentir, mais un professionnel peut ajuster leur longueur.",
    category: 'Méthodes',
    tags: ['DIU', 'stérilet', 'couple'],
  },
  {
    id: 'faq-9',
    question: "Quels sont les effets secondaires de l'injectable ?",
    answer:
      "Les effets les plus courants sont les irrégularités menstruelles (règles plus légères, spotting ou absence de règles). Certaines femmes rapportent une légère prise de poids. Après l'arrêt, la fertilité peut mettre 3 à 12 mois à revenir.",
    category: 'Effets secondaires',
    tags: ['injectable', 'effets secondaires', 'règles'],
  },
  {
    id: 'faq-10',
    question: "La contraception d'urgence existe-t-elle ?",
    answer:
      "Oui. La pilule du lendemain peut être prise jusqu'à 72h après un rapport non protégé. Elle est disponible en pharmacie. C'est une méthode d'urgence, pas un contraceptif régulier. Consultez un professionnel pour une méthode adaptée à votre situation.",
    category: 'Vie quotidienne',
    tags: ['urgence', 'pilule du lendemain'],
  },
  {
    id: 'faq-11',
    question: "Puis-je tomber enceinte juste après l'arrêt de la contraception ?",
    answer:
      "Cela dépend de la méthode. Après la pilule ou le retrait de l'implant/DIU, la fertilité revient généralement très rapidement (parfois dès le cycle suivant). Après l'injectable, le délai peut être plus long (3 à 12 mois). Planifiez votre arrêt en conséquence.",
    category: 'Après grossesse',
    tags: ['fertilité', 'arrêt', 'grossesse'],
  },
  {
    id: 'faq-12',
    question: 'Comment choisir la bonne méthode contraceptive ?',
    answer:
      "Le choix dépend de plusieurs facteurs : votre état de santé, votre mode de vie, vos préférences, votre désir de grossesse futur, et l'accès aux soins dans votre région. Cet outil peut vous aider à explorer les options, mais une consultation avec un professionnel de santé est toujours recommandée pour un choix personnalisé.",
    category: 'Généralités',
    tags: ['choix', 'personnalisé', 'conseils'],
  },
];
