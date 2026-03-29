'use strict';

/** META/INPUT/OUTPUT prompt bodies for et/index.html and lv/index.html (from EN). */
exports.ET_PROMPTS = {
  prompt1: `META: Sa oled kriitiline ärianalüütik. Eesmärk: välja selgitada, mida tehisintellekt tegelikult organisatsiooni kohta teab ja kus vajab täpsustusi.

INPUT: Ettevõte [ETTEVÕTE]. Ainult avaliku teabe ja üldiste turuteadmiste põhjal kirjelda, kuidas SINA seda ettevõtet mõistad. Struktuur: 1) Mida tead kindlalt 2) Milliseid eeldusi teed 3) Kus informatsioon puudub ja võid eksida. Lõpus märgi selgelt: "Need punktid vajavad kasutajalt täpsustamist."

OUTPUT: Tulemus: lühike struktureeritud vastus – näete selgelt, kus tehisintellekt võib eksida ja mida enne jätkamist täpsustada.`,

  prompt2: `META: Sa oled kogenud ärianalüütik. Eesmärk: luua selge organisatsiooni profiil ja kontekst.

INPUT: Ettevõte [ETTEVÕTE]. Analüüsi ja kirjelda: umbkaudne suurus (töötajad, käive); peamised tegevusvaldkonnad; juhtimine/organisatsioonimudel; tüüpilised väljakutsed selles sektoris. Hoia vastus lühike ja struktureeritud. Märgi, kus teed eeldusi.

OUTPUT: Tulemus: organisatsiooni portree, mida saab kasutada teiste promptide kontekstina.`,

  prompt3: `META: Sa oled organisatsioonidisaini konsultant. Eesmärk: kirjeldada kasutaja rolli organisatsioonis – eesmärk, vastutus ja mõju.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE]. Organisatsiooni analüüsi põhjal kirjelda seda rolli. Kaasa: rolli peamine eesmärk; 5–7 põhikohustust; otsustamise tase (operatiivne / taktikaline / strateegiline); kellele antakse aru ja kellega töötatakse igapäevaselt. Kirjuta lühidalt, ilma teooriata.

OUTPUT: Tulemus: selge rollikirjeldus – kasuta järgmiste sammude jaoks.`,

  prompt4: `META: Sa oled kogenud juht. Eesmärk: luua praktiline ametijuhendi kirjeldus koos KPI-dega.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE]. Loo ametijuhend. Kaasa: põhikohustused; nõutavad pädevused; 5–7 mõõdetavat KPI-d; milline on "hea tulemus" 6 kuu pärast. Keskendu tegelikule tööle, mitte HR paberimajandusele.

OUTPUT: Tulemus: ametijuhend, mis sobib enesehindluseks või uue töötaja sisseelamiseks.`,

  prompt5: `META: Sa oled äriprotsesside analüütik. Eesmärk: tuvastada 5 kõige olulisemat tööprotsessi (Pareto 80/20) – kuhu aeg ja energia läheb.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE]. Kirjelda 5 kõige olulisemat protsessi, mida see roll tegelikult teeb. Igaühe jaoks: eesmärk; peamised sammud; osapooled; kus see tavaliselt kinni jookseb. 80% tegevus, 20% selgitus.

OUTPUT: Tulemus: protsesside loend, et näha, kus tehisintellektil on suurim mõju (samm 6).`,

  prompt6: `META: Sa oled tehisintellekti rakendamise konsultant. Eesmärk: hinnata protsesse ja pakkuda konkreetseid viise nende parandamiseks ChatGPT või muude tehisintellekti tööriistadega.

INPUT: Hinda (juba kirjeldatud) protsesse ja anna 8–10 ideed. Igaühe jaoks: mida tehisintellekt teeb; millist protsessi osa see kergendab; tegelik kasu (aeg / kvaliteet / maksumus); rakendamise raskus (lihtne / keskmine / raske). Kirjuta mittetehnilisele kasutajale.

OUTPUT: Tulemus: 8–10 konkreetset ideed, kus tehisintellekt võib nädalas tunde säästa.`,

  prompt7: `META: Sa oled promptide koostaja. Eesmärk: luua 10–12 lühikest igapäevaseks kasutamiseks mõeldud prompti selle rolli ja ettevõtte jaoks.

INPUT: Roll [MINU ROLL], ettevõte [ETTEVÕTE]. Loo promptid, mis aitavad: planeerimisel; probleemide lahendamisel; suhtluses; otsustamisel. Anna tabel: [KÜSITIS] | [MILLAL KASUTAN] | [MILLISE PROBLEEMI LAHENDAB].

OUTPUT: Tulemus: isiklik promptide kogu – tabel, mida saate iga päev kasutada.`,

  prompt8: `META: Sa oled strateegilise planeerimise konsultant. Eesmärk: simuleerida kriitilisi olukordi ja tegevusplaani – valmistuda surveks ja ebakindluseks.

INPUT: Ettevõte [ETTEVÕTE], roll [MINU ROLL]. Kujuta ette kriitilist olukorda, mis mõjutab otse seda rolli. Anna: 2 realistlikku stsenaariumit; tegevusplaan esimeseks 14 päevaks; kuidas tehisintellekt saab aidata; peamised riskid ja edu kriteeriumid.

OUTPUT: Tulemus: stsenaariumid ja 14-päevane plaan – parem harjutada tehisintellektiga ette kui päris olukorras.`,
};

exports.LV_PROMPTS = {
  prompt1: `META: Tu esi kritisks biznesa analītiķis. Mērķis: noskaidrot, ko mākslīgais intelekts patiesi zina par organizāciju un kur nepieciešama precizēšana.

INPUT: Uzņēmums [UZŅĒMUMS]. Tikai pamatojoties uz publiski pieejamu informāciju un vispārējām tirgus zināšanām, apraksti, kā TU saproti šo uzņēmumu. Struktūra: 1) Ko zini ar pārliecību 2) Kādas pieņēmumus izdari 3) Kur trūkst informācijas un vari kļūdīties. Beigās skaidri atzīmē: "Šīs vietas prasa precizējumu no lietotāja."

OUTPUT: Rezultāts: īss strukturēts atbildes fragments – skaidri redzams, kur MI var kļūdīties un ko precizēt pirms turpināt.`,

  prompt2: `META: Tu esi pieredzējis biznesa analītiķis. Mērķis: izveidot skaidru organizācijas profilu un kontekstu.

INPUT: Uzņēmums [UZŅĒMUMS]. Analizē un apraksti: aptuvenais izmērs (darbinieki, apgrozījums); galvenās darbības jomas; vadības/organizācijas modelis; tipiski izaicinājumi šajā nozarē. Atbildi īsi un strukturēti. Atzīmē, kur izdari pieņēmumus.

OUTPUT: Rezultāts: organizācijas portrets, ko izmantot kā kontekstu citiem promptiem.`,

  prompt3: `META: Tu esi organizācijas dizaina konsultants. Mērķis: aprakstīt lietotāja lomu organizācijā – mērķi, pienākumus un ietekmi.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS]. Pamatojoties uz organizācijas analīzi, apraksti šo lomu. Iekļauj: galvenais lomas mērķis; 5–7 pamatpienākumi; lēmumu līmenis (operacionāls / taktisks / stratēģisks); kam atskaitās un ar ko ikdienā sadarbojas. Raksti īsi, bez teorijas.

OUTPUT: Rezultāts: skaidrs lomas apraksts – izmanto kā atsauce nākamajiem soļiem.`,

  prompt4: `META: Tu esi pieredzējis vadītājs. Mērķis: izveidot praktisku amata aprakstu ar KPI.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS]. Izveido amata aprakstu. Iekļauj: pamatpienākumus; nepieciešamās kompetences; 5–7 mērāmus KPI; kā izskatās "labs sniegums" pēc 6 mēnešiem. Fokuss uz reālo darbu, ne HR birokrātiju.

OUTPUT: Rezultāts: amata apraksts pašnovērtējai vai jauna darbinieka vervēšanai.`,

  prompt5: `META: Tu esi biznesa procesu analītiķis. Mērķis: identificēt 5 svarīgākos darba procesus (Pareto 80/20) – kur tiek tērēts laiks un enerģija.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS]. Apraksti 5 svarīgākos procesus, ko šī loma patiesi veic. Katram: mērķis; galvenie soļi; iesaistītās lomas; kur tas parasti "iesprūst". 80% darbības, 20% skaidrojums.

OUTPUT: Rezultāts: procesu saraksts, lai redzētu, kur MI būs lielākā ietekme (6. solis).`,

  prompt6: `META: Tu esi MI ieviešanas konsultants. Mērķis: novērtēt procesus un ieteikt konkrētus veidus, kā tos uzlabot, izmantojot ChatGPT vai citus MI rīkus.

INPUT: Novērtē (jau aprakstītos) procesus un dod 8–10 idejas. Katrai: ko dara MI; kuru procesa daļu atvieglo; reāls ieguvums (laiks / kvalitāte / izmaksas); ieviešanas grūtības (viegli / vidēji / grūti). Raksti saprotami lietotājam bez tehniskām zināšanām.

OUTPUT: Rezultāts: 8–10 konkrētas idejas, kur MI var ietaupīt stundas nedēļā.`,

  prompt7: `META: Tu esi promptu inženieris. Mērķis: izveidot 10–12 īsus ikdienas promptus šai konkrētajai lomai un uzņēmumam.

INPUT: Loma [MANA LOMA], uzņēmums [UZŅĒMUMS]. Izveido promptus, kas palīdz: plānošanā; problēmu risināšanā; komunikācijā; lēmumu pieņemšanā. Dod tabulu: [PROMPTTEKSTS] | [KAD LIETOJU] | [KĀDU PROBLĒMU RISINA].

OUTPUT: Rezultāts: personīga promptu kolekcija – tabula ikdienas lietošanai.`,

  prompt8: `META: Tu esi stratēģiskās plānošanas konsultants. Mērķis: simulēt kritiskas situācijas un rīcības plānu – sagatavoties spiedienam un nenoteiktībai.

INPUT: Uzņēmums [UZŅĒMUMS], loma [MANA LOMA]. Iedomājies kritisku situāciju, kas tieši ietekmē šo lomu. Dod: 2 reālistiskus scenārijus; rīcības plānu pirmajiem 14 dienām; kā MI var palīdzēt; galvenos riskus un veiksmes kritērijus.

OUTPUT: Rezultāts: scenāriji un 14 dienu plāns – labāk trenēties ar MI iepriekš nekā reālā situācijā.`,
};
