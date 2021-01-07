---
layout: frommd
active: Teaching
title: STAT 220 labs
excerpt: STAT 220 labs, formula and tidy syntax 
---

## STAT 220 labs
		
In Spring 2020 and Fall 2020, I embarked on an "experiment" of sorts to compare the formula and tidyverse syntaxes for teaching introductory statistics.

Prior to this experiement, I had taught a full-semester introductory statistics course soley using formula syntax, as well as a full-semester course in tidyverse syntax. Both semesters were at my previous institution (Smith College). However, I had never compared the two syntaxes head to head. This made it difficult to compare, because groups of students vary so much semester to semester. In addition, when I wrote the instructional materials for a tidy semester (for example) I would be implicitly thinking of tasks that would be easy to do in tidy syntax.
		
At St Thomas, the STAT 220 are written to be software-agnostic (they are used across all the STAT 220 labs, including labs taught in Excel, Minitab, JMP, and SPSS), which allowed me to produce materials without being influenced as much by the tasks that would easy in a particular syntax. I developed pre-labs for each of the 12 labs in each of the two syntaxes.

The pre-labs are written and provided to students in RMarkdown format, and walk students through the code necessary to accomplish the tasks in the real lab for the week. Some code is provided in the document, but there are also blank code chunks and questions throughout the pre-lab, which students work through as they go. The pre-labs for the two syntaxes are typically similar in text content, but different in the code they display, although differences in the syntax mean that they occasionally deviate.

When I teach in person, I guide students through th pre-lab material live, stopping periodically to give them time to work on questions. For the first several weeks of this experiment (in Spring 2020) I was able to do this sort of live teaching. When the pandemic forced courses online in March 2020, I began providing the pre-lab material as YouTube videos students could watch asynchronously. In the Fall 2020 semester, each pre-lab has been provided as a YouTube video. During synchronous classtime, I help students get started on the real lab, and stay on Zoom to answer questions from students as they arise.

### formula syntax

I provide students with a cheatsheet entitled [All the R you need for intro stat](https://github.com/AmeliaMN/STAT220-labs/blob/main/all_the_R_you_need_formula.Rmd), which gives them an overview of the most important code for the semester. Each week, I post RMarkdown documents on Canvas (also [hosted on GitHub](https://github.com/AmeliaMN/STAT220-labs/tree/main/formula) for sharing), and accompanying videos on [the YouTube playlist for the class](https://www.youtube.com/playlist?list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S).

- Describing data. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/01-STAT_220_DescribingDataPreLab-formula.Rmd), [YouTube video](https://www.youtube.com/watch?v=4cfkNnwJH4A&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=2&)
- Categorical variables. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/02-STAT_220_CategoricalVariablesPreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=_nztp2ZGd6I&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=3), [video 2](https://www.youtube.com/watch?v=JgejphW9re0&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=4). 
- Quantitative variables. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/03-STAT_220_QuantitativeVariablesPreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=K0GPIZBJd_0&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=5), [video 2](https://www.youtube.com/watch?v=sdD982FqoYA&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=6)
- Correlation and regression. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/04-STAT_220_RegressionPreLab-formula.Rmd), [YouTube video](https://www.youtube.com/watch?v=VVqvEgYkNcs&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=7)
- Bootstrap intervals. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/05-STAT_220_BootstrapPreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=AyK0ko_aEWw&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=8), [video 2](https://www.youtube.com/watch?v=31Gy5OnjcPA&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=9)
- Randomization tests. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/06-STAT_220_RandomizationPreLab-formula.Rmd), [YouTube video](https://www.youtube.com/watch?v=CuvKLvAGb68&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=10)
- Inference for a single sample. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/07-STAT_220_InferenceSinglePreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=MNvJll40ras&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=11), [video 2](https://www.youtube.com/watch?v=51ubvJt3fu4&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=12), [video 3](https://www.youtube.com/watch?v=iQuVZiBqy2s&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=13)
- Inference for two samples. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/09-STAT_220_TwoSamplePreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=Mwt1FHU2xVM&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=14), [video 2](https://www.youtube.com/watch?v=m1DDEvAdlKI&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=15)
- ANOVA. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/10-STAT_220_ANOVAPreLab-formula.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=v3ozvy6G7Ns&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=16), [video 2](https://www.youtube.com/watch?v=tuYOjkvvwlg&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=17)
- Chi-square. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/11-STAT_220_ChiSquarePreLab-formula.Rmd), [YouTube video](https://www.youtube.com/watch?v=UDOno8z9Txw&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=18)
- Inference for Regression. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/formula/12-STAT_220_RegressionInferencePreLab-formula.Rmd). YouTube [video 1](https://www.youtube.com/watch?v=KqBatgijU60&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=19), [video 2](https://www.youtube.com/watch?v=MkjiMRhKNt4&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=20), [video 3](https://www.youtube.com/watch?v=Xy8zbV9bA7A&list=PLik6fAQnSI90bHK9fapPS-eZCUhgROh6S&index=21). 


### tidy syntax

I provide students with a cheatsheet entitled [All the R you need for intro stat](https://github.com/AmeliaMN/STAT220-labs/blob/main/all_the_R_you_need_tidy.Rmd), which gives them an overview of the most important code for the semester. Each week, I post RMarkdown documents on Canvas (also [hosted on GitHub](https://github.com/AmeliaMN/STAT220-labs/tree/main/tidy) for sharing), and accompanying videos on [the YouTube playlist for the class](https://www.youtube.com/playlist?list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX).

- Describing data. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/01-STAT_220_DescribingDataPreLab_tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=vMZXK_RJ-_k&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=2)
- Categorical variables. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/02-STAT_220_CategoricalVariablesPreLab_tidy.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=Ir-LeWndP70&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=3), [video 2](https://www.youtube.com/watch?v=Q3HJSCG3GOQ&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=4)
- Quantitative variables. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/03-STAT_220_QuantitativeVariablesPreLab_tidy.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=f2TKQYizfqA&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=5), [video 2](https://www.youtube.com/watch?v=siB6pydmQYY&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=6)
- Correlation and regression. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/04-STAT_220_RegressionPreLab_tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=j5mu5XcJD_w&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=7)
- Bootstrap intervals. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/05-STAT_220_BootstrapPreLab-tidy.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=FE6_NrUXgMI&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=8), [video 2](https://www.youtube.com/watch?v=IPQaqi6rP0o&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=9)
- Randomization tests. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/06-STAT_220_RandomizationPreLab-tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=2KwN-JrVfwQ&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=10)
- Inference for a single proportion. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/07-STAT_220_InferenceSingleProportionPreLab-tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=H8msMGkUmp0&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=11)
- Inference for a single mean. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/08-STAT_220_InferenceSingleMeanPreLab-tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=VvjImYrUobA&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=12)
- Inference for two samples. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/09-STAT_220_TwoSamplePreLab-tidy.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=4zVAN4gqAmQ&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=13), [video 2](https://www.youtube.com/watch?v=lvZphz3-oXE&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=14)
- ANOVA. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/10-STAT_220_ANOVAPreLab-tidy.Rmd), YouTube [video 1](https://www.youtube.com/watch?v=iul28zUiCM4&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=15), [video 2](https://www.youtube.com/watch?v=kXJOwsRqd8g&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=16)
- Chi-square. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/11-STAT_220_ChiSquarePreLab-tidy.Rmd), [YouTube video](https://www.youtube.com/watch?v=WfNRZfd9z-Y&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=17)
- Inference for Regression. [RMarkdown](https://github.com/AmeliaMN/STAT220-labs/blob/main/tidy/12-STAT_220_RegressionInferencePreLab-tidy.Rmd). YouTube [video 1](https://www.youtube.com/watch?v=TY30JLeYwKA&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=18), [video 2](https://www.youtube.com/watch?v=MkjiMRhKNt4&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=19), [video 3](https://www.youtube.com/watch?v=Xy8zbV9bA7A&list=PLik6fAQnSI93eBVuAONFBCVdOd7VFhKQX&index=20)



   
