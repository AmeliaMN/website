## ---- message=FALSE, warning=FALSE, echo=FALSE---------------------------
require(knitr)
opts_chunk$set(eval=TRUE)

## ---- message=FALSE------------------------------------------------------
require(mosaic)
require(Stat2Data)

## ------------------------------------------------------------------------
data(FruitFlies)
head(FruitFlies)

## ------------------------------------------------------------------------
levels(FruitFlies$Treatment)

## ------------------------------------------------------------------------
# Set the reference level
FruitFlies <- mutate(FruitFlies, Treatment = relevel(Treatment, ref="none"))

## ---- fig.width=10-------------------------------------------------------
d1plot <- dotPlot(~Longevity, data=FruitFlies)
d2plot <- dotPlot(~Longevity | Treatment, data=FruitFlies, layout=c(1,5))
# arrange the two plots horizontally
print(d1plot, position=c(0, 0, 0.5, 1), more=TRUE)
print(d2plot, position=c(0.5, 0, 1, 1))
b1plot <- bwplot(~Longevity, data=FruitFlies)
b2plot <- bwplot(~Longevity | Treatment, data=FruitFlies, layout=c(1,5))
# arrange the two plots horizontally
print(b1plot, position=c(0, 0, 0.5, 1), more=TRUE)
print(b2plot, position=c(0.5, 0, 1, 1))

## ------------------------------------------------------------------------
gstats <- favstats(Longevity ~ Treatment, data=FruitFlies)
gstats

## ------------------------------------------------------------------------
fm.null <- lm(Longevity ~ 1, data=FruitFlies)
summary(fm.null)
mean(~Longevity, data=FruitFlies)
fitted <- predict(fm.null)

## ---- fig.width=10-------------------------------------------------------
ladd(panel.abline(v=coef(fit.null), col="red", lwd=3), plot=d2plot)

## ---- fig.width=10-------------------------------------------------------
splot <- plotPoints(Longevity ~ runif(nrow(FruitFlies)), groups = Treatment, data=FruitFlies, alpha=0.3, pch=19, cex=2, auto.key=TRUE)
print(splot)
fit.null <- makeFun(fm.null)
print(splot)

## ------------------------------------------------------------------------
fm.aov <- aov(Longevity ~ Treatment, data=FruitFlies)
summary(fm.aov)
model.tables(fm.aov)

## ------------------------------------------------------------------------
fm.ref <- lm(Longevity ~ Treatment, data=FruitFlies)
summary(fm.ref)
anova(fm.ref)
gstats$mean - mean(FruitFlies$Longevity)

## ---- fig.width=10-------------------------------------------------------
fit.longevity <- makeFun(fm.aov)
print(splot)
palette = trellis.par.get()$superpose.symbol$col
ladd(panel.abline(h=fit.longevity(Treatment = "none"), col=palette[1], lwd=3))
ladd(panel.abline(h=fit.longevity(Treatment = "1 pregnant"), col=palette[2], lwd=3))
ladd(panel.abline(h=fit.longevity(Treatment = "1 virgin"), col=palette[3], lwd=3))
ladd(panel.abline(h=fit.longevity(Treatment = "8 pregnant"), col=palette[4], lwd=3))
ladd(panel.abline(h=fit.longevity(Treatment = "8 virgin"), col=palette[5], lwd=3))

## ---- fig.width=10-------------------------------------------------------
par(mfrow=c(2,2))
plot(fm.aov)
par(mfrow=c(1,1))
max(gstats$sd) / min(gstats$sd)

## ------------------------------------------------------------------------
data(Hawks)

