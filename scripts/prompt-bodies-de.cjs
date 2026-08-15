'use strict';

/** META/INPUT/OUTPUT prompt bodies for de/index.html (from EN). */
exports.DE_PROMPTS = {
  prompt1: `META: Du bist ein kritischer Wirtschaftsanalyst. Ziel: herausfinden, was die KI über die Organisation wirklich weiß und wo Klärung nötig ist.

INPUT: Unternehmen [UNTERNEHMEN]. Beschreibe allein auf Basis öffentlicher Informationen und allgemeiner Marktkenntnis, wie DU dieses Unternehmen verstehst. Struktur: 1) Was du sicher weißt 2) Welche Annahmen du triffst 3) Wo Informationen fehlen und du falsch liegen kannst. Markiere am Ende deutlich: "Diese Punkte brauchen eine Klärung durch die Nutzerin oder den Nutzer."

OUTPUT: Ergebnis: eine kurze, strukturierte Antwort – Sie sehen klar, wo die KI irren kann und was Sie klären sollten, bevor Sie weitermachen.`,

  prompt2: `META: Du bist ein erfahrener Wirtschaftsanalyst. Ziel: ein klares Organisationsprofil und den Kontext erzeugen.

INPUT: Unternehmen [UNTERNEHMEN]. Analysiere und beschreibe: ungefähre Größe (Beschäftigte, Umsatz); wichtigste Geschäftsfelder; Führung/Organisationsmodell; typische Herausforderungen in dieser Branche. Halte die Antwort kurz und strukturiert. Markiere, wo du Annahmen triffst.

OUTPUT: Ergebnis: ein Organisationsporträt, das Sie als Kontext für die anderen Prompts nutzen können.`,

  prompt3: `META: Du bist ein Berater für Organisationsdesign. Ziel: die Rolle der nutzenden Person in der Organisation beschreiben – Zweck, Verantwortung und Wirkung.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN]. Beschreibe diese Rolle auf Basis der Organisationsanalyse. Nimm auf: den Hauptzweck der Rolle; 5–7 Kernaufgaben; Entscheidungsebene (operativ / taktisch / strategisch); an wen berichtet wird und mit wem täglich zusammengearbeitet wird. Schreibe knapp, ohne Theorie.

OUTPUT: Ergebnis: eine klare Rollenbeschreibung – nutzen Sie sie für die nächsten Schritte.`,

  prompt4: `META: Du bist eine erfahrene Führungskraft. Ziel: eine praktische Stellenbeschreibung mit KPIs erstellen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN]. Erstelle eine Stellenbeschreibung. Nimm auf: Kernaufgaben; erforderliche Kompetenzen; 5–7 messbare KPIs; wie „gute Leistung“ nach 6 Monaten aussieht. Konzentriere dich auf die echte Arbeit, nicht auf HR-Papier.

OUTPUT: Ergebnis: eine Stellenbeschreibung, die sich für die Selbstbewertung oder die Einarbeitung eignet.`,

  prompt5: `META: Du bist ein Analyst für Geschäftsprozesse. Ziel: die 5 wichtigsten Arbeitsprozesse finden (Pareto 80/20) – wohin Zeit und Energie gehen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN]. Beschreibe die 5 wichtigsten Prozesse, die diese Rolle tatsächlich ausführt. Für jeden: Zweck; wesentliche Schritte; Beteiligte; wo es üblicherweise hakt. 80 % Handlung, 20 % Erklärung.

OUTPUT: Ergebnis: eine Prozessliste, damit Sie sehen, wo die KI den größten Hebel hat (Schritt 6).`,

  prompt6: `META: Du bist ein Berater für den Einsatz von KI. Ziel: die Prozesse bewerten und konkrete Verbesserungen mit ChatGPT oder anderen KI-Werkzeugen vorschlagen.

INPUT: Bewerte die Prozesse aus Schritt 5 – füge die Liste ein oder beziehe dich auf die gerade beschriebene. Gib 8–10 Ideen. Für jede: was die KI tut; welchen Prozessteil sie entlastet; greifbarer Nutzen (Zeit / Qualität / Kosten); Umsetzungsaufwand (leicht / mittel / schwer). Schreibe für eine nicht-technische Leserin oder einen nicht-technischen Leser.

OUTPUT: Ergebnis: 8–10 konkrete Ideen, wo die KI pro Woche Stunden sparen kann.`,

  prompt7: `META: Du bist ein Prompt-Autor. Ziel: 10–12 kurze Alltags-Prompts für diese Rolle und dieses Unternehmen erstellen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN]. Erstelle Prompts, die helfen bei: Planung; Problemlösung; Kommunikation; Entscheidungen. Gib eine Tabelle: [PROMPT] | [WANN] | [WELCHES PROBLEM].

OUTPUT: Ergebnis: eine persönliche Prompt-Sammlung – eine Tabelle, die Sie jeden Tag nutzen können.`,

  prompt8: `META: Du bist ein Berater für strategische Planung. Ziel: kritische Lagen und einen Handlungsplan simulieren – auf Druck und Unsicherheit vorbereiten.

INPUT: Unternehmen [UNTERNEHMEN], Rolle [MEINE ROLLE]. Stelle dir eine kritische Lage vor, die diese Rolle direkt trifft. Gib: 2 realistische Szenarien; einen Handlungsplan für die ersten 14 Tage; wie die KI helfen kann; wichtigste Risiken und Erfolgskriterien.

OUTPUT: Ergebnis: Szenarien und ein 14-Tage-Plan – besser mit der KI vorher üben als in der echten Lage.`,
};
