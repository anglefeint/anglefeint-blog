---
title: 'La arquitectura crece con tu negocio'
description: 'Sobre las plataformas internas, los incentivos organizativos y una arquitectura capaz de evolucionar con el negocio.'
pubDate: '2026-11-01'
author: 'AngleFeint'
tags: ['architecture', 'software-engineering', 'organizations']
heroImage: '../../../assets/blog/default-covers/ai-02.webp'
---

Cuando trabajaba en algunas de las mayores empresas de internet de China, solía escuchar expresiones grandilocuentes en las reuniones: «las mejores prácticas para esta tecnología», «la arquitectura óptima» y «la plataforma de infraestructura de próxima generación».

En aquella época, los servicios en la nube estaban ganando popularidad, pero las empresas en las que trabajaba seguían construyendo por su cuenta buena parte de su infraestructura. Tenían departamentos de infraestructura dedicados, con grandes equipos que desarrollaban y mantenían sistemas internos.

Imagina un pequeño AWS dentro de cada gran empresa de internet.

Algunos de aquellos sistemas resolvían problemas reales. Otros creaban una carga que perduraba mucho después de que se marcharan quienes los habían construido.

Los empleados llegaban y se iban. La política interna, las evaluaciones de desempeño y los requisitos para ascender influían en las decisiones técnicas. Crear un framework podía aportar reconocimiento e influencia, mientras que mantenerlo años después recibía mucha menos atención.

En una empresa, un responsable de mi departamento me llevó aparte y me dijo que mi arquitectura se centraba demasiado en servir al negocio. Me explicó que, en su propia plataforma tecnológica, acoplaba deliberadamente las funcionalidades de negocio de distintos equipos a la infraestructura subyacente. Eso hacía que esas partes fueran más difíciles de separar y que los equipos dependieran más de él.

Estaba describiendo una decisión de diseño intencionada. Las dependencias reforzaban su posición, mientras que la empresa quedaba a cargo de la complejidad que generaban.

Aquella conversación se me quedó grabada. Dudo que fuera un caso aislado, incluso dentro de aquel departamento, por no hablar del sector en su conjunto.

Una arquitectura construida para preservar la posición de alguien puede dificultar que el negocio cambie de rumbo. Cuando la empresa necesita separar un servicio, sustituir un componente o dejar de utilizar una plataforma, esas dependencias creadas deliberadamente se convierten en obstáculos.

Esta es una de las razones por las que cuestiono el entusiasmo por construir frameworks internos.

Un departamento puede desarrollar su propio framework aunque ya exista una alternativa de código abierto madura y ampliamente utilizada. ¿Por qué deberíamos esperar que nuestra versión fuera mejor? Y, más importante aún, ¿por qué deberíamos esperar que siguiera siendo mejor con el tiempo?

Aunque la versión interna tenga una ventaja en el momento de su lanzamiento, esa ventaja exige una inversión continua. Un proyecto de código abierto ampliamente adoptado se pone a prueba en muchas empresas y situaciones reales. Una comunidad activa puede descubrir errores, aportar correcciones, mejorar la documentación y adaptar el software a nuevos requisitos.

Mientras tanto, los desarrolladores internos originales pueden marcharse. Quienes los sustituyan tendrán que aprender el sistema y comprender decisiones que nunca se documentaron adecuadamente. Otros equipos establecen dependencias respecto a él. Al final, actualizarlo o reemplazarlo puede implicar un trabajo y un riesgo considerables.

Lo que empezó como un logro técnico puede convertirse en deuda técnica.

He visto demasiados frameworks innecesarios que se construyen, se adoptan y después no reciben un mantenimiento adecuado. «La solución de código abierto no se ajusta a nuestras necesidades» era una explicación habitual. A veces era cierto. Otras veces, una configuración, una pequeña extensión o una contribución al proyecto original habrían bastado para resolver el problema.

Antes de comprometernos con una alternativa interna, deberíamos ser capaces de responder a tres preguntas: ¿Qué limitación está bloqueando el negocio? ¿Qué ventaja significativa aportará nuestra propia solución? ¿Puede la empresa seguir asumiendo esa responsabilidad cuando el equipo original se marche?

También hay ocasiones en las que construir nuestra propia tecnología es necesario.

Un nuevo modelo de negocio, un producto tecnológico verdaderamente nuevo o un entorno operativo singular pueden exigir capacidades que las herramientas existentes no ofrecen. En esas situaciones, obligar al negocio a ajustarse a las herramientas disponibles puede frenar a la empresa. Desarrollar las capacidades que faltan puede ser esencial para su crecimiento.

Negarse a hacer ese trabajo puede ser tan perjudicial como construir algo innecesario.

Distinguir entre ambas situaciones exige criterio y honestidad con nosotros mismos. Debemos diferenciar una capacidad que el negocio realmente necesita de una plataforma que nos gustaría poseer. Y debemos revisar ese juicio a medida que cambian el negocio y las herramientas disponibles.

Esto me lleva a una pregunta más amplia: ¿qué hace que una arquitectura sea buena?

No creo que exista una arquitectura estándar que todas las empresas deban seguir. Las arquitecturas que estudiamos hoy surgieron cuando la gente respondió a negocios, restricciones y herramientas concretos. Deberíamos comprender esas condiciones antes de adoptar sus respuestas.

Los primeros años de YouTube son un ejemplo al que vuelvo a menudo. Su infraestructura tenía aspectos por pulir, y un pequeño equipo de ingeniería iba resolviendo los cuellos de botella a medida que el servicio crecía. El negocio adquirió valor mientras su arquitectura seguía evolucionando. No necesitó tener una respuesta definitiva para cada problema futuro antes de poder triunfar.

A lo largo de mi carrera, he llegado a una convicción sencilla: una buena arquitectura puede evolucionar con el negocio.

Esto no significa que debamos dejar de leer artículos de investigación o de aprender de otros ingenieros. Su experiencia nos ayuda a tomar mejores decisiones. Pero estudiar la arquitectura de otros no nos exime de la responsabilidad de comprender nuestro propio negocio.

Me conformo con una solución al sesenta por ciento si sostiene el negocio hoy y nos deja margen para mejorar mañana. La elegiría antes que una arquitectura supuestamente perfecta que tarde demasiado en construirse o resulte demasiado cara de modificar.

El cuarenta por ciento restante puede volverse necesario más adelante. Puede que parte de él nunca importe. A medida que el negocio se desarrolla, quizá descubramos que desde el principio estábamos midiendo la perfección con respecto a requisitos equivocados.

Un sistema en funcionamiento nos ofrece algo real de lo que aprender. Podemos ver dónde encuentran dificultades los usuarios, dónde crecen los costes y qué limitaciones frenan de verdad al negocio. Esa experiencia nos ayuda a decidir qué merece la siguiente inversión.

La capacidad de evolucionar abarca más que añadir funcionalidades. También incluye actualizar dependencias, eliminar componentes innecesarios, reemplazar un sistema interno o delegar una responsabilidad en un servicio externo.

A veces basta con un sistema temporal. Si sostiene el negocio hoy y sustituirlo más adelante es asequible, puede que ya esté cumpliendo su cometido. No todos los sistemas tienen que durar para siempre.

Hoy, las plataformas en la nube y los proyectos de código abierto maduros proporcionan muchas capacidades que antes las empresas tenían que construir por sí mismas. Eso cambia la economía de la arquitectura.

Para una empresa que vende infraestructura, desarrollar una infraestructura mejor puede ser el propio negocio. Para otra empresa, la misma inversión debe justificar su lugar mediante los resultados de negocio que hace posibles.

Ese cálculo empieza antes de iniciar el desarrollo y continúa durante toda la vida del sistema. Incluye la construcción y las pruebas, la formación de los equipos que lo utilizan, la integración, el mantenimiento, la depuración, las actualizaciones y, finalmente, la migración o la retirada. El ahorro en servidores es solo una parte de la cuenta. También debemos considerar lo que esas personas podrían haber conseguido trabajando en otras cosas.

Antes de optimizar un proceso, deberíamos preguntarnos si el negocio sigue necesitando ese proceso en primer lugar.

¿Sigue necesitando toda gran empresa un gran departamento de infraestructura? No lo creo. Su tamaño debería responder a las necesidades del negocio, las capacidades disponibles fuera de la empresa y las responsabilidades que esta puede sostener.

La arquitectura evoluciona; no puede trazarse por completo de antemano. Podemos hacer planes para los próximos tres, cinco o incluso diez años, pero nuestra arquitectura debería dejar espacio para adaptarse a los cambios del negocio.

Cuando alguien afirma que su arquitectura cubrirá todas las necesidades de la próxima década, en esencia está afirmando que puede predecir el futuro. Y si de verdad puedes predecir los próximos diez años, seguro que tienes cosas mejores que hacer con ese don que diseñar arquitectura de software.
