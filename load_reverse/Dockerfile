
#
# This image is based on another image
#
FROM httpd:2.4

#
# When we create the image, we copy files from the host into
# the image file system. This is NOT a shared folder!
#
ADD ./conf/reverseproxy.conf /usr/local/apache2/sites-enabled/000-default.conf
COPY ./src/ /usr/local/apache2/htdocs/

#CMD  cat ./conf/reverseproxy.conf >> /conf/httpd.conf




RUN apt-get update && apt-get install libapache2-mod-proxy-html && apt-get install a2enmod && apt-get install mod_proxy

RUN service apache2 restart