---
title: 'The Awkward Future of iOS/Android Cross-Platform Frameworks in the Age of AI'
description: 'How AI, native platform capabilities, and hidden organizational costs challenge the economics of mobile cross-platform frameworks.'
pubDate: '2026-10-09'
author: 'AngleFeint'
tags: ['ai', 'software-engineering', 'mobile', 'cross-platform', 'organizations']
heroImage: '../../../assets/blog/default-covers/cyber-02.webp'
---

*The Cross-Platform Illusion: Engineering, Bureaucracy, and the Age of AI*

I spent more than a decade working at some of the largest internet companies in mainland China. Later, I moved overseas and joined a global technology company operating worldwide, but not in mainland China. After that, I started my own company overseas.

These experiences gave me a different perspective on the engineering culture and technical decisions I had witnessed in China.

My doubts about cross-platform frameworks began in 2024.

At the time, I was building an ASR/TTS mobile app in my spare time. Instead of relying on cloud computing, I wanted to use on-device computing power, as both iOS and Android were already supporting increasingly capable machine learning APIs.

I had also started using Cursor for AI-assisted development.

While researching cross-platform solutions for my app, I came to a conclusion: iOS/Android cross-platform frameworks would become increasingly irrelevant in the AI era.

And perhaps their value had been overstated even before AI.

Recently, I came across Shopify’s engineering article, [Native Is Now the Future of Mobile at Shopify](https://shopify.engineering/back-to-native), describing its decision to move from React Native back to native development.

It reminded me of the doubts I had about cross-platform frameworks back in 2024 and inspired me to finally write down my own thoughts.

Shopify claims React Native was the right choice in 2020. I am not so convinced.

Shopify itself acknowledges spending significant time and resources on performance optimization, framework improvements, and dependency maintenance. But these are only some of the costs of cross-platform development. What about the hidden costs of maintaining a developer ecosystem, organizational overhead, and lost business opportunities?

Did Shopify ever fully calculate the true economic cost of that decision? I seriously doubt it.

There are several reasons behind my conclusion:

* **AI coding agents** are dramatically reducing the cost of developing and maintaining native applications.
* **On-device AI** makes native development more attractive, while cross-platform frameworks often lag behind new platform capabilities.
* **Hidden costs,** including framework maintenance, internal developer ecosystems, cross-team coordination, and organizational politics, are frequently underestimated.
* **The New Cold War and the AI Arms Race:** We are now in a new Cold War, and AI has become one of its most important strategic battlegrounds, much like the Strategic Defense Initiative (Star Wars) during the previous Cold War. As competition intensifies, time-to-market and user experience become increasingly important relative to development costs.

But before discussing AI, I want to share something I observed in China’s internet industry.

## Write Once, Run Anywhere?

At several large Chinese internet companies where I worked, cross-platform frameworks were often promoted as a way to reduce development costs.

But their ambitions went far beyond sharing code between iOS and Android.

Companies wanted to write code once and run it everywhere: iOS, Android, H5, WeChat Mini Programs, Alipay Mini Programs, and sometimes even more platforms.

The argument sounded simple: write once, run anywhere.

But reality was much more complicated.

* **Write once? Not necessarily.** Sometimes developers ended up writing code three times: once for iOS, once for Android, and once for the cross-platform framework. Supporting Web or mini-program platforms could introduce even more work.
* **Performance and user experience.** Significant engineering effort was often required to approach native performance, and some limitations could not be fully eliminated.
* **Platform API delays.** New iOS and Android capabilities were not always immediately available through cross-platform frameworks.
* **Coordination overhead.** Cross-platform development introduced additional dependencies between business teams, framework teams, and native platform teams.
* **Organizational politics.** Some engineering projects seemed more focused on technical achievements, team expansion, and promotions than on actual business value.
* **Unnecessary iterations.** Did the business really need to change the app so frequently? Or were some projects simply work created for the sake of work?

And every additional layer of complexity comes with a cost.

Even if a framework reduces development time, how do we measure the performance, user experience, and business opportunities sacrificed along the way?

## The Hidden Cost: An Internal Developer Ecosystem

One of the most underestimated costs of building a cross-platform framework is maintaining its developer ecosystem.

Apple and Google invest heavily in their developer ecosystems because these ecosystems directly strengthen their platforms and businesses.

But when an internet company builds its own cross-platform framework, it effectively creates another developer platform inside the company.

It must maintain native API bridges, UI components, build tools, debugging tools, testing infrastructure, documentation, SDK integrations, and backward compatibility.

And this internal ecosystem must constantly follow the evolution of iOS, Android, and sometimes Web, mini-programs, and HarmonyOS.

**The company is no longer just building an application. It is maintaining a platform within a platform.**

Using an established framework like React Native can reduce this burden because Meta and the open-source community maintain much of its ecosystem. But large companies often end up building extensive internal infrastructure around it anyway.

So how much money does this ecosystem actually save after accounting for its own development and maintenance costs?

And is it being built because the business needs it, or because an engineering organization needs something to build?

## Hot Updates and Manufactured Demand

There is another reason why cross-platform and dynamic frameworks became so popular in China’s internet industry: **hot updates.**

Many companies wanted to update their apps without going through the traditional app store review and release process every time.

This was especially attractive to companies running endless marketing campaigns, promotional events, and frequent product experiments.

But looking back, I have a question.

Did users really need so many changes?

Did those campaigns and constant iterations actually create enough business value to justify their costs?

Or were some of them simply manufactured by large organizations that needed more projects, more activities, and more achievements?

A framework that makes unnecessary development faster does not necessarily make a company more efficient.

**It may simply make the company better at producing unnecessary work.**

And no matter how sophisticated its engineering infrastructure becomes, a company cannot solve fundamental business problems by shipping more features.

**Engineering efficiency does not necessarily translate into business efficiency.**

## Exam-Driven Engineering and Manufactured Complexity

There is another problem I observed in China’s internet industry: an exam-driven engineering culture.

China’s exam-oriented education system trains people to solve difficult problems, but rarely encourages them to question whether those problems should exist in the first place.

This mindset can carry over into engineering organizations.

Some engineers are excellent at solving complicated technical problems, but rarely question whether those problems need to be solved.

Sometimes, they even create problems where none exist.

Software engineering has no perfect architecture, no perfect framework, and no universally correct solution. Almost any technical decision can be justified with enough arguments, benchmarks, and carefully selected trade-offs.

This creates plenty of room for organizational politics.

As long as a proposal sounds technically reasonable and satisfies the right people, an engineering team can justify almost anything.

Build a new framework. Rewrite an existing system. Introduce another abstraction layer. Create a new technical standard.

Then use the complexity of the project, the number of engineers involved, and its supposed technical achievements to secure promotions.

**The goal is no longer to solve problems. It is to manufacture problems worth getting promoted for.**

And because there is no perfect architecture, there is always another problem to solve, another framework to build, and another reason to keep the organization busy.

The real question—whether any of this creates enough value to justify its cost—is often conveniently ignored.

**When engineering complexity becomes a path to promotion, simplicity becomes a threat.**

## When Abstraction Creates More Abstraction

Here is something almost absurd.

At one Chinese internet company, multiple cross-platform frameworks existed simultaneously.

Eventually, another framework was developed to make those existing frameworks compatible with one another.

Think about that.

**We built abstractions to reduce complexity, then built another abstraction to manage the complexity created by those abstractions.**

Ridiculous.

And this happened before AI coding agents began changing the economics of software development.

## The Economics of Cross-Platform Development

All of this can be examined with a simple formula.

Let’s define the variables:

* $V_{cross}$ — Net economic value of adopting a cross-platform framework.
* $C_{saved}$ — Actual development and maintenance costs saved through code reuse across platforms.
* $C_{complexity}$ — Additional costs from abstractions, compatibility issues, debugging, and performance optimization.
* $C_{ecosystem}$ — Costs of maintaining developer tools, SDKs, testing infrastructure, and platform API compatibility.
* $C_{organization}$ — Additional costs from coordination, bureaucracy, organizational politics, and promotion-driven projects.
* $C_{opportunity}$ — Opportunity costs from delayed time-to-market, platform API lag, inferior user experience, and lost platform differentiation.

The formula is:

$$
V_{cross} = C_{saved} - C_{complexity} - C_{ecosystem} - C_{organization} - C_{opportunity}
$$

A cross-platform framework only creates positive economic value when the costs it actually saves exceed the additional costs it introduces.

And this was already a question worth asking before AI.

## The Economics of Cross-Platform Development in the AI Era

Now, let’s see how AI changes this equation.

**First, AI coding agents are dramatically reducing the cost of native development.**

As a result, the development costs that cross-platform frameworks were originally designed to save are shrinking.

$$
C_{saved} \downarrow
$$

**Second, the New Cold War and the AI arms race are making native platform capabilities increasingly valuable.**

On-device AI, or edge AI, will inevitably become an essential part of iOS, Android, and other computing platforms.

Native development offers faster access to new APIs, better performance, easier integration, and more direct access to platform-specific hardware and software.

But there is another question worth asking.

**Why should iOS and Android applications be identical in the first place?**

Windows and Linux applications do not necessarily look or behave the same. Why should mobile applications?

Different platforms have different hardware, operating systems, AI capabilities, and user expectations.

In the coming years, Apple and Google will continue developing their own on-device AI capabilities, models, hardware acceleration, privacy mechanisms, and system-level integrations.

Why should a product limit itself to the common subset of these capabilities?

In an era of intense technological competition, platform-specific differences can become competitive advantages rather than problems to be eliminated.

And when companies compete on performance, user experience, and speed of innovation, development costs carry relatively less weight.

This increases the opportunity cost of relying on cross-platform frameworks.

$$
C_{opportunity} \uparrow
$$

**Third, AI does not eliminate the complexity introduced by cross-platform frameworks.**

AI coding agents can help developers build native modules, adapt new APIs, and maintain cross-platform frameworks faster.

But writing code is only part of the problem.

A cross-platform framework still introduces additional runtime layers, integration boundaries, compatibility requirements, and debugging complexity.

When something goes wrong, developers may need to determine whether the problem comes from the operating system, the native implementation, the framework, or the integration between them.

AI can reduce the cost of dealing with these problems, but it cannot make the architectural complexity disappear.

Meanwhile, AI is making native development cheaper without requiring those additional abstraction layers.

**AI reduces the cost of implementing abstractions, but it does not eliminate the complexity introduced by those abstractions.**

Therefore:

$$
V_{cross} \downarrow
$$

**The economic value of cross-platform frameworks is being squeezed from both sides.**

Native implementation is becoming cheaper, while platform-specific capabilities are becoming more valuable.

## Reuse the Core, Not Necessarily the Entire App

When I was building my ASR/TTS app in 2024, I eventually chose not to use a cross-platform application framework.

I wanted to work directly with native capabilities, including Core ML and the C/C++ inference ecosystem around Whisper.

Interestingly, [whisper.cpp](https://github.com/ggml-org/whisper.cpp) is itself a cross-platform project.

But this is a fundamentally different kind of code reuse.

Sharing a C/C++ inference engine across operating systems is not the same as forcing an entire application through a shared UI framework, runtime, and developer ecosystem.

A native iOS app can use SwiftUI and Core ML. A native Android app can use Kotlin and Android-specific acceleration. Both can still reuse appropriate parts of the same inference core.

**Cross-platform code reuse is not the same as a cross-platform application framework.**

My argument is not against sharing code. It is against the assumption that sharing an entire application implementation is always economically beneficial.

And AI makes this distinction increasingly important.

## The Awkward Middle

For simple applications, content-driven products, and frequently updated pages, why not just use Web technologies?

The Web already offers a mature, widely supported platform with an enormous developer ecosystem.

For rich applications, especially those deeply integrated with on-device AI, hardware acceleration, and operating system capabilities, why not use Native?

Cross-platform application frameworks are increasingly caught in the middle.

Of course, they still have value in certain situations. A small team building a moderately complex application with limited platform-specific requirements may benefit greatly from React Native or Flutter.

But that value should be demonstrated, not assumed.

And we should stop treating code reuse as an unquestionable engineering virtue.

Decades ago, Java popularized the idea of Write Once, Run Anywhere. Much of modern software engineering has followed the same direction: introducing abstractions to reduce the cost of supporting different platforms.

AI is changing the economics behind that decision.

We may once again build separate implementations for different platforms—not because we have forgotten the lessons of the past, but because the cost of implementation itself has changed.

The future may not be about eliminating platform differences.

It may be about embracing those differences while making their implementation dramatically cheaper.

**Reuse the core. Automate the implementation. Preserve the platform.**
