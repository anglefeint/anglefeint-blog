---
title: "O futuro incômodo dos frameworks multiplataforma para iOS/Android na era da IA"
description: "Como a IA, os recursos nativos das plataformas e os custos organizacionais ocultos desafiam a economia dos frameworks móveis multiplataforma."
pubDate: '2026-10-09'
author: 'AngleFeint'
tags: ['ai', 'software-engineering', 'mobile', 'cross-platform', 'organizations']
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

*A ilusão multiplataforma: engenharia, burocracia e a era da IA*

Passei mais de uma década trabalhando em algumas das maiores empresas de internet da China continental. Mais tarde, fui morar no exterior e entrei em uma empresa global de tecnologia que operava no mundo inteiro, mas não na China continental. Depois disso, abri minha própria empresa no exterior.

Essas experiências me deram uma perspectiva diferente sobre a cultura de engenharia e as decisões técnicas que eu havia presenciado na China.

Minhas dúvidas sobre frameworks multiplataforma começaram em 2024.

Na época, eu estava desenvolvendo um aplicativo móvel de ASR/TTS no meu tempo livre. Em vez de depender da computação em nuvem, queria aproveitar o poder de processamento do próprio dispositivo, já que tanto o iOS quanto o Android já ofereciam APIs de aprendizado de máquina cada vez mais capazes.

Eu também havia começado a usar o Cursor para desenvolvimento assistido por IA.

Ao pesquisar soluções multiplataforma para meu aplicativo, cheguei a uma conclusão: os frameworks multiplataforma para iOS/Android se tornariam cada vez menos relevantes na era da IA.

E talvez seu valor já tivesse sido exagerado mesmo antes da IA.

Recentemente, encontrei o artigo de engenharia da Shopify [O desenvolvimento nativo agora é o futuro do mobile na Shopify](https://shopify.engineering/back-to-native), que descreve sua decisão de deixar o React Native e voltar ao desenvolvimento nativo.

Ele me lembrou das dúvidas que eu tinha sobre frameworks multiplataforma em 2024 e me inspirou a finalmente colocar minhas próprias ideias no papel.

A Shopify afirma que o React Native foi a escolha certa em 2020. Não estou tão convencido.

A própria Shopify reconhece ter dedicado muito tempo e recursos à otimização de desempenho, a melhorias no framework e à manutenção de dependências. Mas esses são apenas alguns dos custos do desenvolvimento multiplataforma. E quanto aos custos ocultos de manter um ecossistema de desenvolvedores, à sobrecarga organizacional e às oportunidades de negócio perdidas?

A Shopify chegou a calcular integralmente o verdadeiro custo econômico daquela decisão? Duvido muito.

Há vários motivos por trás da minha conclusão:

* **Agentes de programação com IA** estão reduzindo drasticamente o custo de desenvolver e manter aplicativos nativos.
* **A IA no dispositivo** torna o desenvolvimento nativo mais atraente, enquanto os frameworks multiplataforma costumam ficar atrás dos novos recursos das plataformas.
* **Custos ocultos,** incluindo manutenção do framework, ecossistemas internos de desenvolvedores, coordenação entre equipes e política organizacional, são frequentemente subestimados.
* **A nova Guerra Fria e a corrida armamentista da IA:** Estamos em uma nova Guerra Fria, e a IA se tornou um de seus campos de batalha estratégicos mais importantes, assim como a Iniciativa de Defesa Estratégica, conhecida como Guerra nas Estrelas, durante a Guerra Fria anterior. À medida que a competição se intensifica, o tempo de lançamento no mercado e a experiência do usuário ganham importância em relação aos custos de desenvolvimento.

Mas, antes de discutir IA, quero compartilhar algo que observei na indústria chinesa de internet.

## Escrever uma vez, executar em qualquer lugar?

Em várias grandes empresas chinesas de internet onde trabalhei, frameworks multiplataforma eram frequentemente promovidos como uma forma de reduzir custos de desenvolvimento.

Mas suas ambições iam muito além de compartilhar código entre iOS e Android.

As empresas queriam escrever o código uma vez e executá-lo em todo lugar: iOS, Android, H5, miniprogramas do WeChat, miniprogramas do Alipay e, às vezes, ainda mais plataformas.

O argumento parecia simples: escrever uma vez, executar em qualquer lugar.

Mas a realidade era muito mais complicada.

* **Escrever uma vez? Não necessariamente.** Às vezes, os desenvolvedores acabavam escrevendo o código três vezes: uma para iOS, outra para Android e outra para o framework multiplataforma. Dar suporte à Web ou a plataformas de miniprogramas podia gerar ainda mais trabalho.
* **Desempenho e experiência do usuário.** Frequentemente era necessário um esforço considerável de engenharia para se aproximar do desempenho nativo, e algumas limitações não podiam ser totalmente eliminadas.
* **Atrasos nas APIs das plataformas.** Os novos recursos do iOS e do Android nem sempre estavam disponíveis imediatamente nos frameworks multiplataforma.
* **Sobrecarga de coordenação.** O desenvolvimento multiplataforma introduzia dependências adicionais entre equipes de negócio, equipes do framework e equipes das plataformas nativas.
* **Política organizacional.** Alguns projetos de engenharia pareciam mais voltados a conquistas técnicas, expansão de equipes e promoções do que ao valor real para o negócio.
* **Iterações desnecessárias.** O negócio realmente precisava mudar o aplicativo com tanta frequência? Ou alguns projetos eram apenas trabalho criado por criar trabalho?

E cada camada adicional de complexidade tem um custo.

Mesmo que um framework reduza o tempo de desenvolvimento, como medimos o desempenho, a experiência do usuário e as oportunidades de negócio sacrificados pelo caminho?

## O custo oculto: um ecossistema interno de desenvolvedores

Um dos custos mais subestimados de construir um framework multiplataforma é manter seu ecossistema de desenvolvedores.

Apple e Google investem muito em seus ecossistemas de desenvolvedores porque eles fortalecem diretamente suas plataformas e seus negócios.

Mas, quando uma empresa de internet constrói seu próprio framework multiplataforma, ela efetivamente cria outra plataforma de desenvolvimento dentro da empresa.

Ela precisa manter pontes para APIs nativas, componentes de interface, ferramentas de build, ferramentas de depuração, infraestrutura de testes, documentação, integrações de SDKs e compatibilidade retroativa.

E esse ecossistema interno precisa acompanhar constantemente a evolução do iOS, do Android e, às vezes, da Web, dos miniprogramas e do HarmonyOS.

**A empresa já não está apenas construindo um aplicativo. Está mantendo uma plataforma dentro de outra plataforma.**

Usar um framework consolidado como React Native pode reduzir esse peso, porque a Meta e a comunidade de código aberto mantêm boa parte de seu ecossistema. Mas grandes empresas frequentemente acabam construindo uma extensa infraestrutura interna ao redor dele de qualquer maneira.

Então, quanto dinheiro esse ecossistema realmente economiza depois de contabilizar seus próprios custos de desenvolvimento e manutenção?

E ele está sendo construído porque o negócio precisa dele, ou porque uma organização de engenharia precisa de algo para construir?

## Atualizações a quente e demanda fabricada

Há outro motivo pelo qual frameworks multiplataforma e dinâmicos se tornaram tão populares na indústria chinesa de internet: **as atualizações a quente.**

Muitas empresas queriam atualizar seus aplicativos sem passar pelo processo tradicional de revisão e publicação das lojas de aplicativos toda vez.

Isso era especialmente atraente para empresas que realizavam campanhas de marketing intermináveis, ações promocionais e experimentos frequentes de produto.

Mas, olhando para trás, tenho uma pergunta.

Os usuários realmente precisavam de tantas mudanças?

Essas campanhas e iterações constantes realmente criavam valor de negócio suficiente para justificar seus custos?

Ou algumas delas eram simplesmente fabricadas por grandes organizações que precisavam de mais projetos, mais atividades e mais realizações?

Um framework que acelera o desenvolvimento desnecessário não torna necessariamente uma empresa mais eficiente.

**Ele pode apenas tornar a empresa melhor em produzir trabalho desnecessário.**

E, por mais sofisticada que sua infraestrutura de engenharia se torne, uma empresa não consegue resolver problemas fundamentais de negócio lançando mais funcionalidades.

**Eficiência de engenharia não se traduz necessariamente em eficiência de negócio.**

## Engenharia orientada a provas e complexidade fabricada

Há outro problema que observei na indústria chinesa de internet: uma cultura de engenharia orientada a provas.

O sistema educacional chinês, centrado em exames, treina as pessoas para resolver problemas difíceis, mas raramente as incentiva a questionar se esses problemas deveriam existir em primeiro lugar.

Essa mentalidade pode se estender às organizações de engenharia.

Alguns engenheiros são excelentes em resolver problemas técnicos complicados, mas raramente questionam se esses problemas precisam ser resolvidos.

Às vezes, chegam a criar problemas onde não há nenhum.

Na engenharia de software, não existe arquitetura perfeita, framework perfeito nem solução universalmente correta. Quase qualquer decisão técnica pode ser justificada com argumentos suficientes, benchmarks e concessões cuidadosamente selecionadas.

Isso abre bastante espaço para a política organizacional.

Desde que uma proposta pareça tecnicamente razoável e satisfaça as pessoas certas, uma equipe de engenharia consegue justificar quase qualquer coisa.

Construir um novo framework. Reescrever um sistema existente. Introduzir outra camada de abstração. Criar um novo padrão técnico.

Depois, usar a complexidade do projeto, o número de engenheiros envolvidos e suas supostas conquistas técnicas para conseguir promoções.

**O objetivo já não é resolver problemas. É fabricar problemas pelos quais valha a pena ser promovido.**

E, como não existe arquitetura perfeita, sempre há outro problema a resolver, outro framework a construir e outro motivo para manter a organização ocupada.

A verdadeira pergunta — se tudo isso cria valor suficiente para justificar seu custo — costuma ser convenientemente ignorada.

**Quando a complexidade de engenharia se torna um caminho para a promoção, a simplicidade vira uma ameaça.**

## Quando a abstração cria mais abstração

Eis algo quase absurdo.

Em uma empresa chinesa de internet, existiam vários frameworks multiplataforma ao mesmo tempo.

No fim, outro framework foi desenvolvido para tornar aqueles frameworks existentes compatíveis entre si.

Pense nisso.

**Construímos abstrações para reduzir a complexidade e depois construímos outra abstração para gerenciar a complexidade criada por essas abstrações.**

Ridículo.

E isso aconteceu antes de os agentes de programação com IA começarem a mudar a economia do desenvolvimento de software.

## A economia do desenvolvimento multiplataforma

Tudo isso pode ser examinado com uma fórmula simples.

Vamos definir as variáveis:

* $V_{cross}$ — Valor econômico líquido da adoção de um framework multiplataforma.
* $C_{saved}$ — Custos reais de desenvolvimento e manutenção economizados por meio do reúso de código entre plataformas.
* $C_{complexity}$ — Custos adicionais de abstrações, problemas de compatibilidade, depuração e otimização de desempenho.
* $C_{ecosystem}$ — Custos de manter ferramentas de desenvolvimento, SDKs, infraestrutura de testes e compatibilidade com APIs das plataformas.
* $C_{organization}$ — Custos adicionais de coordenação, burocracia, política organizacional e projetos motivados por promoções.
* $C_{opportunity}$ — Custos de oportunidade causados por atrasos no lançamento, defasagem nas APIs, experiência do usuário inferior e perda de diferenciação entre plataformas.

A fórmula é:

$$
V_{cross} = C_{saved} - C_{complexity} - C_{ecosystem} - C_{organization} - C_{opportunity}
$$

Um framework multiplataforma só cria valor econômico positivo quando os custos que realmente economiza superam os custos adicionais que introduz.

E essa já era uma pergunta que valia a pena fazer antes da IA.

## A economia do desenvolvimento multiplataforma na era da IA

Agora, vejamos como a IA muda essa equação.

**Primeiro, agentes de programação com IA estão reduzindo drasticamente o custo do desenvolvimento nativo.**

Como resultado, os custos de desenvolvimento que os frameworks multiplataforma foram originalmente projetados para economizar estão diminuindo.

$$
C_{saved} \downarrow
$$

**Segundo, a nova Guerra Fria e a corrida armamentista da IA estão tornando os recursos nativos das plataformas cada vez mais valiosos.**

A IA no dispositivo, ou IA de borda, inevitavelmente se tornará uma parte essencial do iOS, do Android e de outras plataformas computacionais.

O desenvolvimento nativo oferece acesso mais rápido a novas APIs, melhor desempenho, integração mais fácil e acesso mais direto ao hardware e ao software específicos de cada plataforma.

Mas há outra pergunta que vale a pena fazer.

**Por que os aplicativos de iOS e Android deveriam ser idênticos, para começar?**

Aplicativos de Windows e Linux não precisam ter a mesma aparência nem se comportar da mesma forma. Por que os aplicativos móveis deveriam?

Plataformas diferentes têm hardware, sistemas operacionais, recursos de IA e expectativas dos usuários diferentes.

Nos próximos anos, Apple e Google continuarão desenvolvendo seus próprios recursos de IA no dispositivo, modelos, aceleração por hardware, mecanismos de privacidade e integrações no nível do sistema.

Por que um produto deveria se limitar ao subconjunto comum desses recursos?

Em uma era de intensa competição tecnológica, diferenças específicas de cada plataforma podem se tornar vantagens competitivas, em vez de problemas a eliminar.

E, quando empresas competem em desempenho, experiência do usuário e velocidade de inovação, os custos de desenvolvimento têm relativamente menos peso.

Isso aumenta o custo de oportunidade de depender de frameworks multiplataforma.

$$
C_{opportunity} \uparrow
$$

**Terceiro, a IA não elimina a complexidade introduzida pelos frameworks multiplataforma.**

Agentes de programação com IA podem ajudar desenvolvedores a construir módulos nativos, adaptar novas APIs e manter frameworks multiplataforma mais rapidamente.

Mas escrever código é apenas parte do problema.

Um framework multiplataforma ainda introduz camadas adicionais de execução, fronteiras de integração, requisitos de compatibilidade e complexidade de depuração.

Quando algo dá errado, os desenvolvedores podem precisar descobrir se o problema vem do sistema operacional, da implementação nativa, do framework ou da integração entre eles.

A IA pode reduzir o custo de lidar com esses problemas, mas não pode fazer a complexidade arquitetural desaparecer.

Enquanto isso, a IA está tornando o desenvolvimento nativo mais barato sem exigir essas camadas adicionais de abstração.

**A IA reduz o custo de implementar abstrações, mas não elimina a complexidade introduzida por elas.**

Portanto:

$$
V_{cross} \downarrow
$$

**O valor econômico dos frameworks multiplataforma está sendo pressionado pelos dois lados.**

A implementação nativa está ficando mais barata, enquanto os recursos específicos das plataformas estão ficando mais valiosos.

## Reutilize o núcleo, não necessariamente o aplicativo inteiro

Quando estava desenvolvendo meu aplicativo de ASR/TTS em 2024, acabei optando por não usar um framework de aplicativos multiplataforma.

Eu queria trabalhar diretamente com recursos nativos, incluindo Core ML e o ecossistema de inferência em C/C++ ao redor do Whisper.

Curiosamente, o próprio [whisper.cpp](https://github.com/ggml-org/whisper.cpp) é um projeto multiplataforma.

Mas esse é um tipo fundamentalmente diferente de reúso de código.

Compartilhar um mecanismo de inferência em C/C++ entre sistemas operacionais não é o mesmo que forçar um aplicativo inteiro a passar por um framework de interface, um ambiente de execução e um ecossistema de desenvolvedores compartilhados.

Um aplicativo nativo de iOS pode usar SwiftUI e Core ML. Um aplicativo nativo de Android pode usar Kotlin e aceleração específica do Android. Ambos ainda podem reutilizar as partes adequadas do mesmo núcleo de inferência.

**Reúso de código multiplataforma não é a mesma coisa que um framework de aplicativos multiplataforma.**

Meu argumento não é contra compartilhar código. É contra a suposição de que compartilhar a implementação de um aplicativo inteiro é sempre economicamente vantajoso.

E a IA torna essa distinção cada vez mais importante.

## O meio-termo incômodo

Para aplicativos simples, produtos orientados a conteúdo e páginas atualizadas com frequência, por que não usar simplesmente tecnologias web?

A Web já oferece uma plataforma madura, amplamente suportada e com um enorme ecossistema de desenvolvedores.

Para aplicativos ricos em funcionalidades, especialmente os profundamente integrados à IA no dispositivo, à aceleração por hardware e aos recursos do sistema operacional, por que não usar desenvolvimento nativo?

Os frameworks de aplicativos multiplataforma estão cada vez mais presos no meio.

É claro que eles ainda têm valor em certas situações. Uma equipe pequena que desenvolve um aplicativo de complexidade moderada e com requisitos limitados de recursos específicos de plataforma pode se beneficiar muito de React Native ou Flutter.

Mas esse valor deve ser demonstrado, não presumido.

E deveríamos parar de tratar o reúso de código como uma virtude inquestionável da engenharia.

Décadas atrás, Java popularizou a ideia de escrever uma vez e executar em qualquer lugar. Boa parte da engenharia de software moderna seguiu a mesma direção: introduzir abstrações para reduzir o custo de dar suporte a diferentes plataformas.

A IA está mudando a economia por trás dessa decisão.

Talvez voltemos a construir implementações separadas para plataformas diferentes, não porque esquecemos as lições do passado, mas porque o custo da própria implementação mudou.

Talvez o futuro não seja eliminar as diferenças entre plataformas.

Talvez seja abraçar essas diferenças enquanto tornamos sua implementação drasticamente mais barata.

**Reutilize o núcleo. Automatize a implementação. Preserve a plataforma.**
