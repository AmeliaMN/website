library(broom)
mod_avg <- RailTrail %>%
  lm(volume ~ 1, data = .) %>%
  augment(RailTrail)
mod_temp <- RailTrail %>%
  lm(volume ~ hightemp, data = .) %>%
  augment(RailTrail)
mod_data <- bind_rows(mod_avg, mod_temp) %>%
  mutate(model = rep(c("null", "slr"), each = nrow(RailTrail)))
ggplot(data = mod_data, aes(x = hightemp, y = volume)) + 
  geom_smooth(data = filter(mod_data, model == "null"), 
              method = "lm", se = 0, formula = y ~ 1, 
              color = "dodgerblue", size = 0.5) + 
  geom_smooth(data = filter(mod_data, model == "slr"),
              method = "lm", se = 0, formula = y ~ x, 
              color = "dodgerblue", size = 0.5) + 
  geom_segment(aes(xend = hightemp, yend = .fitted), 
               arrow = arrow(length = unit(0.1,"cm")), 
               size = 0.5, color = "darkgray") + 
  geom_point(color = "dodgerblue") + 
  facet_wrap(~model)