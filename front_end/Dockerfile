#
# This image is based on another image
#
FROM php:5.6-apache

#
# For information: who maintains this Dockerfile?
#
MAINTAINER David Kunzmann

#
# When we create the image, we copy files from the host into
# the image file system. This is NOT a shared folder!
#
#COPY frontendapp /app
#ADD ./frontendapp /app
COPY frontendapp/ /var/www/html/
#
# With RUN, we can execute commands when we create the image. Here,
# we install the PM2 process manager
#
#RUN apt-get install vim