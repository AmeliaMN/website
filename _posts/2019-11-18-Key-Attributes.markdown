---
layout: post
active: Blog
ptitle:  "Key Attributes of a Modern Statistical Computing Tool" 
categories: papers
img: ""
---

A few weeks ago, I [tweeted](https://twitter.com/AmeliaMN/status/1191464296779255814?s=20) that the first paper to come out of my dissertation was published. I got my PhD in 2015, and it's now 2019. That means I've been thinking about this work for more than four years (in fact, it's probably closer to seven!). 

If you want to read the paper, it's [now published](https://www.tandfonline.com/doi/full/10.1080/00031305.2018.1482784) in Volume 73, Issue 4 of The American Statistician. I was given 100 free e-prints, which are available until they run out [here](https://www.tandfonline.com/eprint/WNRYZCHGUMCEUIEC9C9X/full?target=10.1080/00031305.2018.1482784). A pre-print of this paper is also available on [the arXiv](https://arxiv.org/abs/1610.00985) if you want a non-paywalled version.

<!--more-->

Some of the story of how this paper came to be is written into [my dissertation](https://escholarship.org/uc/item/1mm9303x), but I thought I would summarize it briefly here.

Essentially, as a graduate student I had the opportunity to run some professional development (PD) for high school teachers to help them develop their R skills. The PD was about a week long, and it was for the [Exploring Computer Science](http://www.exploringcs.org/) (ECS) curriculum. Over the course of the week, I managed to prove myself to the PIs of the grant (particularly [Jane Margolis](https://gseis.ucla.edu/directory/jane-margolis/)) because of my ability to communicate with both technical folks and tech-phobic people. The ECS team immediately found some hours for me to continue work with them, and then I was quickly incorporated into the next grant the team developed-- Mobilize. The Mobilize project had some big goals, including developing data science technology and curriculum for the high school level, running PD, research and evaluation of our products, changing educational policy at the national and state level, and more. 

Over the course of the next three years, I ran hundreds of hours of professional development for teachers, mostly teaching them technical skills to support data science curriculum, but also some basic statistical concepts. This was extremely difficult task, because many teachers had never taken a statistics course (or if they had, it was years before), or programmed in any language. Over the course of the grant, we iterated on a number of tools. In order, we tried:

- base R, with the standard R GUI
- Deducer
- formula syntax R, through an RStudio server

The experience of iterating through tools and attempting to teach them to novices gave me a lot of perspective on what makes a good tool for someone who is just starting out. Since then, I've taught R in many other contexts (in undergraduate college courses, at conference workshops for biostatisticians, data journalists, and generally for data practitioners). 

In parallel to my experience starting to teach R and other technical tools, as a graduate student I had the time and opportunity to read hundreds of papers. This allowed me to think deeply about concepts from human-computer interaction, user experience design, and programming language design, and how these concepts interact with ideas of statistical computing. If you look at the references of [my recent paper](https://www.tandfonline.com/doi/full/10.1080/00031305.2018.1482784), I think it's clear this paper came from a dissertation, because it has almost 100 references. The two most influential pieces to my dissertation (and this derived work) were

- [The Technical Tools of Statistics](https://amstat.tandfonline.com/doi/abs/10.1080/00031305.1965.10479711#.XdA6_pNKjBI), by John Tukey (1965)
- [Software for Learning and for Doing Statistics](https://iase-web.org/documents/intstatreview/97.Biehler.pdf), by Rolf Biehler (1997)

Both of these papers lay out idealized attributes of statistical tools, and by clearly articulating the way tools should work in the future, they were able to manifest that future. (As [Alan Kay](http://amturing.acm.org/award_winners/kay_3972189.cfm) [says](https://quoteinvestigator.com/2012/09/27/invent-the-future/), "the best way to predict the future is to create it.") 

In Tukey's case, his paper clearly influenced his own software work (e.g., [prim9](https://www.youtube.com/watch?v=B7XoW2qiFUA), a tool for visualizing high-dimensional data from the 1970s, which you interacted with using a light pen), as well as tools like S, S-Plus, and R. 

Biehler's paper laid the groundwork for [TinkerPlots](https://www.tinkerplots.com/) and [Fathom](https://fathom.concord.org/), two tools for teaching statistics that allowed learners to directly interact with their data and build intuition about statistics. Sadly, both TinkerPlots and Fathom are now mostly defunct, although The Concord Consortium is working on a next-generation tool called [CODAP](https://codap.concord.org/), the Common Online Data Analysis Platform (full disclosure, I have consulted with The Concord Consortium). 

I found these papers influential, and I saw an opportunity to reconsider the necessary components for statistical software again. Nearly 20 years had passed since Biehler's paper, and advances in computer graphics and software in general have made more things possible. Working from the inspiration of Tukey and Biehler, and guided by my on-the-ground experience teaching R as well as my extensive literature review, I developed a list of ten attributes I think are necessary for a modern statistical computing tool. These are:

1. Accessibility
2. Easy entry for novice users
3. Data as a first-order persistent object
4. Support for a cycle of exploratory and confirmatory analysis 
5. Flexible plot creation
6. Support for randomization throughout
7. Interactivity at every level
8. Inherent documentation
9. Simple support for narrative, publishing, and reproducibility 
10. Flexibility to build extensions


