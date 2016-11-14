---
layout: post
active: Blog
ptitle:  "Thoughts from NICAR 2014: process and content" 
categories: conferences 
---

One of the things I was most interested in learning about at NICAR was the processes and tools that journalists use when they're doing data analysis. And the conference did not disappoint. I feel like I came away with a bunch of insight about how things are typically done, and a couple great places where crossover could be even more useful. 

<!--more-->

**Data diaries**

Throughout the conference, I heard several people emphasize the need for a "data diary" to document the process of creating data-driven journalism. This is great! We should all strive to document our work to capture our own process and remember what we do. However, it seems like journalists have a workflow something like, as you do your analysis in Excel, write down in Word what you did. Others write longhand on a piece of paper. But, it would be much better to have the documentation of the process actually **be** the process. For example, if you do your analysis in a language like python or R, you don't have to write out "I edited the third row, second column to say 10 instead of 10000." Rather, the code both does the action and documents what happened. Obviously, commenting is important so that you remember what all your hacks were doing, but using a language rather than a graphical user interface makes the process so much more documented. In fact, you can wrap your code and comments in a narrative, using tools like the [iPython](http://ipython.org/notebook) notebook or [R Markdown](http://www.rstudio.com/ide/docs/authoring/using_markdown).  

In fact, one of my dreams for data journalism has been that all data-driven stories would be accompanied by a version of the data cleaning and analysis process. This documentation would be available to readers, who could modify and "audit" the code/process to see what their changes do. In my vision, you could also view the raw data, to see where everything started. However, hearing it from the journalistic prospective, that's probably an unreasonable vision. Sarah Cohen was saying that if you wanted to open-source data, you would need to verify **every cell** in the data set, and have an editor go through it, too. It's hard for me to imagine "editing" a data set like that, but I can see why it's necessary. If you did something wrong in your data set, it may not make any impact on the final result (that one value probably isn't throwing off your mean or plot if it's not an outlier) but if the public could inspect the data cell by cell, it could be a big deal to have a number wrong. I need to think more about this and see if there's a solution. If you think of one, let me know in the comments!

**Working headlines**

Another piece of process that I heard referenced several times in the sessions on "The Data-Driven Story" was the conversation starter, "Tell me what your working headline is. Tell me what your first two paragraphs are." I work with a lot of education experts, who like the strategy of "sentence starters" which are phrases that help get students speaking in the language of the discipline, while guiding the conversation. This is similar. It's a simple strategy, but it would be easy for an editor, even one not experienced with data, to understand the response from their journalist. It takes the conversation out of the realm of the data and back into the context. I think it could be a useful conversation (or [rubber-duck debugging](http://en.wikipedia.org/wiki/Rubber_duck_debugging) topic) for statisticians and data analysts to work through. 


**Lightning talks**

On a more meta level, I thought the exercise of lightning talks was extremely effective. The space was large enough for almost every attendee of the conference to be included, the talks were short enough that they could only tantalize, never bore, and the material was surprisingly complex. The event was kicked off with some stand-up comedy by [Andy Boyle](http://www.andymboyle.com/), who I've come to discover is just as funny on [twitter](https://twitter.com/andymboyle) talking about journalism. 

For me, the best three lighting talks were by [Lena Groeger](http://lenagroeger.com/), [Chase Davis](http://www.chasedavis.com/) and [Ben Welsh](http://palewi.re/who-is-ben-welsh/). Lena talked about "wee things," which I thought was a nice contrast to "big data." Some of the wee things she discussed were small multiples, tiny text, mini maps,  iity-bitty images, and sparklines. The entire talk seems to be available [online](http://vimeo.com/91429794) if you want to check it out yourself. She also recommended the book [The Information](http://www.amazon.com/The-Information-History-Theory-Flood/dp/1400096235) which I'm really looking forward to getting into. Chase essentially ran through my entire statistics graduate education in 5 minutes, explaining five algorithms, including Latent Dirichelt Allocation and the Naive Bayes Classifier. The [code](https://github.com/cjdd3b/nicar2014/tree/master/lightning-talk) is on github, although the presentation isn't working for me. He apparently gave a similar talk the previous year, so if you want to catch up with **everything** I've learned in my Phd, check out his [code](https://github.com/cjdd3b/nicar2013) and learn about Principal Component Analysis, Random Forests, and more. Ben did a talk called "You Must Learn," although what stuck with me the most (more than what I was supposed to learn, oops) was the graphic styling of his presentation. Each slide was like a comic encapsulation of what he was talking about, and not in a dumb clipart way. The video of the talk is [up](http://palewi.re/talks/) too. 

I'm on the planning committee for useR! 2014, and I'm hoping that our lightning talks can be even half as awesome as the ones from NICAR. You heard me, statisticians, step it up!

**Lyra**

More of a tool than a process, but I was thrilled to be able to attend a live demo of [Lyra](http://idl.cs.washington.edu/projects/lyra/) with [Arvind Satyanarayan](http://arvindsatya.com/), one of the creators of the project. Lyra is fascinating to me because it's open source, it's working with an existing framework, and it just makes extremely powerful data visualization tools available to people without much training necessary. If you haven't already seen it, check out the gallery of plots they've been able to reproduce with their tool. 


*This is my third (and final) post about NICAR 2014. The other two are [here](http://www.stat.ucla.edu/~amelia.mcnamara/blog/conferences/2014/03/04/NICARthoughtsPt1.html) and [here](http://www.stat.ucla.edu/~amelia.mcnamara/blog/conferences/2014/03/04/NICARthoughtsPt1.html). 


