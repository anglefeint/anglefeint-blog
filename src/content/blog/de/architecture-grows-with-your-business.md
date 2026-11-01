---
title: 'Architektur wächst mit dem Geschäft'
description: 'Über interne Plattformen, organisatorische Anreize und eine Architektur, die sich mit dem Geschäft weiterentwickeln kann.'
pubDate: '2026-11-01'
author: 'AngleFeint'
tags: ['architecture', 'software-engineering', 'organizations']
heroImage: '../../../assets/blog/default-covers/ai-02.webp'
---

Als ich bei einigen der größten Internetunternehmen Chinas arbeitete, hörte ich in Besprechungen oft große Worte: „Best Practices für diese Technologie“, „die optimale Architektur“ und „die Infrastrukturplattform der nächsten Generation“.

Damals wurden Cloud-Dienste immer beliebter, doch die Unternehmen, bei denen ich arbeitete, bauten einen großen Teil ihrer Infrastruktur noch selbst. Sie hatten eigene Infrastrukturabteilungen mit großen Teams, die interne Systeme entwickelten und warteten.

Stellt euch ein kleines AWS in jedem großen Internetunternehmen vor.

Einige dieser Systeme lösten echte Probleme. Andere schufen eine Last, die viel länger blieb als die Menschen, die sie aufgebaut hatten.

Mitarbeiter kamen und gingen. Interne Politik, Leistungsbeurteilungen und Beförderungsvoraussetzungen beeinflussten technische Entscheidungen. Ein Framework zu entwickeln konnte Anerkennung und Einfluss bringen, während seine Wartung Jahre später weit weniger Aufmerksamkeit erhielt.

In einem Unternehmen nahm mich einmal eine Führungskraft aus meiner Abteilung beiseite und sagte, meine Architektur sei zu sehr darauf ausgerichtet, dem Geschäft zu dienen. Er erklärte, dass er in seiner eigenen technischen Plattform bewusst Geschäftsfunktionen verschiedener Teams an die darunterliegende Infrastruktur koppelte. Dadurch ließen sich diese Teile schwerer voneinander trennen, und die Teams wurden stärker von ihm abhängig.

Er beschrieb eine absichtliche Entwurfsentscheidung. Die Abhängigkeiten stärkten seine Position, während die Verantwortung für die daraus entstehende Komplexität beim Unternehmen blieb.

Dieses Gespräch ist mir im Gedächtnis geblieben. Ich bezweifle, dass es ein Einzelfall war, selbst innerhalb dieser Abteilung, geschweige denn in der gesamten Branche.

Eine Architektur, die jemandes Position sichern soll, kann es dem Geschäft erschweren, die Richtung zu ändern. Wenn das Unternehmen einen Dienst abtrennen, eine Komponente ersetzen oder eine Plattform nicht mehr nutzen muss, werden diese absichtlich geschaffenen Abhängigkeiten zu Hindernissen.

Das ist einer der Gründe, warum ich die Begeisterung für die Entwicklung interner Frameworks hinterfrage.

Eine Abteilung entwickelt möglicherweise ihr eigenes Framework, obwohl es bereits eine ausgereifte und weitverbreitete Open-Source-Alternative gibt. Warum sollten wir erwarten, dass unsere Version besser ist? Und noch wichtiger: Warum sollten wir erwarten, dass sie auf Dauer besser bleibt?

Selbst wenn die interne Version zum Start einen Vorteil hat, erfordert dieser Vorteil fortlaufende Investitionen. Ein breit eingesetztes Open-Source-Projekt wird in vielen Unternehmen und realen Situationen erprobt. Eine aktive Community kann Fehler entdecken, Korrekturen beitragen, die Dokumentation verbessern und die Software an neue Anforderungen anpassen.

Unterdessen verlassen die ursprünglichen internen Entwickler möglicherweise das Unternehmen. Ihre Nachfolger müssen das System kennenlernen und Entscheidungen nachvollziehen, die nie ordentlich dokumentiert wurden. Andere Teams machen sich davon abhängig. Irgendwann können ein Upgrade oder eine Ablösung erheblichen Aufwand und Risiken mit sich bringen.

Was als technische Leistung begann, kann zu technischen Schulden werden.

Ich habe zu viele unnötige Frameworks gesehen, die entwickelt, eingeführt und anschließend unzureichend gewartet wurden. „Die Open-Source-Lösung passt nicht zu unseren Anforderungen“ war eine vertraute Erklärung. Manchmal stimmte das. Manchmal hätten eine Konfiguration, eine kleine Erweiterung oder ein Beitrag zum Upstream-Projekt das Problem lösen können.

Bevor wir uns auf eine interne Alternative festlegen, sollten wir drei Fragen beantworten können: Welche Einschränkung blockiert das Geschäft? Welchen wesentlichen Vorteil wird unsere eigene Lösung bieten? Kann das Unternehmen die Verantwortung auch dann noch tragen, wenn das ursprüngliche Team nicht mehr da ist?

Es gibt auch Situationen, in denen die Entwicklung eigener Technologie notwendig ist.

Ein neues Geschäftsmodell, ein wirklich neuartiges technisches Produkt oder eine besondere Betriebsumgebung können Fähigkeiten erfordern, die bestehende Werkzeuge nicht bieten. In solchen Fällen kann es das Unternehmen ausbremsen, wenn man das Geschäft in die verfügbaren Werkzeuge zwängt. Die fehlenden Fähigkeiten zu entwickeln kann für sein Wachstum entscheidend sein.

Diese Arbeit abzulehnen kann genauso schädlich sein, wie etwas Unnötiges zu bauen.

Den Unterschied zu erkennen erfordert Urteilsvermögen und Ehrlichkeit gegenüber uns selbst. Wir müssen eine Fähigkeit, die das Geschäft tatsächlich benötigt, von einer Plattform unterscheiden, die wir gern besitzen würden. Und wir müssen dieses Urteil überdenken, wenn sich das Geschäft und die verfügbaren Werkzeuge verändern.

Das führt mich zu einer umfassenderen Frage: Was macht eine gute Architektur aus?

Ich glaube nicht, dass es eine einzige Standardarchitektur gibt, der jedes Unternehmen folgen sollte. Die Architekturen, die wir heute studieren, sind entstanden, als Menschen auf bestimmte Geschäfte, Einschränkungen und Werkzeuge reagierten. Wir sollten diese Bedingungen verstehen, bevor wir ihre Antworten übernehmen.

Das frühe YouTube ist ein Beispiel, auf das ich immer wieder zurückkomme. Seine Infrastruktur hatte raue Kanten, und ein kleines Entwicklungsteam beseitigte laufend Engpässe, während der Dienst wuchs. Das Geschäft wurde wertvoll, während sich seine Architektur noch weiterentwickelte. Es musste nicht erst eine fertige Antwort auf jedes zukünftige Problem haben, um erfolgreich zu sein.

Im Verlauf meiner eigenen Karriere bin ich zu einer einfachen Überzeugung gelangt: Eine gute Architektur kann sich mit dem Geschäft weiterentwickeln.

Das bedeutet nicht, dass wir aufhören sollten, Fachaufsätze zu lesen oder von anderen Ingenieuren zu lernen. Ihre Erfahrungen helfen uns, bessere Entscheidungen zu treffen. Aber die Architektur anderer zu studieren entbindet uns nicht von der Verantwortung, unser eigenes Geschäft zu verstehen.

Ich bin mit einer Sechzig-Prozent-Lösung zufrieden, wenn sie das Geschäft heute unterstützt und uns Raum lässt, sie morgen zu verbessern. Ich würde sie einer vermeintlich perfekten Architektur vorziehen, deren Aufbau zu lange dauert oder deren Änderung zu teuer wird.

Die restlichen vierzig Prozent werden vielleicht später notwendig. Ein Teil davon wird möglicherweise nie eine Rolle spielen. Wenn sich das Geschäft entwickelt, stellen wir womöglich fest, dass wir Perfektion von Anfang an an den falschen Anforderungen gemessen haben.

Ein funktionierendes System gibt uns etwas Reales, aus dem wir lernen können. Wir sehen, wo Nutzer Schwierigkeiten haben, wo Kosten steigen und welche Einschränkungen das Geschäft tatsächlich bremsen. Diese Erfahrungen helfen uns zu entscheiden, was die nächste Investition verdient.

Die Fähigkeit zur Weiterentwicklung umfasst mehr als das Hinzufügen von Funktionen. Dazu gehören auch das Aktualisieren von Abhängigkeiten, das Entfernen unnötiger Komponenten, das Ersetzen eines internen Systems oder das Übertragen einer Aufgabe an einen externen Dienst.

Manchmal genügt ein vorübergehendes System. Wenn es das Geschäft heute unterstützt und eine spätere Ablösung bezahlbar ist, erfüllt es möglicherweise bereits seinen Zweck. Nicht jedes System muss ewig bestehen.

Heute bieten Cloud-Plattformen und ausgereifte Open-Source-Projekte viele Fähigkeiten, die Unternehmen früher selbst entwickeln mussten. Das verändert die Wirtschaftlichkeit von Architektur.

Für ein Unternehmen, das Infrastruktur verkauft, kann die Entwicklung besserer Infrastruktur das Geschäft selbst sein. Bei einem anderen Unternehmen muss dieselbe Investition ihren Platz durch die Geschäftsergebnisse rechtfertigen, die sie ermöglicht.

Diese Rechnung beginnt vor dem Entwicklungsstart und erstreckt sich über die gesamte Lebensdauer des Systems. Sie umfasst Entwicklung und Tests, die Schulung der nutzenden Teams, Integration, Wartung, Fehlersuche, Upgrades und schließlich Migration oder Stilllegung. Einsparungen bei Servern sind nur ein Teil der Rechnung. Wir müssen auch berücksichtigen, was diese Menschen andernorts hätten erreichen können.

Bevor wir einen Prozess optimieren, sollten wir fragen, ob das Geschäft diesen Prozess überhaupt noch braucht.

Braucht jedes große Unternehmen noch eine große Infrastrukturabteilung? Ich glaube nicht. Ihre Größe sollte sich nach den Bedürfnissen des Geschäfts richten, nach den andernorts verfügbaren Fähigkeiten und nach der Verantwortung, die das Unternehmen dauerhaft tragen kann.

Architektur entwickelt sich weiter; sie lässt sich nicht vollständig im Voraus entwerfen. Wir können Pläne für die nächsten drei, fünf oder sogar zehn Jahre machen. Unsere Architektur sollte aber Spielraum lassen, um sich an Veränderungen im Geschäft anzupassen.

Wenn jemand behauptet, seine Architektur werde in den nächsten zehn Jahren jeden Bedarf abdecken, behauptet er im Grunde, die Zukunft vorhersagen zu können. Und wenn du die nächsten zehn Jahre wirklich vorhersagen kannst, hast du mit dieser Gabe doch sicher Besseres zu tun, als Softwarearchitektur zu entwerfen.
