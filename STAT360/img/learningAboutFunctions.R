
# R function that reverses a string

flip <- function(x){
  if(x == ""){
    return(x)
  } else {
    return(paste(flip(substring(x,2)),substring(x,1,1),sep=""))
  }}

flip("flip it and reverse it")


## Your turn
# print the code for mad() in the Console


## Environments

environment(substring)
environment(paste)

## Functions in our path
f <- function(x) x^2 
environment(f) 
search()

## Scoping
pi
find("pi")
pi <- 10
find("pi")
pi
base::pi
rm(pi)

## Scoping rules

# first, a simple function that does nothing particularly interesting...
# x and y are the formal arguments, z is a local variable
test <- function(x,y) {
  z <- 3
  return(x*y+z)
}
test(2,3) 
# now, rewrite the function, but do not define z in the body
test <- function(x,y) {
  return(x*y+z)
}
test(2,3)
# there is no object z for it to find; for example, there’s no z in our workspace
ls(pattern="^z") character(0)
# ... but if we make z... > z <- 5
test(2,3) 
ls(pattern="^z") 

## Environments

search()
ev <- parent.env(.GlobalEnv)
environmentName(ev)
class(ev)
ev2 <- parent.env(ev)
environmentName(ev2)
ev2
library(MASS)
search()
ev <- parent.env(.GlobalEnv)
environmentName(ev)
