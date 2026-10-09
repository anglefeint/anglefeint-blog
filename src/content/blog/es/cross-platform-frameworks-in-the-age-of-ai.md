---
title: "El incómodo futuro de los frameworks multiplataforma para iOS/Android en la era de la IA"
description: "Cómo la IA, las capacidades nativas y los costes organizativos ocultos ponen en cuestión la economía de los frameworks móviles multiplataforma."
pubDate: '2026-10-09'
author: 'AngleFeint'
tags: ['ai', 'software-engineering', 'mobile', 'cross-platform', 'organizations']
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

*La ilusión multiplataforma: ingeniería, burocracia y la era de la IA*

Pasé más de una década trabajando en algunas de las mayores empresas de internet de la China continental. Más tarde me trasladé al extranjero y me incorporé a una empresa tecnológica global que operaba en todo el mundo, pero no en la China continental. Después fundé mi propia empresa en el extranjero.

Estas experiencias me dieron una perspectiva diferente sobre la cultura de ingeniería y las decisiones técnicas que había presenciado en China.

Mis dudas sobre los frameworks multiplataforma comenzaron en 2024.

Por entonces estaba desarrollando una aplicación móvil de ASR/TTS en mi tiempo libre. En lugar de depender de la computación en la nube, quería aprovechar la capacidad de cálculo del dispositivo, ya que tanto iOS como Android ofrecían APIs de aprendizaje automático cada vez más potentes.

También había empezado a utilizar Cursor para el desarrollo asistido por IA.

Al investigar soluciones multiplataforma para mi aplicación, llegué a una conclusión: los frameworks multiplataforma para iOS/Android serían cada vez menos relevantes en la era de la IA.

Y quizá su valor ya se había exagerado incluso antes de la IA.

Recientemente encontré el artículo de ingeniería de Shopify [El desarrollo nativo es ahora el futuro móvil de Shopify](https://shopify.engineering/back-to-native), que describe su decisión de abandonar React Native y volver al desarrollo nativo.

Me recordó las dudas que tenía sobre los frameworks multiplataforma en 2024 y me animó a poner por escrito mis propias ideas de una vez.

Shopify afirma que React Native fue la elección correcta en 2020. Yo no estoy tan convencido.

La propia Shopify reconoce haber dedicado mucho tiempo y recursos a la optimización del rendimiento, las mejoras del framework y el mantenimiento de dependencias. Pero estos son solo algunos de los costes del desarrollo multiplataforma. ¿Qué hay de los costes ocultos de mantener un ecosistema de desarrolladores, la sobrecarga organizativa y las oportunidades de negocio perdidas?

¿Llegó Shopify a calcular por completo el verdadero coste económico de aquella decisión? Lo dudo seriamente.

Mi conclusión se apoya en varias razones:

* **Los agentes de programación con IA** están reduciendo drásticamente el coste de desarrollar y mantener aplicaciones nativas.
* **La IA en el dispositivo** hace más atractivo el desarrollo nativo, mientras que los frameworks multiplataforma suelen ir por detrás de las nuevas capacidades de las plataformas.
* **Los costes ocultos,** incluidos el mantenimiento del framework, los ecosistemas internos de desarrolladores, la coordinación entre equipos y la política organizativa, suelen subestimarse.
* **La nueva Guerra Fría y la carrera armamentística de la IA:** Estamos en una nueva Guerra Fría, y la IA se ha convertido en uno de sus campos de batalla estratégicos más importantes, como la Iniciativa de Defensa Estratégica, conocida como «Guerra de las Galaxias», durante la anterior Guerra Fría. A medida que se intensifica la competencia, el tiempo de salida al mercado y la experiencia de usuario cobran más importancia relativa frente a los costes de desarrollo.

Pero antes de hablar de IA, quiero compartir algo que observé en la industria china de internet.

## ¿Escribir una vez, ejecutar en cualquier lugar?

En varias grandes empresas chinas de internet donde trabajé, los frameworks multiplataforma solían promoverse como una forma de reducir los costes de desarrollo.

Pero sus ambiciones iban mucho más allá de compartir código entre iOS y Android.

Las empresas querían escribir el código una sola vez y ejecutarlo en todas partes: iOS, Android, H5, miniprogramas de WeChat, miniprogramas de Alipay y, a veces, incluso más plataformas.

El argumento parecía sencillo: escribir una vez, ejecutar en cualquier lugar.

Pero la realidad era mucho más complicada.

* **¿Escribir una vez? No necesariamente.** A veces los desarrolladores acababan escribiendo el código tres veces: una para iOS, otra para Android y otra para el framework multiplataforma. Dar soporte a la Web o a plataformas de miniprogramas podía añadir aún más trabajo.
* **Rendimiento y experiencia de usuario.** A menudo se necesitaba un esfuerzo de ingeniería considerable para acercarse al rendimiento nativo, y algunas limitaciones no podían eliminarse del todo.
* **Retrasos en las APIs de las plataformas.** Las nuevas capacidades de iOS y Android no siempre estaban disponibles de inmediato a través de los frameworks multiplataforma.
* **Sobrecarga de coordinación.** El desarrollo multiplataforma introducía dependencias adicionales entre los equipos de negocio, los equipos del framework y los equipos de las plataformas nativas.
* **Política organizativa.** Algunos proyectos de ingeniería parecían más centrados en los logros técnicos, la expansión de los equipos y los ascensos que en el valor real para el negocio.
* **Iteraciones innecesarias.** ¿Realmente necesitaba el negocio cambiar la aplicación con tanta frecuencia? ¿O algunos proyectos eran simplemente trabajo creado por crear trabajo?

Y cada capa adicional de complejidad tiene un coste.

Aunque un framework reduzca el tiempo de desarrollo, ¿cómo medimos el rendimiento, la experiencia de usuario y las oportunidades de negocio sacrificados por el camino?

## El coste oculto: un ecosistema interno de desarrolladores

Uno de los costes más subestimados de construir un framework multiplataforma es mantener su ecosistema de desarrolladores.

Apple y Google invierten mucho en sus ecosistemas de desarrolladores porque estos refuerzan directamente sus plataformas y sus negocios.

Pero cuando una empresa de internet construye su propio framework multiplataforma, en la práctica crea otra plataforma de desarrollo dentro de la empresa.

Debe mantener puentes a APIs nativas, componentes de interfaz, herramientas de compilación, herramientas de depuración, infraestructura de pruebas, documentación, integraciones de SDK y compatibilidad con versiones anteriores.

Y ese ecosistema interno debe seguir constantemente la evolución de iOS, Android y, en ocasiones, la Web, los miniprogramas y HarmonyOS.

**La empresa ya no está simplemente construyendo una aplicación. Está manteniendo una plataforma dentro de otra plataforma.**

Utilizar un framework consolidado como React Native puede reducir esta carga, porque Meta y la comunidad de código abierto mantienen gran parte de su ecosistema. Pero las grandes empresas suelen terminar construyendo una extensa infraestructura interna a su alrededor de todos modos.

Entonces, ¿cuánto dinero ahorra realmente ese ecosistema después de contabilizar sus propios costes de desarrollo y mantenimiento?

¿Y se construye porque el negocio lo necesita, o porque una organización de ingeniería necesita algo que construir?

## Actualizaciones en caliente y demanda fabricada

Hay otra razón por la que los frameworks multiplataforma y dinámicos se hicieron tan populares en la industria china de internet: **las actualizaciones en caliente.**

Muchas empresas querían actualizar sus aplicaciones sin pasar cada vez por el proceso tradicional de revisión y publicación de las tiendas de aplicaciones.

Esto resultaba especialmente atractivo para empresas que realizaban campañas de marketing interminables, promociones y experimentos de producto frecuentes.

Pero, al mirar atrás, tengo una pregunta.

¿Realmente necesitaban los usuarios tantos cambios?

¿Creaban esas campañas y las iteraciones constantes suficiente valor de negocio para justificar sus costes?

¿O algunas eran simplemente fabricadas por grandes organizaciones que necesitaban más proyectos, más actividades y más logros?

Un framework que acelera el desarrollo innecesario no necesariamente hace más eficiente a una empresa.

**Puede que simplemente la haga mejor produciendo trabajo innecesario.**

Y, por sofisticada que llegue a ser su infraestructura de ingeniería, una empresa no puede resolver problemas fundamentales del negocio lanzando más funcionalidades.

**La eficiencia de ingeniería no se traduce necesariamente en eficiencia de negocio.**

## Ingeniería orientada a exámenes y complejidad fabricada

Hay otro problema que observé en la industria china de internet: una cultura de ingeniería orientada a exámenes.

El sistema educativo chino, centrado en los exámenes, prepara a las personas para resolver problemas difíciles, pero rara vez las anima a preguntarse si esos problemas deberían existir siquiera.

Esta mentalidad puede trasladarse a las organizaciones de ingeniería.

Algunos ingenieros son excelentes resolviendo problemas técnicos complicados, pero rara vez se preguntan si esos problemas necesitan resolverse.

A veces incluso crean problemas donde no los hay.

En ingeniería de software no existe una arquitectura perfecta, un framework perfecto ni una solución universalmente correcta. Casi cualquier decisión técnica puede justificarse con suficientes argumentos, pruebas de rendimiento y compromisos cuidadosamente seleccionados.

Esto deja mucho espacio para la política organizativa.

Mientras una propuesta suene técnicamente razonable y satisfaga a las personas adecuadas, un equipo de ingeniería puede justificar casi cualquier cosa.

Construir un nuevo framework. Reescribir un sistema existente. Introducir otra capa de abstracción. Crear un nuevo estándar técnico.

Después, utilizar la complejidad del proyecto, el número de ingenieros implicados y sus supuestos logros técnicos para conseguir ascensos.

**El objetivo ya no es resolver problemas. Es fabricar problemas por los que merezca la pena ascender.**

Y como no existe una arquitectura perfecta, siempre hay otro problema que resolver, otro framework que construir y otra razón para mantener ocupada a la organización.

La verdadera pregunta —si todo esto crea suficiente valor para justificar su coste— suele ignorarse convenientemente.

**Cuando la complejidad de ingeniería se convierte en una vía de ascenso, la simplicidad se convierte en una amenaza.**

## Cuando la abstracción crea más abstracción

He aquí algo casi absurdo.

En una empresa china de internet coexistían varios frameworks multiplataforma.

Con el tiempo, se desarrolló otro framework para hacer compatibles entre sí aquellos frameworks existentes.

Piénsalo.

**Construimos abstracciones para reducir la complejidad y luego construimos otra abstracción para gestionar la complejidad que habían creado esas abstracciones.**

Ridículo.

Y esto ocurrió antes de que los agentes de programación con IA empezaran a cambiar la economía del desarrollo de software.

## La economía del desarrollo multiplataforma

Todo esto puede examinarse con una fórmula sencilla.

Definamos las variables:

* $V_{cross}$ — Valor económico neto de adoptar un framework multiplataforma.
* $C_{saved}$ — Costes reales de desarrollo y mantenimiento ahorrados mediante la reutilización de código entre plataformas.
* $C_{complexity}$ — Costes adicionales de las abstracciones, los problemas de compatibilidad, la depuración y la optimización del rendimiento.
* $C_{ecosystem}$ — Costes de mantener herramientas de desarrollo, SDK, infraestructura de pruebas y compatibilidad con las APIs de las plataformas.
* $C_{organization}$ — Costes adicionales de la coordinación, la burocracia, la política organizativa y los proyectos impulsados por los ascensos.
* $C_{opportunity}$ — Costes de oportunidad derivados del retraso en la salida al mercado, el desfase en las APIs, una experiencia de usuario inferior y la pérdida de diferenciación entre plataformas.

La fórmula es:

$$
V_{cross} = C_{saved} - C_{complexity} - C_{ecosystem} - C_{organization} - C_{opportunity}
$$

Un framework multiplataforma solo crea valor económico positivo cuando los costes que realmente ahorra superan los costes adicionales que introduce.

Y esta ya era una pregunta que merecía hacerse antes de la IA.

## La economía del desarrollo multiplataforma en la era de la IA

Veamos ahora cómo cambia la IA esta ecuación.

**Primero, los agentes de programación con IA están reduciendo drásticamente el coste del desarrollo nativo.**

Como consecuencia, están disminuyendo los costes de desarrollo que los frameworks multiplataforma se diseñaron originalmente para ahorrar.

$$
C_{saved} \downarrow
$$

**Segundo, la nueva Guerra Fría y la carrera armamentística de la IA están haciendo cada vez más valiosas las capacidades nativas de las plataformas.**

La IA en el dispositivo, o IA en el borde, se convertirá inevitablemente en una parte esencial de iOS, Android y otras plataformas de computación.

El desarrollo nativo ofrece acceso más rápido a nuevas APIs, mejor rendimiento, integración más sencilla y acceso más directo al hardware y software específicos de cada plataforma.

Pero hay otra pregunta que merece hacerse.

**¿Por qué deberían ser idénticas las aplicaciones de iOS y Android, para empezar?**

Las aplicaciones de Windows y Linux no tienen por qué verse ni comportarse igual. ¿Por qué deberían hacerlo las aplicaciones móviles?

Las distintas plataformas tienen hardware, sistemas operativos, capacidades de IA y expectativas de los usuarios diferentes.

En los próximos años, Apple y Google seguirán desarrollando sus propias capacidades de IA en el dispositivo, modelos, aceleración por hardware, mecanismos de privacidad e integraciones a nivel de sistema.

¿Por qué debería un producto limitarse al subconjunto común de esas capacidades?

En una época de intensa competencia tecnológica, las diferencias específicas de cada plataforma pueden convertirse en ventajas competitivas, en lugar de problemas que haya que eliminar.

Y cuando las empresas compiten en rendimiento, experiencia de usuario y velocidad de innovación, los costes de desarrollo tienen relativamente menos peso.

Esto aumenta el coste de oportunidad de depender de frameworks multiplataforma.

$$
C_{opportunity} \uparrow
$$

**Tercero, la IA no elimina la complejidad que introducen los frameworks multiplataforma.**

Los agentes de programación con IA pueden ayudar a los desarrolladores a construir módulos nativos, adaptar nuevas APIs y mantener frameworks multiplataforma más deprisa.

Pero escribir código es solo una parte del problema.

Un framework multiplataforma sigue introduciendo capas adicionales de ejecución, fronteras de integración, requisitos de compatibilidad y complejidad de depuración.

Cuando algo falla, los desarrolladores pueden tener que determinar si el problema procede del sistema operativo, de la implementación nativa, del framework o de la integración entre ellos.

La IA puede reducir el coste de lidiar con estos problemas, pero no puede hacer desaparecer la complejidad arquitectónica.

Mientras tanto, la IA está abaratando el desarrollo nativo sin exigir esas capas adicionales de abstracción.

**La IA reduce el coste de implementar abstracciones, pero no elimina la complejidad que introducen esas abstracciones.**

Por tanto:

$$
V_{cross} \downarrow
$$

**El valor económico de los frameworks multiplataforma está siendo presionado por ambos lados.**

La implementación nativa es cada vez más barata, mientras que las capacidades específicas de las plataformas son cada vez más valiosas.

## Reutilizar el núcleo, no necesariamente toda la aplicación

Cuando estaba construyendo mi aplicación ASR/TTS en 2024, finalmente decidí no utilizar un framework de aplicaciones multiplataforma.

Quería trabajar directamente con las capacidades nativas, incluidas Core ML y el ecosistema de inferencia en C/C++ alrededor de Whisper.

Curiosamente, [whisper.cpp](https://github.com/ggml-org/whisper.cpp) es, en sí mismo, un proyecto multiplataforma.

Pero se trata de una forma de reutilización de código fundamentalmente distinta.

Compartir un motor de inferencia C/C++ entre sistemas operativos no es lo mismo que obligar a toda una aplicación a pasar por un framework de interfaz, un entorno de ejecución y un ecosistema de desarrolladores compartidos.

Una aplicación nativa de iOS puede utilizar SwiftUI y Core ML. Una aplicación nativa de Android puede utilizar Kotlin y aceleración específica de Android. Ambas pueden seguir reutilizando las partes adecuadas del mismo núcleo de inferencia.

**La reutilización de código multiplataforma no es lo mismo que un framework de aplicaciones multiplataforma.**

Mi argumento no se opone a compartir código. Se opone a la suposición de que compartir la implementación de una aplicación entera siempre es económicamente beneficioso.

Y la IA hace que esta distinción sea cada vez más importante.

## El incómodo punto intermedio

Para aplicaciones sencillas, productos centrados en contenidos y páginas que se actualizan con frecuencia, ¿por qué no utilizar directamente tecnologías web?

La Web ya ofrece una plataforma madura, ampliamente compatible y con un enorme ecosistema de desarrolladores.

Para aplicaciones con muchas funcionalidades, especialmente las profundamente integradas con IA en el dispositivo, aceleración por hardware y capacidades del sistema operativo, ¿por qué no recurrir al desarrollo nativo?

Los frameworks de aplicaciones multiplataforma quedan cada vez más atrapados en medio.

Por supuesto, siguen teniendo valor en determinadas situaciones. Un equipo pequeño que construye una aplicación de complejidad moderada con requisitos limitados de funciones específicas de cada plataforma puede beneficiarse mucho de React Native o Flutter.

Pero ese valor debe demostrarse, no darse por supuesto.

Y deberíamos dejar de tratar la reutilización de código como una virtud incuestionable de la ingeniería.

Hace décadas, Java popularizó la idea de escribir una vez y ejecutar en cualquier lugar. Buena parte de la ingeniería de software moderna ha seguido esa misma dirección: introducir abstracciones para reducir el coste de dar soporte a distintas plataformas.

La IA está cambiando la economía que sustenta esa decisión.

Puede que volvamos a construir implementaciones separadas para distintas plataformas, no porque hayamos olvidado las lecciones del pasado, sino porque el coste de la propia implementación ha cambiado.

Puede que el futuro no consista en eliminar las diferencias entre plataformas.

Puede que consista en aprovechar esas diferencias y, al mismo tiempo, abaratar drásticamente su implementación.

**Reutiliza el núcleo. Automatiza la implementación. Conserva la plataforma.**
