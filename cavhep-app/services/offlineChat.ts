import { FAQ_DATA } from '../data/faq';
import { METHODS } from '../data/methods';

const OFFLINE_RESPONSES: Record<string, string> = {
  bonjour:
    "Bonjour ! Je suis ReproChoice AI en mode hors ligne. Vous pouvez me poser des questions sur la contraception. Pour des réponses personnalisées, connectez-vous à internet.",
  hello:
    "Hello! I'm ReproChoice AI in offline mode. You can ask me about contraceptive methods. For personalized responses, please connect to the internet.",
  implant:
    "L'implant est un petit bâtonnet sous-cutané avec une efficacité >99%. Il dure 3 à 5 ans et est réversible. Pose par un professionnel de santé. ⚕️ Consultez un professionnel pour un choix personnalisé.",
  diu: "Le DIU (stérilet) est un dispositif intra-utérin avec une efficacité >99%. Il dure 5 à 10 ans selon le type. Pose par un professionnel de santé. ⚕️ Consultez un professionnel pour un choix personnalisé.",
  pilule:
    "La pilule se prend chaque jour. Son efficacité est d'environ 91% en usage courant. Elle est réversible immédiatement. Disponible en pharmacie. ⚕️ Consultez un professionnel pour un choix personnalisé.",
  injectable:
    "L'injectable se fait toutes les 2-3 mois en centre de santé. Efficacité ~94%. Le retour à la fertilité peut prendre 3-12 mois. ⚕️ Consultez un professionnel pour un choix personnalisé.",
  'préservatif':
    "Le préservatif est la seule méthode qui protège à la fois contre les grossesses et les IST (VIH compris). Efficacité ~85% en usage courant. Disponible partout sans ordonnance.",
  naturelle:
    "La méthode naturelle (suivi du cycle) demande une formation et de la rigueur. Son efficacité varie (76-99%). Elle convient aux cycles réguliers.",
  'efficacité':
    "Par ordre d'efficacité : Implant/DIU (>99%), Injectable (94%), Pilule (91%), Préservatif (85%), Méthode naturelle (76-99%). ⚕️ Consultez un professionnel pour un choix personnalisé.",
  default_fr:
    "Mode hors ligne — Je peux vous donner des informations générales sur l'implant, le DIU, l'injectable, la pilule, le préservatif ou la méthode naturelle. Consultez aussi la FAQ et l'onglet Méthodes. ⚕️ Pour des réponses personnalisées, connectez-vous à internet.",
  default_en:
    "Offline mode — I can provide general information about implant, IUD, injectable, pill, condom, or natural methods. Check the FAQ and Methods tabs. ⚕️ For personalized responses, connect to the internet.",
};

function detectLanguage(text: string): 'fr' | 'en' {
  const frWords = ['bonjour', 'quelle', 'comment', 'puis', 'est-ce', 'méthode', 'pilule', 'implant'];
  return frWords.some((w) => text.includes(w)) ? 'fr' : 'en';
}

function searchFAQ(query: string): string | null {
  const match = FAQ_DATA.find(
    (item) =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.tags.some((tag) => query.includes(tag))
  );
  return match
    ? `${match.answer}\n\n⚕️ Pour un conseil personnalisé, consultez un professionnel de santé.`
    : null;
}

function searchMethods(query: string): string | null {
  const method = METHODS.find(
    (m) => query.includes(m.id) || query.includes(m.name.toLowerCase())
  );
  if (!method) return null;
  return `**${method.name}** — ${method.summary}\n✅ Efficacité : ${method.effectiveness}%\n⏱ Durée : ${method.duration}\n\n⚕️ Consultez un professionnel pour un choix personnalisé.`;
}

export function getOfflineResponse(message: string): string {
  const lower = message.toLowerCase();
  const lang = detectLanguage(lower);

  for (const [keyword, response] of Object.entries(OFFLINE_RESPONSES)) {
    if (keyword !== 'default_fr' && keyword !== 'default_en' && lower.includes(keyword)) {
      return response;
    }
  }

  const faqResult = searchFAQ(lower);
  if (faqResult) return faqResult;

  const methodResult = searchMethods(lower);
  if (methodResult) return methodResult;

  return lang === 'fr' ? OFFLINE_RESPONSES.default_fr : OFFLINE_RESPONSES.default_en;
}
