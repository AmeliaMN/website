---
layout: post
active: Blog
ptitle:  "Thoughts from NICAR 2014: data, where does it come from?" 
categories: conferences 
---

One of the strands I followed most closely at NICAR was the way people get and use data. Here are some of the things that surprised me or intersect with the stuff I'm thinking about for my dissertation.
<!--more--> 

**Data resources**

I was surprised by the data resources that I hadn't heard about before. NICAR maintains a [list of databases ](http://www.ire.org/nicar/database-library/) that are available for purchase. These datasets don't seem to be that expensive, and are pretty interesting looking. Anything from [boat registration](http://ire.org/nicar/database-library/databases/boat-registration/) to something called the [Social Security Death Master File](http://ire.org/nicar/database-library/databases/social-security-administration-death-master-file/), which sounds varying degrees of sinister depending on where you put the emphasis. 

**FOIA requests**

The most useful thing I came away with was the realization that I, as a private citizen, am entitled to make FOIA (Freedom of Information Act) requests. If the government, especially the Federal government, is keeping data, I can request and receive it. I've been given to believe that this can be a difficult and slow process, but I'm looking forward to trying it out. One of the tools that people were talking about excitedly at NICAR was the [FOIA machine](https://www.foiamachine.org/) which automates your FOIA requests. 

When you make FOIA requests, it's best if you have some idea of what you're looking for, but nothing too specific. If it's clear the story you're pursuing when you make a request, it might be denied. But, you need to know that the data exist to be able to ask for them. Apparently this is very "journalism 101," but blank government forms can give a good hint as to what data the government is collecting. Additionally, you can FOIA a "records layout" for a database, so that you know what the variables are before you make your official request for the data. 

**Population, not a sample**

One statistical idea that I hadn't connected the dots on is that journalists often are working with data that is not a sample. This is obviously a problem that many "data scientists" encounter, because data are coming from sources like the internet, but in the case of government data, if you get the entire data set, it should be the entire population, **not** a sample. 

Obviously, this changes the sorts of analysis tasks you might want to do. If you have the population, do you really need statistics? 

**Data are created by humans**

Speakers seemed to understand that all data had been touched by human hands "at least once in the process," but I thought that their understanding could have gone deeper. If you think that some data you receive was created completely by a machine, you're mistaken! Even if it's an automated process, humans designed the hardware, the software, the programming language, the data collection algorithm, the data types for collection, etc. 


**Physical metaphors for data analysis**

I also went to a session on "When Data Don't Exist" where several journalists talked about situations where they weren't able to find existing datasets and had to create them themselves. There were a couple examples given in the session, especially by [Sarah Cohen](https://twitter.com/sarahcnyt), that felt like a physical metaphor for data analysis more generally. Several times through her career, Cohen had to go through boxes of paper to turn them into a dataset. At first, she was going through the boxes consecutively, but she learned that you have different questions of the data once you've completed the first pass. Instead, she recommends trying to go through the boxes randomly. This will help you get a sense of the data. Use 2-3 weeks for your first stab, and only then make an estimate of how the rest of the process will take. 

This is a great metaphor. It drives home the idea that going through data changes how you think about data. And usually, the first time you collect data (whether by going through boxes or deploying a participatory sensing campaign) you won't get your collection schema exactly right. You'll look back at your data and say, if only I had \[blank\]. By making it explicit that you're doing a first pass, not trying to do the whole thing at once, you might be able to escape the sinking feeling that comes after you've put too much time into something that's not going to work. 

**Data that journalists encounter**

It came up again and again that much of the data that journalists encounter comes in the form of a pdf. Apparently, it's a common tactic for an agency to respond to a FOIA request by sending a pdf of data instead of the raw data file (csv, json, xls, etc). This makes it much harder to use the data, because you need to either go through it manually and re-enter the data (making pdfs the computer equivalent of Cohen's boxes) or use some sort of technological solution. I heard OCR (optical character recognition) being thrown around quite a bit, but OCR really only helps you get text that was scanned into a digital format. Past that, the solution that had people talking at NICAR was [tabula](http://tabula.nerdpower.org/). Tabula turns digital data that seems unstructured to humans into structured data tables, saving you the work of typing it in yourself.

*This is the second in a series of posts about NICAR. The first is [here](http://www.stat.ucla.edu/~amelia.mcnamara/blog/conferences/2014/03/04/NICARthoughtsPt1.html) and the next is [here](http://www.stat.ucla.edu/~amelia.mcnamara/blog/conferences/2014/03/04/NICARthoughtsPt3.html).*



