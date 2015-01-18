---
layout: post
active: Blog
ptitle:  "New tools for data analysis and journalism" 
categories: conferences
img: "2014-10-27 10.10.06.jpg"
---

While the [Computation + Journalism Symposium](http://symposium2014.computation-and-journalism.com/) continues to be filled with fascinating inlets to journalistic projects and innovative computational approaches (like using drones to map garbage dumps) the component that always catches my attention is the demoing of new tools for data analysis. 

This year's symposium was hosted at the [Brown Institute](http://brown.columbia.edu/) and was no exception-- I saw many projects that approached elements of my [theory about the future of statistical programming]({{ site.baseurl }}/FOSP.html) from different directions.

<!--more-->

Many of the data analysis projects were discussed on a panel about journalistic platforms. The panelists were

* [Gideon Mann](https://sites.google.com/site/gideonmann/), of Bloomberg, speaking about [coLaboratory](https://colaboratory.jupyter.org/welcome/)
* [Kareem Amin](http://www.kareemamin.com/), of [NewsCorp](http://newscorp.com/), talking about a forthcoming tool that uses custom HTML tags
* [Brian Abelson](http://brianabelson.com/), of [enigma.io](http://enigma.io/) and the [Tow Center](http://towcenter.org/), on [streamtools](http://nytlabs.github.io/streamtools/) from the [NYT R&D labs](http://nytlabs.com/)


All the tools spoke to the ideas I am engaging with in my dissertation, which I found very encouraging. The context that I have been thinking most deeply about is the high school data science classroom, much like the [Mobilize]({{ site.baseurl }}/mobilize.html) project, which I formerly worked on. 

However, data journalism is the other context that I had been hoping to find relevance in. The fact that the panelists were engaging with the same issues, of being able to get started quickly but develop new modules as needed, of publishability and the need for interactivity, suggests that the two seemingly-different contexts (high school students/teachers, and data journalists) might not be that different in their needs after all. 

### **coLaboratory**

I had asked my twitterverse about coLaboratory in September,

<blockquote class="twitter-tweet" lang="en"><p>Saw this article on CoLaboratory, <a href="http://t.co/MylVNfZckI">http://t.co/MylVNfZckI</a> but would love to hear from people who use it. <a href="https://twitter.com/hmason">@hmason</a>?</p>&mdash; Amelia McNamara (@AmeliaMN) <a href="https://twitter.com/AmeliaMN/status/515557079642169344">September 26, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

but got no response except for [Hilary Mason](https://twitter.com/hmason) responding that she didn't know the project and didn't know why her photo was used on the article. 

So, it was great to hear about the project straight from the horse's mouth. [coLaboratory](https://colaboratory.jupyter.org/welcome/) seems to be part of [project Jupyter](http://jupyter.org/), and it offers an iPython notebook that allows you to collaborate with others. Sadly, all their documentation seems to be technical, without any of the "so what" that I look for when learning about a tool. I did find a google research [blog post](http://googleresearch.blogspot.com/2014/08/doing-data-science-with-colaboratory.html) which gives a little more context and a few examples. 

Essentially, coLaboratory can produce interactive reports (meaning, with sliders and buttons for users to interact with). It also has some focus on making it easy to develop the interface, using simple commands to invoke interactive controls. However, once a user modifies a control they need to re-click on the "run" button to see the updated information. This is my main complaint with iPython notebooks in general, so it's too bad that the version for creating interactive documents doesn't manage to jump that hurdle.  The other problem is that the source code really isn't *that* readable when you get down to it.

### **Thelma**

The tool that Amin was talking about had different advantages. First, it is a click-driven interface, so you click on data inputs and outputs and see the results in the browser. By allowing users to build analysis in this way, you make it easier for novices to get started easily while still making nice results. The product he was talking about is based on custom HTML tags, using [Polymer](https://www.polymer-project.org/) web components. 

I don't think that Amin wanted the name of the project to be made public yet, but he showed a demo and several people tweeted out the [link](http://thelmanews.github.io/thelma-component-demo/data-demo.html),
<blockquote class="twitter-tweet" lang="en"><p>As you do data analysis it updates the webpage: <a href="http://t.co/isWky1uNAV">http://t.co/isWky1uNAV</a> -<a href="https://twitter.com/kareemamin">@kareemamin</a> <a href="https://twitter.com/hashtag/cj2014?src=hash">#cj2014</a></p>&mdash; Nick Diakopoulos (@ndiakopoulos) <a href="https://twitter.com/ndiakopoulos/status/525677010816090112">October 24, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

and it appears to be called Thelma. 

Obviously, Thelma needs a lot more work before it's really made public. It's not clear how to begin if you want to do something that doesn't use the data and chart types already on the demo page, and even those aren't exactly transparent. But, there's a lot of potential here. The resulting charts are somewhat interactive, and updating happens as soon as you modify the inputs/outputs. 

### **streamtools**

Then, [Brian Abelson](http://brianabelson.com/) spoke about [streamtools](http://nytlabs.github.io/streamtools/). Abelson was not involved with the development of streamtools, but he found it useful enough that he was willing to be its advocate on the panel. streamtools is a dataflow programming environment for working with live streaming data. Rather than waiting for data to be presented as a flat file, the lab wanted to allow users to deal directly with data as it streams in. Since I work with the Communications Design Group, it immediately made me think of Dan Ingalls' [fabrik](https://en.wikipedia.org/wiki/Fabrik_(software)) (a visual programming environment in which users "wired" components together), but of course there is a rich history of this sort of blocks programming environments. 

The tool does a great job of making explicit the links between components in the system, and giving a visual hint to the data flowing through the system. However, it seems that the intended user of the system is someone who knows quite a bit about data analysis and programming. The blocks do not cue you toward their behavior, and the "parts bin" (to steal a [Lively](http://lively-web.org/welcome.html) term) is full of consise but not extremely descriptive labels. 

### **IEEE programming language rating**

The other project (not from the panel) that caught my eye was [Nick Diakopoulos](http://www.nickdiakopoulos.com/)' interactive [ranking of programming languages](http://spectrum.ieee.org/computing/software/top-10-programming-languages) for IEEE Spectrum. Sadly, it seems like the [interactive version](http://spectrum.ieee.org/static/interactive-the-top-programming-languages) is behind a paywall, but it's worth the 99¢ to see it. 

The ranking is based on a number of factors, such as position in google results, number of github repositories, and questions on stackoverflow. The interactive tool lets you see four different versions of the rating: IEEE Spectrum, Trending, Jobs, and Open. You can also filter the languages shown to only display Mobile, Web, Enterprise, or Embedded languages. 

But the real beauty in this project is that you can manipulate the parameters used in the rankings to create your own version. If you don't believe that google page rank is a good measure of a programming language's ubiquity, you can drag that slider down or even zero it out. This lets you modify the procedure used to create the ranking, and it allows you to perform ad hoc sensitivity analysis. Many changes to parameters do not change the rankings, which could make a reader more confident in the ranking as provided by the IEEE. 

In fact, the list is so robust to parameter manipulation that it was hard for me to tell if the ranking was being updated dynamically, or if you need to click the "Save as Custom" button to see the results! However, they do provide a great "Make a Comparison" button, which shows a sort of slopegraph/bumps chart (see [Tufte](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0003nk)) displaying which languages were displaced and to where.

This article/interactive can't really be described as a "tool," per se, but I loved seeing an example of analysis where the underlying data work was exposed. This is the sort of "interaction all the way down" that I think is the future of data analysis. Not only should creators of data products be able to interact with their work as they produce it, consumers of those products should have the opportunity to deeply critique the process by viewing a transparent representation of the analysis process. 

### **Overall**

I am so invigorated by everything that I saw at the symposium. It's such a treat to be around people who are thinking about some of the same issues that I am. 

If you want to learn more about any of these projects, they are almost all forkable on github, which is another one of the principles that I think all good software should adhere to! What other interesting projects have you seen recently?
