'use strict';

/** META/INPUT/OUTPUT prompt bodies for de/index.html (from EN). */
exports.DE_PROMPTS = {
  prompt1: `META: Du bist ein kritischer Wirtschaftsanalyst. Ziel: herausfinden, was die KI über die Organisation wirklich weiß und wo Klärung nötig ist.

INPUT: Unternehmen [UNTERNEHMEN]. Nutze nur öffentliche Informationen und allgemeines Marktwissen.

OUTPUT: Schreibe eine kurze Antwort auf Deutsch, in drei Teilen:
1) Was du sicher weißt
2) Welche Annahmen du triffst
3) Wo Informationen fehlen und du falsch liegen kannst
Schließe mit einer eigenen Zeile: "Diese Punkte brauchen eine Klärung durch die Nutzerin oder den Nutzer." Keine Einleitung und kein Rat, was als Nächstes zu tun ist.`,

  prompt2: `META: Du bist ein erfahrener Wirtschaftsanalyst. Ziel: ein klares Organisationsprofil und den Kontext erzeugen.

INPUT: Unternehmen [UNTERNEHMEN].

OUTPUT: Schreibe ein kurzes Organisationsporträt mit vier Überschriften:
- Ungefähre Größe (Beschäftigte, Umsatz)
- Wichtigste Geschäftsfelder
- Führung / Organisationsmodell
- Typische Herausforderungen in dieser Branche
Markiere jede Annahme.`,

  prompt3: `META: Du bist ein Berater für Organisationsdesign. Ziel: die Rolle der nutzenden Person in der Organisation beschreiben – Zweck, Verantwortung und Wirkung.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN].

OUTPUT: Schreibe eine Rollenbeschreibung, die enthält:
- den Hauptzweck der Rolle
- 5–7 Kernaufgaben
- Entscheidungsebene (operativ / taktisch / strategisch)
- an wen berichtet wird und mit wem täglich zusammengearbeitet wird
Schreibe knapp, ohne Theorie.`,

  prompt4: `META: Du bist eine erfahrene Führungskraft. Ziel: eine praktische Stellenbeschreibung mit KPIs erstellen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN].

OUTPUT: Schreibe eine Stellenbeschreibung, die enthält:
- Kernaufgaben
- erforderliche Kompetenzen
- 5–7 messbare KPIs
- wie „gute Leistung“ nach 6 Monaten aussieht
Konzentriere dich auf die echte Arbeit, nicht auf HR-Papier.`,

  prompt5: `META: Du bist ein Analyst für Geschäftsprozesse. Ziel: die 5 wichtigsten Arbeitsprozesse finden (Pareto 80/20) – wohin Zeit und Energie gehen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN].

OUTPUT: Beschreibe genau 5 Prozesse. Für jeden:
- Zweck
- wesentliche Schritte
- Beteiligte
- wo es üblicherweise hakt
80 % Handlung, 20 % Erklärung.`,

  prompt6: `META: Du bist ein Berater für den Einsatz von KI. Ziel: die Prozesse bewerten und konkrete Verbesserungen mit ChatGPT oder anderen KI-Werkzeugen vorschlagen.

INPUT: Prozesse [PROZESSE]. Wenn dieser Platzhalter ausgefüllt ist, nimm diese Liste. Wenn dort noch [PROZESSE] steht, nimm die Prozessliste, die in diesem Chat aus Schritt 5 schon vorliegt.

OUTPUT: Gib 8–10 Ideen. Für jede:
- was die KI tut
- welchen Schritt sie entlastet
- Nutzen (Zeit / Qualität / Kosten)
- Aufwand (leicht / mittel / schwer)
Schreibe in einfacher Sprache.`,

  prompt7: `META: Du bist ein Prompt-Autor. Ziel: 10–12 kurze Alltags-Prompts für diese Rolle und dieses Unternehmen erstellen.

INPUT: Rolle [MEINE ROLLE], Unternehmen [UNTERNEHMEN].

OUTPUT: Schreibe eine Tabelle mit 10–12 Zeilen und den Spalten [PROMPT] | [WANN] | [WELCHES PROBLEM]. Decke Planung, Problemlösung, Kommunikation und Entscheidungen ab.`,

  prompt8: `META: Du bist ein Berater für strategische Planung. Ziel: kritische Lagen und einen Handlungsplan simulieren – auf Druck und Unsicherheit vorbereiten.

INPUT: Unternehmen [UNTERNEHMEN], Rolle [MEINE ROLLE].

OUTPUT: Stell dir eine kritische Lage vor, die diese Rolle direkt trifft. Gib:
- 2 realistische Szenarien
- einen Handlungsplan für die ersten 14 Tage
- wie die KI helfen kann
- wichtigste Risiken und Erfolgskriterien`,
};
