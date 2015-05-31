#
# This image is based on another image
#
FROM httpd:2.4

# We replace the default configuration file
# this file contains the load balancer configuration
COPY ./conf/000-default.conf /etc/apache2/sites-enabled/

# Here we're installing the openssh-server, apache2, libapache2-mod-proxy-html
# and supervisor (which provides the Supervisor daemon) packages.
RUN apt-get update
RUN apt-get -y install openssh-server apache2 libapache2-mod-proxy-html supervisor

# We're also creating four new directories that are needed to run our SSH daemon and Supervisor.
RUN mkdir -p /var/lock/apache2 /var/run/apache2 /var/run/sshd /var/log/supervisor

# Now let's add a configuration file for Supervisor.
COPY ./conf/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN a2enmod proxy_balancer
RUN a2enmod proxy_http
RUN a2enmod headers

EXPOSE 22 80
CMD ["/usr/bin/supervisord"]








