---
title: 'A arquitetura cresce com o seu negócio'
description: 'Sobre plataformas internas, incentivos organizacionais e uma arquitetura capaz de evoluir com o negócio.'
pubDate: '2026-11-01'
author: 'AngleFeint'
tags: ['architecture', 'software-engineering', 'organizations']
heroImage: '../../../assets/blog/default-covers/ai-02.webp'
---

Quando trabalhei em algumas das maiores empresas de internet da China, ouvia com frequência expressões grandiosas nas reuniões: “as melhores práticas para esta tecnologia”, “a arquitetura ideal” e “a plataforma de infraestrutura da próxima geração”.

Naquela época, os serviços de nuvem estavam ganhando popularidade, mas as empresas em que eu trabalhava ainda construíam por conta própria boa parte da sua infraestrutura. Elas tinham departamentos dedicados à infraestrutura, com grandes equipes desenvolvendo e mantendo sistemas internos.

Imagine uma pequena AWS dentro de cada grande empresa de internet.

Alguns daqueles sistemas resolviam problemas reais. Outros criavam um fardo que permanecia por muito mais tempo do que as pessoas que os haviam construído ficavam na empresa.

Funcionários chegavam e saíam. A política interna, as avaliações de desempenho e os requisitos para promoção influenciavam as decisões técnicas. Criar um framework podia trazer reconhecimento e influência, enquanto mantê-lo anos depois recebia muito menos atenção.

Em uma empresa, um líder do meu departamento certa vez me chamou de lado e disse que minha arquitetura se concentrava demais em servir ao negócio. Ele explicou que, em sua própria plataforma tecnológica, acoplava deliberadamente funcionalidades de negócio de diferentes equipes à infraestrutura subjacente. Isso tornava essas partes mais difíceis de separar e deixava as equipes mais dependentes dele.

Ele estava descrevendo uma escolha intencional de projeto. As dependências fortaleciam sua posição, enquanto a empresa ficava responsável pela complexidade que elas criavam.

Essa conversa ficou na minha memória. Duvido que fosse um caso isolado, mesmo dentro daquele departamento, quanto mais no setor inteiro.

Uma arquitetura construída para preservar a posição de alguém pode dificultar que o negócio mude de direção. Quando a empresa precisa separar um serviço, substituir um componente ou deixar de usar uma plataforma, essas dependências construídas deliberadamente se tornam obstáculos.

Essa é uma das razões pelas quais questiono o entusiasmo por construir frameworks internos.

Um departamento pode desenvolver seu próprio framework mesmo quando já existe uma alternativa de código aberto madura e amplamente utilizada. Por que deveríamos esperar que nossa versão fosse melhor? Mais importante ainda, por que deveríamos esperar que ela continuasse sendo melhor ao longo do tempo?

Mesmo que a versão interna tenha uma vantagem no lançamento, essa vantagem exige investimento contínuo. Um projeto de código aberto amplamente adotado é testado em muitas empresas e situações reais. Uma comunidade ativa pode descobrir bugs, contribuir com correções, melhorar a documentação e adaptar o software a novos requisitos.

Enquanto isso, os desenvolvedores internos originais podem sair. Seus substitutos precisam aprender o sistema e entender decisões que nunca foram devidamente documentadas. Outras equipes criam dependências em relação a ele. Com o tempo, atualizá-lo ou substituí-lo pode envolver trabalho e risco consideráveis.

O que começou como uma conquista técnica pode se tornar dívida técnica.

Já vi frameworks desnecessários demais serem construídos, adotados e depois mantidos de forma insuficiente. “A solução de código aberto não atende às nossas necessidades” era uma explicação conhecida. Às vezes, era verdade. Em outras, uma configuração, uma pequena extensão ou uma contribuição ao projeto original poderia ter resolvido o problema.

Antes de nos comprometermos com uma alternativa interna, deveríamos conseguir responder a três perguntas: Qual limitação está bloqueando o negócio? Que vantagem significativa nossa própria solução vai oferecer? A empresa consegue continuar assumindo essa responsabilidade depois que a equipe original sair?

Também há momentos em que desenvolver nossa própria tecnologia é necessário.

Um novo modelo de negócio, um produto tecnológico genuinamente novo ou um ambiente operacional singular pode exigir capacidades que as ferramentas existentes não oferecem. Nessas situações, forçar o negócio a se adaptar às ferramentas disponíveis pode frear a empresa. Desenvolver as capacidades que faltam pode ser essencial para seu crescimento.

Recusar esse trabalho pode ser tão prejudicial quanto construir algo desnecessário.

Reconhecer a diferença exige discernimento e honestidade com nós mesmos. Precisamos distinguir uma capacidade de que o negócio realmente necessita de uma plataforma que gostaríamos de ter sob nosso controle. E precisamos rever esse julgamento conforme o negócio e as ferramentas disponíveis mudam.

Isso me leva a uma pergunta mais ampla: o que torna uma arquitetura boa?

Não acredito que exista uma arquitetura padrão que toda empresa deva seguir. As arquiteturas que estudamos hoje surgiram à medida que as pessoas respondiam a negócios, restrições e ferramentas específicos. Devemos entender essas condições antes de adotar suas respostas.

O YouTube em seus primeiros anos é um exemplo ao qual sempre volto. Sua infraestrutura tinha imperfeições, e uma pequena equipe de engenharia continuava resolvendo gargalos à medida que o serviço crescia. O negócio ganhou valor enquanto sua arquitetura ainda estava evoluindo. Não foi preciso ter uma resposta definitiva para cada problema futuro antes de alcançar o sucesso.

Ao longo da minha carreira, cheguei a uma convicção simples: uma boa arquitetura consegue evoluir com o negócio.

Isso não significa que devemos parar de ler artigos científicos ou de aprender com outros engenheiros. A experiência deles nos ajuda a tomar decisões melhores. Mas estudar a arquitetura de outra pessoa não nos isenta da responsabilidade de entender nosso próprio negócio.

Fico satisfeito com uma solução de sessenta por cento se ela sustenta o negócio hoje e nos deixa espaço para melhorar amanhã. Eu a escolheria em vez de uma arquitetura supostamente perfeita que leva tempo demais para ser construída ou fica cara demais para ser alterada.

Os quarenta por cento restantes podem se tornar necessários mais adiante. Parte deles talvez nunca importe. Conforme o negócio se desenvolve, podemos descobrir que, desde o início, estávamos medindo a perfeição com base nos requisitos errados.

Um sistema em funcionamento nos dá algo real com que aprender. Podemos observar onde os usuários encontram dificuldades, onde os custos aumentam e quais limitações realmente impedem o avanço do negócio. Essa experiência nos ajuda a decidir o que merece o próximo investimento.

A capacidade de evoluir vai além de adicionar funcionalidades. Também inclui atualizar dependências, remover componentes desnecessários, substituir um sistema interno ou transferir uma responsabilidade para um serviço externo.

Às vezes, um sistema temporário é suficiente. Se ele sustenta o negócio hoje e substituí-lo depois tem um custo viável, talvez já esteja cumprindo seu papel. Nem todo sistema precisa durar para sempre.

Hoje, plataformas de nuvem e projetos maduros de código aberto fornecem muitas capacidades que as empresas antes precisavam construir por conta própria. Isso muda a economia da arquitetura.

Para uma empresa que vende infraestrutura, desenvolver uma infraestrutura melhor pode ser o próprio negócio. Para outra empresa, o mesmo investimento precisa justificar seu lugar por meio dos resultados de negócio que viabiliza.

Esse cálculo começa antes do desenvolvimento e continua durante toda a vida do sistema. Ele inclui construção e testes, treinamento das equipes que o utilizam, integração, manutenção, depuração, atualizações e, por fim, migração ou desativação. A economia com servidores é apenas uma parte da conta. Também precisamos considerar o que aquelas pessoas poderiam ter realizado em outras atividades.

Antes de otimizar um processo, devemos perguntar se o negócio ainda precisa daquele processo em primeiro lugar.

Toda grande empresa ainda precisa de um grande departamento de infraestrutura? Não acho. Seu tamanho deve acompanhar as necessidades do negócio, as capacidades disponíveis fora da empresa e as responsabilidades que ela consegue sustentar.

A arquitetura evolui; não é possível planejá-la por completo de antemão. Podemos fazer planos para os próximos três, cinco ou até dez anos, mas nossa arquitetura deve deixar espaço para se adaptar às mudanças do negócio.

Quando alguém afirma que sua arquitetura atenderá a todas as necessidades da próxima década, está essencialmente afirmando que consegue prever o futuro. E, se você realmente consegue prever os próximos dez anos, certamente tem coisas melhores para fazer com esse dom do que projetar arquitetura de software.
