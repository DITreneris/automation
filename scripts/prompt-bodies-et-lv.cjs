'use strict';

/** META/INPUT/OUTPUT prompt bodies for et/index.html and lv/index.html (from EN). */
exports.ET_PROMPTS = {
  prompt1: `META: Sa oled kriitiline ärianalüütik. Eesmärk: välja selgitada, mida tehisintellekt tegelikult organisatsiooni kohta teab ja kus vajab täpsustusi.

INPUT: Ettevõte [ETTEVÕTE]. Kasuta ainult avalikku teavet ja üldisi turuteadmisi.

OUTPUT: Kirjuta lühike vastus eesti keeles, kolmes osas:
1) Mida tead kindlalt
2) Milliseid eeldusi teed
3) Kus informatsioon puudub ja võid eksida
Lõpeta eraldi reaga: "Need punktid vajavad kasutajalt täpsustamist." Ilma sissejuhatuse ja ilma nõuanneteta, mida edasi teha.`,

  prompt2: `META: Sa oled kogenud ärianalüütik. Eesmärk: luua selge organisatsiooni profiil ja kontekst.

INPUT: Ettevõte [ETTEVÕTE].

OUTPUT: Kirjuta lühike organisatsiooni portree nelja pealkirjaga:
- Ligikaudne suurus (töötajad, käive)
- Peamised tegevusvaldkonnad
- Juhtimine / organisatsioonimudel
- Tüüpilised väljakutsed selles sektoris
Märgi iga eeldus.`,

  prompt3: `META: Sa oled organisatsioonidisaini konsultant. Eesmärk: kirjeldada kasutaja rolli organisatsioonis – eesmärk, vastutus ja mõju.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE].

OUTPUT: Kirjuta rollikirjeldus, mis sisaldab:
- rolli peamist eesmärki
- 5–7 põhikohustust
- otsustamise taset (operatiivne / taktikaline / strateegiline)
- kellele antakse aru ja kellega töötatakse igapäevaselt
Kirjuta lühidalt, ilma teooriata.`,

  prompt4: `META: Sa oled kogenud juht. Eesmärk: luua praktiline ametijuhend koos KPI-dega.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE].

OUTPUT: Kirjuta ametijuhend, mis sisaldab:
- põhikohustusi
- nõutavaid pädevusi
- 5–7 mõõdetavat KPI-d
- milline on "hea tulemus" 6 kuu pärast
Keskendu tegelikule tööle, mitte HR paberimajandusele.`,

  prompt5: `META: Sa oled äriprotsesside analüütik. Eesmärk: tuvastada 5 kõige olulisemat tööprotsessi (Pareto 80/20) – kuhu aeg ja energia läheb.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE].

OUTPUT: Kirjelda täpselt 5 protsessi. Igaühe jaoks:
- eesmärk
- peamised sammud
- osapooled
- kus see tavaliselt kinni jookseb
80% tegevus, 20% selgitus.`,

  prompt6: `META: Sa oled tehisintellekti rakendamise konsultant. Eesmärk: hinnata protsesse ja pakkuda konkreetseid viise nende parandamiseks ChatGPT või muude tehisintellekti tööriistadega.

INPUT: Protsessid [PROTSESSID]. Kui see kohatäide on täidetud, kasuta seda loendit. Kui seal on endiselt [PROTSESSID], kasuta protsesside loendit, mis on selles vestluses 5. sammust juba olemas.

OUTPUT: Anna 8–10 ideed. Igaühe jaoks:
- mida tehisintellekt teeb
- millist sammu see kergendab
- kasu (aeg / kvaliteet / kulu)
- raskus (lihtne / keskmine / raske)
Kirjuta lihtsas keeles.`,

  prompt7: `META: Sa oled promptide koostaja. Eesmärk: luua 10–12 lühikest igapäevast prompti selle rolli ja ettevõtte jaoks.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE].

OUTPUT: Kirjuta tabel 10–12 reaga ja veergudega [KÜSITIS] | [MILLAL KASUTAN] | [MILLISE PROBLEEMI LAHENDAB]. Kata planeerimine, probleemide lahendamine, suhtlus ja otsustamine.`,

  prompt8: `META: Sa oled strateegilise planeerimise konsultant. Eesmärk: simuleerida kriitilisi olukordi ja tegevusplaani – valmistuda surveks ja ebakindluseks.

INPUT: Ettevõte [ETTEVÕTE], roll [MINU ROLL].

OUTPUT: Kujuta ette kriitilist olukorda, mis mõjutab otse seda rolli. Anna:
- 2 realistlikku stsenaariumit
- tegevusplaan esimeseks 14 päevaks
- kuidas tehisintellekt saab aidata
- peamised riskid ja edu kriteeriumid`,
};

exports.LV_PROMPTS = {
  prompt1: `META: Tu esi kritisks biznesa analītiķis. Mērķis: noskaidrot, ko mākslīgais intelekts patiesi zina par organizāciju un kur nepieciešama precizēšana.

INPUT: Uzņēmums [UZŅĒMUMS]. Izmanto tikai publiski pieejamu informāciju un vispārējas tirgus zināšanas.

OUTPUT: Uzraksti īsu atbildi latviešu valodā, trīs daļās:
1) Ko zini ar pārliecību
2) Kādus pieņēmumus izdari
3) Kur trūkst informācijas un vari kļūdīties
Noslēdz ar atsevišķu rindu: "Šie punkti prasa precizējumu no lietotāja." Bez ievada un bez padoma, ko darīt tālāk.`,

  prompt2: `META: Tu esi pieredzējis biznesa analītiķis. Mērķis: izveidot skaidru organizācijas profilu un kontekstu.

INPUT: Uzņēmums [UZŅĒMUMS].

OUTPUT: Uzraksti īsu organizācijas portretu ar četrām virsrakstiem:
- Aptuvenais izmērs (darbinieki, apgrozījums)
- Galvenās darbības jomas
- Vadības / organizācijas modelis
- Tipiski izaicinājumi šajā nozarē
Atzīmē katru pieņēmumu.`,

  prompt3: `META: Tu esi organizācijas dizaina konsultants. Mērķis: aprakstīt lietotāja lomu organizācijā – mērķi, pienākumus un ietekmi.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS].

OUTPUT: Uzraksti lomas aprakstu, kas ietver:
- galveno lomas mērķi
- 5–7 pamatpienākumus
- lēmumu līmeni (operatīvs / taktisks / stratēģisks)
- kam atskaitās un ar ko ikdienā sadarbojas
Raksti īsi, bez teorijas.`,

  prompt4: `META: Tu esi pieredzējis vadītājs. Mērķis: izveidot praktisku amata aprakstu ar KPI.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS].

OUTPUT: Uzraksti amata aprakstu, kas ietver:
- pamatpienākumus
- nepieciešamās kompetences
- 5–7 izmērāmus KPI
- kā izskatās "labs sniegums" pēc 6 mēnešiem
Fokuss uz reālo darbu, ne HR birokrātiju.`,

  prompt5: `META: Tu esi biznesa procesu analītiķis. Mērķis: identificēt 5 svarīgākos darba procesus (Pareto 80/20) – kur tiek tērēts laiks un enerģija.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS].

OUTPUT: Apraksti tieši 5 procesus. Katram:
- mērķis
- galvenie soļi
- iesaistītās lomas
- kur tas parasti iesprūst
80% darbības, 20% skaidrojums.`,

  prompt6: `META: Tu esi MI ieviešanas konsultants. Mērķis: novērtēt procesus un ieteikt konkrētus veidus, kā tos uzlabot, izmantojot ChatGPT vai citus MI rīkus.

INPUT: Procesi [PROCESI]. Ja šis vietturis ir aizpildīts, izmanto šo sarakstu. Ja tur joprojām ir [PROCESI], izmanto procesu sarakstu, kas šajā sarunā no 5. soļa jau ir.

OUTPUT: Dod 8–10 idejas. Katrai:
- ko dara MI
- kuru soli tas atvieglo
- ieguvums (laiks / kvalitāte / izmaksas)
- grūtības (viegli / vidēji / grūti)
Raksti vienkāršā valodā.`,

  prompt7: `META: Tu esi promptu inženieris. Mērķis: izveidot 10–12 īsus ikdienas promptus šai konkrētajai lomai un uzņēmumam.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS].

OUTPUT: Uzraksti tabulu ar 10–12 rindām un kolonnām [PROMPTTEKSTS] | [KAD LIETOJU] | [KĀDU PROBLĒMU RISINA]. Aptver plānošanu, problēmu risināšanu, komunikāciju un lēmumu pieņemšanu.`,

  prompt8: `META: Tu esi stratēģiskās plānošanas konsultants. Mērķis: simulēt kritiskas situācijas un rīcības plānu – sagatavoties spiedienam un nenoteiktībai.

INPUT: Uzņēmums [UZŅĒMUMS], loma [MANA LOMA].

OUTPUT: Iedomājies kritisku situāciju, kas tieši ietekmē šo lomu. Dod:
- 2 reālistiskus scenārijus
- rīcības plānu pirmajām 14 dienām
- kā MI var palīdzēt
- galvenos riskus un veiksmes kritērijus`,
};
