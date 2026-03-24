import { chatKnowledge } from "../data/chatKnowledge";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "the",
  "to",
  "what",
  "where",
  "which",
  "who",
  "with",
  "you",
]);

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token && !STOP_WORDS.has(token));
}

function scoreEntry(question, questionTokens, entry) {
  const questionText = normalize(question);
  const entrySearchText = `${entry.topic} ${entry.answer} ${entry.keywords.join(" ")}`;
  const entryText = normalize(entrySearchText);

  let score = 0;

  for (const token of questionTokens) {
    if (entry.keywords.some((keyword) => normalize(keyword).includes(token))) {
      score += 4;
    }
    if (normalize(entry.topic).includes(token)) {
      score += 2;
    }
    if (entryText.includes(token)) {
      score += 1;
    }
  }

  // Reward exact keyword phrase matches.
  for (const keyword of entry.keywords) {
    const keywordText = normalize(keyword);
    if (keywordText && questionText.includes(keywordText)) {
      score += 6;
    }
  }

  return score;
}

function formatSources(entries) {
  const sourceSet = new Set();
  for (const entry of entries) {
    for (const link of entry.links) {
      sourceSet.add(link);
    }
  }
  return Array.from(sourceSet);
}

export function getChatbotResponse(question) {
  const cleanedQuestion = question.trim();

  if (!cleanedQuestion) {
    return {
      answer: "Please type your question, and I will answer from the website data.",
      confidence: "low",
      sources: [],
    };
  }

  const questionTokens = tokenize(cleanedQuestion);
  const ranked = chatKnowledge
    .map((entry) => ({ entry, score: scoreEntry(cleanedQuestion, questionTokens, entry) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];

  if (!top || top.score <= 2) {
    return {
      answer:
        "I could not find a strong match in the current website knowledge. Try asking about admissions, programs, contact details, campuses, exams, or news.",
      confidence: "low",
      sources: [],
    };
  }

  if (second && second.score >= top.score - 2 && second.score > 4) {
    return {
      answer: `${top.entry.answer} Also related: ${second.entry.answer}`,
      confidence: "high",
      sources: formatSources([top.entry, second.entry]),
    };
  }

  return {
    answer: top.entry.answer,
    confidence: top.score > 8 ? "high" : "medium",
    sources: formatSources([top.entry]),
  };
}
