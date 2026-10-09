---
title: "Die unbequeme Zukunft von iOS-/Android-Cross-Platform-Frameworks im KI-Zeitalter"
description: "Wie KI, native Plattformfunktionen und versteckte Organisationskosten den wirtschaftlichen Nutzen mobiler Cross-Platform-Frameworks infrage stellen."
pubDate: '2026-10-09'
author: 'AngleFeint'
tags: ['ai', 'software-engineering', 'mobile', 'cross-platform', 'organizations']
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

*Die Cross-Platform-Illusion: Engineering, Bürokratie und das KI-Zeitalter*

Ich habe mehr als ein Jahrzehnt bei einigen der größten Internetunternehmen auf dem chinesischen Festland gearbeitet. Später zog ich ins Ausland und wechselte zu einem globalen Technologieunternehmen, das weltweit tätig war, allerdings nicht auf dem chinesischen Festland. Danach gründete ich im Ausland mein eigenes Unternehmen.

Diese Erfahrungen eröffneten mir eine andere Perspektive auf die Engineering-Kultur und die technischen Entscheidungen, die ich in China erlebt hatte.

Meine Zweifel an Cross-Platform-Frameworks begannen 2024.

Damals entwickelte ich in meiner Freizeit eine mobile ASR-/TTS-App. Statt auf Cloud-Computing zu setzen, wollte ich die Rechenleistung direkt auf dem Gerät nutzen, da sowohl iOS als auch Android bereits immer leistungsfähigere APIs für maschinelles Lernen unterstützten.

Außerdem hatte ich begonnen, Cursor für KI-gestützte Entwicklung zu verwenden.

Bei der Recherche nach plattformübergreifenden Lösungen für meine App kam ich zu einem Schluss: Cross-Platform-Frameworks für iOS und Android würden im KI-Zeitalter immer weniger relevant werden.

Und vielleicht war ihr Wert schon vor der KI überbewertet worden.

Kürzlich stieß ich auf Shopifys Engineering-Artikel [Native Entwicklung ist jetzt die Zukunft von Mobile bei Shopify](https://shopify.engineering/back-to-native), der die Entscheidung beschreibt, von React Native wieder zur nativen Entwicklung zurückzukehren.

Er erinnerte mich an meine Zweifel an Cross-Platform-Frameworks aus dem Jahr 2024 und brachte mich dazu, meine eigenen Gedanken endlich aufzuschreiben.

Shopify behauptet, dass React Native 2020 die richtige Wahl war. Ich bin davon nicht so überzeugt.

Shopify räumt selbst ein, erheblich Zeit und Ressourcen in die Leistungsoptimierung, Verbesserungen am Framework und die Wartung von Abhängigkeiten investiert zu haben. Doch das sind nur einige der Kosten plattformübergreifender Entwicklung. Was ist mit den versteckten Kosten für die Pflege eines Entwicklerökosystems, dem organisatorischen Mehraufwand und den entgangenen Geschäftschancen?

Hat Shopify die tatsächlichen wirtschaftlichen Kosten dieser Entscheidung jemals vollständig berechnet? Das bezweifle ich stark.

Für meine Schlussfolgerung gibt es mehrere Gründe:

* **KI-Programmieragenten** senken die Kosten für die Entwicklung und Wartung nativer Anwendungen drastisch.
* **On-Device-KI** macht native Entwicklung attraktiver, während Cross-Platform-Frameworks neuen Plattformfunktionen häufig hinterherhinken.
* **Versteckte Kosten,** darunter Framework-Wartung, interne Entwicklerökosysteme, teamübergreifende Abstimmung und Organisationspolitik, werden oft unterschätzt.
* **Der neue Kalte Krieg und das KI-Wettrüsten:** Wir befinden uns in einem neuen Kalten Krieg, und KI ist zu einem seiner wichtigsten strategischen Schauplätze geworden, ähnlich wie die Strategic Defense Initiative, auch als Star Wars bekannt, im vergangenen Kalten Krieg. Mit zunehmendem Wettbewerb gewinnen Markteinführungszeit und Nutzererlebnis gegenüber den Entwicklungskosten an Bedeutung.

Bevor ich über KI spreche, möchte ich jedoch etwas teilen, das ich in Chinas Internetbranche beobachtet habe.

## Einmal schreiben, überall ausführen?

Bei mehreren großen chinesischen Internetunternehmen, für die ich arbeitete, wurden Cross-Platform-Frameworks häufig als Mittel zur Senkung der Entwicklungskosten angepriesen.

Doch ihre Ambitionen gingen weit über gemeinsam genutzten Code für iOS und Android hinaus.

Die Unternehmen wollten Code einmal schreiben und überall ausführen: auf iOS, Android, H5, WeChat-Miniprogrammen, Alipay-Miniprogrammen und manchmal noch weiteren Plattformen.

Das Argument klang einfach: einmal schreiben, überall ausführen.

Die Realität war aber viel komplizierter.

* **Einmal schreiben? Nicht unbedingt.** Mitunter schrieben Entwickler den Code am Ende dreimal: einmal für iOS, einmal für Android und einmal für das Cross-Platform-Framework. Die Unterstützung des Webs oder von Miniprogramm-Plattformen konnte noch mehr Arbeit verursachen.
* **Performance und Nutzererlebnis.** Oft war erheblicher Engineering-Aufwand nötig, um sich nativer Performance anzunähern, und manche Einschränkungen ließen sich nicht vollständig beseitigen.
* **Verzögerungen bei Plattform-APIs.** Neue Funktionen von iOS und Android waren nicht immer sofort über Cross-Platform-Frameworks verfügbar.
* **Abstimmungsaufwand.** Plattformübergreifende Entwicklung schuf zusätzliche Abhängigkeiten zwischen Geschäftsteams, Framework-Teams und Teams für die nativen Plattformen.
* **Organisationspolitik.** Manche Engineering-Projekte schienen sich stärker auf technische Errungenschaften, Teamwachstum und Beförderungen zu konzentrieren als auf tatsächlichen Geschäftswert.
* **Unnötige Iterationen.** Musste das Unternehmen die App wirklich so häufig ändern? Oder waren manche Projekte lediglich Arbeit, die um der Arbeit willen geschaffen wurde?

Und jede zusätzliche Schicht an Komplexität hat ihren Preis.

Selbst wenn ein Framework die Entwicklungszeit verkürzt: Wie messen wir die Performance, das Nutzererlebnis und die Geschäftschancen, die dabei geopfert werden?

## Die versteckten Kosten: ein internes Entwicklerökosystem

Zu den am stärksten unterschätzten Kosten beim Aufbau eines Cross-Platform-Frameworks gehört die Pflege seines Entwicklerökosystems.

Apple und Google investieren viel in ihre Entwicklerökosysteme, weil diese ihre Plattformen und ihr Geschäft unmittelbar stärken.

Wenn ein Internetunternehmen jedoch sein eigenes Cross-Platform-Framework baut, schafft es faktisch eine weitere Entwicklerplattform innerhalb des Unternehmens.

Es muss Brücken zu nativen APIs, UI-Komponenten, Build-Werkzeuge, Debugging-Werkzeuge, Testinfrastruktur, Dokumentation, SDK-Integrationen und Abwärtskompatibilität pflegen.

Und dieses interne Ökosystem muss der Entwicklung von iOS, Android und manchmal auch Web, Miniprogrammen und HarmonyOS ständig folgen.

**Das Unternehmen baut nicht mehr nur eine Anwendung. Es betreibt eine Plattform innerhalb einer Plattform.**

Ein etabliertes Framework wie React Native kann diese Last verringern, weil Meta und die Open-Source-Community einen großen Teil seines Ökosystems pflegen. Trotzdem bauen große Unternehmen am Ende oft umfangreiche interne Infrastruktur darum herum auf.

Wie viel Geld spart dieses Ökosystem also tatsächlich, wenn seine eigenen Entwicklungs- und Wartungskosten berücksichtigt werden?

Und wird es aufgebaut, weil das Geschäft es braucht, oder weil eine Engineering-Organisation etwas zum Bauen braucht?

## Hot Updates und künstlich geschaffener Bedarf

Es gibt noch einen Grund, warum plattformübergreifende und dynamische Frameworks in Chinas Internetbranche so beliebt wurden: **Hot Updates.**

Viele Unternehmen wollten ihre Apps aktualisieren, ohne jedes Mal den herkömmlichen Prüfungs- und Veröffentlichungsprozess der App-Stores durchlaufen zu müssen.

Das war besonders attraktiv für Unternehmen mit endlosen Marketingkampagnen, Werbeaktionen und häufigen Produktexperimenten.

Rückblickend habe ich jedoch eine Frage.

Brauchten die Nutzer wirklich so viele Änderungen?

Schufen diese Kampagnen und ständigen Iterationen tatsächlich genügend Geschäftswert, um ihre Kosten zu rechtfertigen?

Oder wurden einige davon lediglich von großen Organisationen erzeugt, die mehr Projekte, mehr Aktivitäten und mehr Erfolge brauchten?

Ein Framework, das unnötige Entwicklung beschleunigt, macht ein Unternehmen nicht zwangsläufig effizienter.

**Es kann das Unternehmen schlicht darin verbessern, unnötige Arbeit zu produzieren.**

Und ganz gleich, wie ausgefeilt seine Engineering-Infrastruktur wird: Ein Unternehmen kann grundlegende Geschäftsprobleme nicht dadurch lösen, dass es mehr Funktionen veröffentlicht.

**Engineering-Effizienz führt nicht zwangsläufig zu geschäftlicher Effizienz.**

## Prüfungsorientiertes Engineering und künstlich geschaffene Komplexität

In Chinas Internetbranche beobachtete ich noch ein weiteres Problem: eine prüfungsorientierte Engineering-Kultur.

Chinas auf Prüfungen ausgerichtetes Bildungssystem trainiert Menschen darin, schwierige Probleme zu lösen, ermutigt sie aber selten zu fragen, ob diese Probleme überhaupt existieren sollten.

Diese Denkweise kann sich in Engineering-Organisationen fortsetzen.

Manche Ingenieure sind hervorragend darin, komplizierte technische Probleme zu lösen, fragen sich jedoch selten, ob diese Probleme überhaupt gelöst werden müssen.

Manchmal schaffen sie sogar Probleme, wo gar keine vorhanden sind.

Im Software-Engineering gibt es keine perfekte Architektur, kein perfektes Framework und keine allgemeingültig richtige Lösung. Fast jede technische Entscheidung lässt sich mit genügend Argumenten, Benchmarks und sorgfältig ausgewählten Abwägungen rechtfertigen.

Das lässt viel Raum für Organisationspolitik.

Solange ein Vorschlag technisch vernünftig klingt und die richtigen Personen zufriedenstellt, kann ein Engineering-Team beinahe alles rechtfertigen.

Ein neues Framework bauen. Ein bestehendes System neu schreiben. Eine weitere Abstraktionsschicht einführen. Einen neuen technischen Standard schaffen.

Und dann die Komplexität des Projekts, die Zahl der beteiligten Ingenieure und seine vermeintlichen technischen Errungenschaften nutzen, um Beförderungen zu sichern.

**Das Ziel ist nicht mehr, Probleme zu lösen. Es ist, Probleme zu erzeugen, für deren Bearbeitung man befördert wird.**

Und weil es keine perfekte Architektur gibt, gibt es immer noch ein Problem zu lösen, noch ein Framework zu bauen und noch einen Grund, die Organisation beschäftigt zu halten.

Die eigentliche Frage, ob all das genügend Wert schafft, um seine Kosten zu rechtfertigen, wird oft bequemerweise ignoriert.

**Wenn technische Komplexität zum Weg zur Beförderung wird, wird Einfachheit zur Bedrohung.**

## Wenn Abstraktion weitere Abstraktion erzeugt

Hier ist etwas beinahe Absurdes.

In einem chinesischen Internetunternehmen existierten mehrere Cross-Platform-Frameworks gleichzeitig.

Schließlich wurde ein weiteres Framework entwickelt, um diese bestehenden Frameworks miteinander kompatibel zu machen.

Man muss sich das einmal vorstellen.

**Wir bauten Abstraktionen, um Komplexität zu verringern, und dann eine weitere Abstraktion, um die von diesen Abstraktionen erzeugte Komplexität zu beherrschen.**

Lächerlich.

Und das geschah, bevor KI-Programmieragenten begannen, die Wirtschaftlichkeit der Softwareentwicklung zu verändern.

## Die Wirtschaftlichkeit plattformübergreifender Entwicklung

All das lässt sich mit einer einfachen Formel betrachten.

Definieren wir die Variablen:

* $V_{cross}$ — Wirtschaftlicher Nettowert des Einsatzes eines Cross-Platform-Frameworks.
* $C_{saved}$ — Tatsächlich eingesparte Entwicklungs- und Wartungskosten durch plattformübergreifende Wiederverwendung von Code.
* $C_{complexity}$ — Zusätzliche Kosten durch Abstraktionen, Kompatibilitätsprobleme, Debugging und Performance-Optimierung.
* $C_{ecosystem}$ — Kosten für die Pflege von Entwicklerwerkzeugen, SDKs, Testinfrastruktur und Kompatibilität mit Plattform-APIs.
* $C_{organization}$ — Zusätzliche Kosten durch Abstimmung, Bürokratie, Organisationspolitik und beförderungsgetriebene Projekte.
* $C_{opportunity}$ — Opportunitätskosten durch verzögerte Markteinführung, Rückstand bei Plattform-APIs, schlechteres Nutzererlebnis und verlorene plattformspezifische Differenzierung.

Die Formel lautet:

$$
V_{cross} = C_{saved} - C_{complexity} - C_{ecosystem} - C_{organization} - C_{opportunity}
$$

Ein Cross-Platform-Framework schafft nur dann einen positiven wirtschaftlichen Wert, wenn die tatsächlich eingesparten Kosten die zusätzlich verursachten Kosten übersteigen.

Und diese Frage war bereits vor der KI berechtigt.

## Die Wirtschaftlichkeit plattformübergreifender Entwicklung im KI-Zeitalter

Sehen wir uns nun an, wie KI diese Gleichung verändert.

**Erstens senken KI-Programmieragenten die Kosten nativer Entwicklung drastisch.**

Dadurch schrumpfen die Entwicklungskosten, die Cross-Platform-Frameworks ursprünglich einsparen sollten.

$$
C_{saved} \downarrow
$$

**Zweitens machen der neue Kalte Krieg und das KI-Wettrüsten native Plattformfunktionen immer wertvoller.**

On-Device-KI beziehungsweise Edge-KI wird unweigerlich zu einem wesentlichen Bestandteil von iOS, Android und anderen Computerplattformen werden.

Native Entwicklung bietet schnelleren Zugriff auf neue APIs, bessere Performance, einfachere Integration und direkteren Zugang zu plattformspezifischer Hard- und Software.

Doch es gibt noch eine weitere Frage, die sich lohnt.

**Warum sollten iOS- und Android-Anwendungen überhaupt identisch sein?**

Windows- und Linux-Anwendungen müssen weder gleich aussehen noch sich gleich verhalten. Warum sollten mobile Anwendungen das tun?

Verschiedene Plattformen haben unterschiedliche Hardware, Betriebssysteme, KI-Fähigkeiten und Nutzererwartungen.

In den kommenden Jahren werden Apple und Google ihre eigenen On-Device-KI-Funktionen, Modelle, Hardwarebeschleunigung, Datenschutzmechanismen und Integrationen auf Systemebene weiterentwickeln.

Warum sollte sich ein Produkt auf die gemeinsame Schnittmenge dieser Möglichkeiten beschränken?

In einer Zeit intensiven technologischen Wettbewerbs können plattformspezifische Unterschiede zu Wettbewerbsvorteilen werden, statt zu Problemen, die beseitigt werden müssen.

Und wenn Unternehmen bei Performance, Nutzererlebnis und Innovationsgeschwindigkeit konkurrieren, fallen Entwicklungskosten relativ weniger ins Gewicht.

Das erhöht die Opportunitätskosten der Abhängigkeit von Cross-Platform-Frameworks.

$$
C_{opportunity} \uparrow
$$

**Drittens beseitigt KI nicht die Komplexität, die Cross-Platform-Frameworks mit sich bringen.**

KI-Programmieragenten können Entwicklern helfen, native Module schneller zu bauen, neue APIs anzubinden und Cross-Platform-Frameworks schneller zu pflegen.

Doch Code zu schreiben ist nur ein Teil des Problems.

Ein Cross-Platform-Framework führt weiterhin zusätzliche Laufzeitschichten, Integrationsgrenzen, Kompatibilitätsanforderungen und Debugging-Komplexität ein.

Wenn etwas schiefgeht, müssen Entwickler möglicherweise herausfinden, ob das Problem vom Betriebssystem, von der nativen Implementierung, vom Framework oder von deren Zusammenspiel ausgeht.

KI kann die Kosten für den Umgang mit diesen Problemen senken, aber die architektonische Komplexität nicht verschwinden lassen.

Gleichzeitig macht KI native Entwicklung günstiger, ohne diese zusätzlichen Abstraktionsschichten zu benötigen.

**KI senkt die Kosten für die Implementierung von Abstraktionen, beseitigt aber nicht die durch diese Abstraktionen verursachte Komplexität.**

Daraus folgt:

$$
V_{cross} \downarrow
$$

**Der wirtschaftliche Wert von Cross-Platform-Frameworks gerät von beiden Seiten unter Druck.**

Native Implementierung wird günstiger, während plattformspezifische Fähigkeiten wertvoller werden.

## Den Kern wiederverwenden, nicht unbedingt die ganze App

Als ich 2024 meine ASR-/TTS-App entwickelte, entschied ich mich schließlich gegen ein plattformübergreifendes Anwendungsframework.

Ich wollte direkt mit nativen Fähigkeiten arbeiten, darunter Core ML und das C/C++-Inferenzökosystem rund um Whisper.

Interessanterweise ist [whisper.cpp](https://github.com/ggml-org/whisper.cpp) selbst ein plattformübergreifendes Projekt.

Doch das ist eine grundlegend andere Art der Wiederverwendung von Code.

Eine C/C++-Inferenzengine über Betriebssysteme hinweg gemeinsam zu nutzen, ist nicht dasselbe, wie eine komplette Anwendung durch ein gemeinsames UI-Framework, eine gemeinsame Laufzeit und ein gemeinsames Entwicklerökosystem zu zwingen.

Eine native iOS-App kann SwiftUI und Core ML nutzen. Eine native Android-App kann Kotlin und Android-spezifische Beschleunigung verwenden. Beide können dennoch geeignete Teile desselben Inferenzkerns wiederverwenden.

**Plattformübergreifende Code-Wiederverwendung ist nicht dasselbe wie ein plattformübergreifendes Anwendungsframework.**

Mein Argument richtet sich nicht gegen gemeinsam genutzten Code. Es richtet sich gegen die Annahme, dass eine gemeinsame Implementierung der gesamten Anwendung immer wirtschaftlich vorteilhaft ist.

Und KI macht diese Unterscheidung immer wichtiger.

## Die unbequeme Mitte

Warum für einfache Anwendungen, inhaltsgetriebene Produkte und häufig aktualisierte Seiten nicht einfach Webtechnologien verwenden?

Das Web bietet bereits eine ausgereifte, breit unterstützte Plattform mit einem riesigen Entwicklerökosystem.

Warum bei funktionsreichen Anwendungen, insbesondere solchen mit tiefer Integration in On-Device-KI, Hardwarebeschleunigung und Betriebssystemfunktionen, nicht nativ entwickeln?

Plattformübergreifende Anwendungsframeworks geraten zunehmend zwischen diese beiden Seiten.

Natürlich haben sie in bestimmten Situationen weiterhin einen Wert. Ein kleines Team, das eine mäßig komplexe Anwendung mit begrenzten plattformspezifischen Anforderungen entwickelt, kann stark von React Native oder Flutter profitieren.

Doch dieser Wert sollte nachgewiesen und nicht einfach vorausgesetzt werden.

Und wir sollten aufhören, Code-Wiederverwendung als unantastbare Engineering-Tugend zu behandeln.

Vor Jahrzehnten machte Java die Idee „Write Once, Run Anywhere“ populär. Ein großer Teil des modernen Software-Engineerings ist derselben Richtung gefolgt: Abstraktionen einzuführen, um die Kosten der Unterstützung verschiedener Plattformen zu senken.

KI verändert die wirtschaftliche Grundlage dieser Entscheidung.

Vielleicht werden wir wieder getrennte Implementierungen für verschiedene Plattformen bauen, nicht weil wir die Lehren der Vergangenheit vergessen haben, sondern weil sich die Kosten der Implementierung selbst verändert haben.

In der Zukunft geht es vielleicht nicht darum, Plattformunterschiede zu beseitigen.

Vielleicht geht es darum, diese Unterschiede zu nutzen und ihre Umsetzung zugleich drastisch günstiger zu machen.

**Den Kern wiederverwenden. Die Implementierung automatisieren. Die Plattform bewahren.**
