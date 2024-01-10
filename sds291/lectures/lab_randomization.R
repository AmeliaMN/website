## ---- message=FALSE------------------------------------------------------
require(mosaic)
require(Stat2Data)

## ------------------------------------------------------------------------
data(FirstYearGPA)
n <- nrow(FirstYearGPA)

## ------------------------------------------------------------------------
xyplot(GPA ~ SATV, data=FirstYearGPA, pch=19, cex=2, alpha=0.5, type=c("p","r"), lwd=5)

## ------------------------------------------------------------------------
cor.actual <- cor(GPA ~ SATV, data=FirstYearGPA)
cor.actual

## ------------------------------------------------------------------------
cor.test(FirstYearGPA$GPA, FirstYearGPA$SATV)

## ---- eval=FALSE---------------------------------------------------------
## xyplot(GPA ~ shuffle(SATV), data=FirstYearGPA, pch=19, cex=2, alpha=0.5, type=c("p","r"), lwd=5)

## ------------------------------------------------------------------------
# Do this 1000 times
rtest <- do(5000) * cor(GPA ~ shuffle(SATV), data=FirstYearGPA)
p1 <- densityplot(~cor, data=rtest, xlim=c(-0.4,0.4), xlab="Correlation Coefficient")
ladd(panel.abline(v=cor.actual, col="red", lwd=3), plot=p1)

## ---- eval=FALSE---------------------------------------------------------
## pdata(cor.actual, vals = ~cor, data = rtest)

## ---- eval=FALSE---------------------------------------------------------
## qdata(c(0.025, 0.975), vals = ~cor, data = rtest)

## ------------------------------------------------------------------------
data(PorschePrice)
xyplot(Price ~ Mileage, data=PorschePrice, pch=19, cex=2, alpha=0.5, type=c("p","r"), lwd=5)

## ---- eval=FALSE---------------------------------------------------------
## xyplot(Price ~ Mileage, data=resample(PorschePrice), pch=19, cex=2, alpha=0.5, type=c("p","r"), lwd=5)

## ------------------------------------------------------------------------
bslope <- function (formula, data, n) {
  # Original data
  # Now do the bootstrap
  bootstrap <- do(n) * coef(lm(formula, data=resample(data)))
  xyplot(formula, data=data, 
         panel = function (x, y, ...) {
           panel.xyplot(x,y, pch=19, cex=2, alpha=0.5)
           fm <- lm(formula, data=data)
           panel.abline(fm, col="red", lwd=5)
           # Add the bootstrap slopes
           for (i in 1:n) {
             panel.abline(t(bootstrap[i,]), -0.5, col="lightgray", lwd=0.3)
             }
           panel.text(75, 80, paste("mean intercept\n", round(mean(~Intercept, data=bootstrap), 6)), cex=0.75)
           panel.text(75, 75, paste("sd intercept\n", round(sd(~Intercept, data=bootstrap), 6)), cex=0.75)
           panel.text(75, 70, paste("mean slope\n", round(mean(~Mileage, data=bootstrap), 6)), cex=0.75)
           panel.text(75, 65, paste("sd slope\n", round(sd(~Mileage, data=bootstrap), 6)), cex=0.75)
           }
  )
  }
# bslope(Price ~ Mileage, data=PorschePrice, 100)

## ---- eval=FALSE---------------------------------------------------------
## # install.packages("manipulate")
## require(manipulate)
## manipulate(
##   bslope(Price ~ Mileage, data=PorschePrice, n),
##   n = slider(2, 500, initial=100)
## )

## ------------------------------------------------------------------------
fm <- lm(Price ~ Mileage, data=PorschePrice)
confint(fm)

## ---- eval=FALSE---------------------------------------------------------
## # I'm only doing 100 samples, but you should do more!
## bootstrap <- do(100) * coef(lm(Price ~ Mileage, data=resample(PorschePrice)))
## p2 <- densityplot(~Mileage, data=bootstrap)
## ladd(panel.abline(v=coef(fm)["Mileage"], col="red", lwd=3), plot=p2)

## ---- eval=FALSE---------------------------------------------------------
## zs <- qnorm(c(0.025, 0.975))
## coef(fm)["Mileage"] + zs * sd(~Mileage, data=bootstrap)

## ---- eval=FALSE---------------------------------------------------------
## qdata(c(0.025, 0.975), vals=Mileage, data=bootstrap)

## ---- eval=FALSE---------------------------------------------------------
## qs <- qdata(c(0.025, 0.975), vals=Mileage, data=bootstrap)$quantile
## coef(fm)["Mileage"] - (qs - coef(fm)["Mileage"])

