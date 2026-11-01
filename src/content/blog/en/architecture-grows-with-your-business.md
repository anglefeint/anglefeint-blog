---
title: 'Architecture Grows with Your Business'
description: 'On internal platforms, organizational incentives, and building architecture that can evolve with the business.'
pubDate: '2026-11-01'
author: 'AngleFeint'
tags: ['architecture', 'software-engineering', 'organizations']
heroImage: '../../../assets/blog/default-covers/ai-02.webp'
---

When I worked at some of China’s largest internet companies, I often heard big phrases in meetings: “best practices for this technology,” “the optimal architecture,” and “the next-generation infrastructure platform.”

At the time, cloud services were gaining popularity, but the companies I worked for still built much of their infrastructure themselves. They had dedicated infrastructure departments, with large teams developing and maintaining internal systems.

Imagine a small AWS inside every large internet company.

Some of those systems solved real problems. Others created a burden that lasted much longer than the people who built them.

Employees joined and left. Internal politics, performance reviews, and promotion requirements influenced technical decisions. Building a framework could bring recognition and influence, while maintaining it years later brought much less attention.

At one company, a leader in my department once took me aside and told me that my architecture focused too much on serving the business. He explained that, in his own technical platform, he deliberately coupled business functionality from different teams to the underlying infrastructure. This made those parts harder to separate and made the teams more dependent on him.

He was describing an intentional design choice. The dependencies strengthened his position, while leaving the company responsible for the complexity they created.

That conversation stayed with me. I doubt it was an isolated case, even within that department, let alone across the industry.

An architecture built to preserve someone’s position can make it harder for the business to change direction. When the company needs to separate a service, replace a component, or stop using a platform, those deliberately constructed dependencies become obstacles.

This is one reason I question the enthusiasm for building internal frameworks.

A department might develop its own framework even though a mature open-source alternative already exists and is widely used. Why should we expect our version to be better? More importantly, why should we expect it to remain better over time?

Even if the internal version has an advantage at launch, that advantage requires continuing investment. A widely adopted open-source project gets tested across many companies and real-world situations. An active community can discover bugs, contribute fixes, improve documentation, and adapt the software to new requirements.

Meanwhile, the original internal developers might leave. Their replacements need to learn the system and understand decisions that were never properly documented. Other teams build dependencies on it. Eventually, upgrading or replacing it can involve substantial work and risk.

What began as a technical achievement can become technical debt.

I have seen too many unnecessary frameworks built, adopted, and then inadequately maintained. “The open-source solution doesn’t fit our needs” was a familiar explanation. Sometimes that was true. Sometimes configuration, a small extension, or an upstream contribution could have solved the problem.

Before committing to an internal alternative, we should be able to answer three questions: Which limitation is blocking the business? What meaningful advantage will our own solution provide? Can the company sustain the responsibility after the original team moves on?

There are also times when building our own technology is necessary.

A new business model, a genuinely new technical product, or a unique operating environment may require capabilities that existing tools cannot provide. In those situations, forcing the business to fit the available tools can hold the company back. Developing the missing capabilities may be essential to its growth.

Refusing that work can be as damaging as building something unnecessary.

Recognizing the difference takes judgment—and honesty with ourselves. We need to distinguish a capability the business genuinely needs from a platform we would like to own. And we need to reconsider that judgment as the business and the available tools change.

This brings me to a broader question: what makes a good architecture?

I don’t think there is one standard architecture that every company should follow. The architectures we study today emerged as people responded to particular businesses, constraints, and tools. We should understand those conditions before adopting their answers.

Early YouTube is an example I keep coming back to. Its infrastructure had rough edges, and a small engineering team kept fixing bottlenecks as the service grew. The business became valuable while its architecture was still evolving. It did not need a finished answer to every future problem before it could succeed.

Through my own career, I have arrived at a simple belief: a good architecture can evolve with the business.

This does not mean we should stop reading papers or learning from other engineers. Their experience helps us make better decisions. But studying someone else’s architecture does not relieve us of the responsibility to understand our own business.

I am happy with a sixty-percent solution if it supports the business today and leaves us room to improve tomorrow. I would choose it over a supposedly perfect architecture that takes too long to build or becomes too expensive to change.

The remaining forty percent may become necessary later. Some of it may never matter. As the business develops, we may discover that we were measuring perfection against the wrong requirements in the first place.

A working system gives us something real to learn from. We can see where users struggle, where costs grow, and which limitations actually hold the business back. That experience helps us decide what deserves the next investment.

The ability to evolve includes more than adding features. It also includes upgrading dependencies, removing unnecessary components, replacing an internal system, or handing a responsibility over to an external service.

Sometimes, a temporary system is enough. If it supports the business today and replacing it later is affordable, it may already be doing its job. Every system does not need to last forever.

Today, cloud platforms and mature open-source projects provide many capabilities that companies once had to build themselves. That changes the economics of architecture.

For a company selling infrastructure, developing better infrastructure may be the business itself. For another company, the same investment needs to justify its place through the business results it enables.

That calculation starts before development begins and continues throughout the system’s life. It includes building and testing, training the teams that use it, integration, maintenance, debugging, upgrades, and eventually migration or retirement. Savings on servers are only one part of the account. We also need to consider what those people could have accomplished elsewhere.

Before optimizing a process, we should ask whether the business still needs that process at all.

Does every large company still need a large infrastructure department? I don’t think so. Its size should follow the needs of the business, the capabilities available elsewhere, and the responsibilities the company can sustain.

Architecture evolves; it cannot be fully mapped out in advance. We can make plans for the next three, five, or even ten years, but our architecture should leave room to adapt as the business changes.

When someone claims their architecture will meet every need for the next decade, they are essentially claiming to predict the future. And if you can really predict the next ten years, surely you have better things to do with that gift than design software architecture.