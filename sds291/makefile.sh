#!/usr/local/bin Rscript

Rscript make.R
rsync -avz --delete ~/sds291/www/ amcnamara@www.science.smith.edu:public_html/sds291/ 
echo "done"