---
layout: post
active: Blog
ptitle:  "Repping Hadley at DataFest" 
categories: misc
img: "DataFest2014.jpg"
---

This weekend, we had our fourth annual [DataFest](http://datafest.stat.ucla.edu/groups/datafest/) event at UCLA. DataFest is a weekend-long data hackathon, where we give students an interesting dataset, plenty of snacks, and a space to work, and they try to come up with insights. This was the third year I attended, and it seems to just get bigger and better every time. We had about 140 undergraduates from all around Southern California this year. Groups came from UCLA, USC, Cal Poly SLO, UC Riverside, and Pomona College. Our data sponsor was [GridPoint](http://www.gridpoint.com/), an energy-management company. They provide a service that is similar to the [Nest](https://nest.com/) (my simplistic interpretation), and they gave us tons of data for the students to analyze. I signed an NDA, so I shouldn't be very specific about the contents of their proprietary dataset, but students were able to find tons of cool insights.

<!--more-->

<a class="thumb" href="#"><img src="{{ site.baseurl }}/img/{{ page.img }}" class="img-responsive" alt="DataFest 2014 students"></a>
*Our 2014 DataFest contestants*

My personal favorite project (and Best Visualization prize winner) was a group who found and analyzed a trend in misusing AC, which they defined as running the air conditioner when outside temperatures were below some cutoff, I believe 60 degrees. Really, all the projects were fantastic.

As a graduate student "consultant" at DataFest, my responsibility was to float around and help the contestants. Since most of the UCLA participants have had me as a TA in a class where we're using R, I got a lot of programming questions. Invariably, when students were really stuck on something it was a hard problem (which was bad for me looking like a superhero, but means that our students are getting the hang of R!). 

During the weekend, I realized that I was repping [Hadley Wickham](http://had.co.nz/)'s packages even harder than usual. For example, students kept coming to me with incredibly hairy code, filled with multiple `for` loops using explicit indices and making matches over many factor levels, asking for help debugging why it wasn't doing what they wanted. Although I would attempt to talk through their code with them, it was usually beyond me getting up to speed quickly enough to catch what was probably a small typo somewhere. Instead, I constantly suggested [plyr](http://plyr.had.co.nz/), and actually became pretty good at it over the weekend. `ddply()` is such a heavy-hitter! There were definitely a few "whoa"s from students who hadn't seen the power of plyr before. Most of my students already know [ggplot2](http://ggplot2.org/), but they haven't gone beyond the basic geoms. I helped another group use `geom_polygon()` to show an additional layer of data in their plot. Finally, the data was all time stamped, and although the base R functions like `as.POSIX()` would work, I saw a lot of code trying to make character matches to pull months or years from the data. [lubridate](http://cran.r-project.org/web/packages/lubridate/index.html) to the rescue! 

In fact, I must have a standard line on Hadley, because at one point a group of students called me over to join a conversation with some of our sponsors from [Summit Consulting](http://www.summitllc.us/). "Amelia, what do you think about Hadley Wickham?" they asked. "He's great!" I said. "He writes all the best packages!" This got a big laugh, to the point that I think they'd made a bet on what I'd say. 

[RStudio](http://www.rstudio.com/) was a generous sponsor of the event, but I think next year they should send some visitors! At the very least, we need to bring back our mini-seminar series during DataFest, and do demos of some of these useful packages. 

----

For more on DataFest, check out our [twitter](https://twitter.com/ucladatafest) (and the hashtag [#datafest](https://twitter.com/search?q=%23datafest&src=hash)), as well as this [great article](http://fivethirtyeight.com/datalab/the-students-most-likely-to-take-our-jobs/) from FiveThirtyEight. The article mentions that there were three other DataFests this year, at [Duke](http://stat.duke.edu/datafest), the [Five Colleges](http://www.science.smith.edu/departments/math/datafest/) and [Princeton](http://orfe.princeton.edu/datafest/). Next year, we're hoping to go even more national, with support from the American Statistical Association. I can't wait to see where it goes in the future!


