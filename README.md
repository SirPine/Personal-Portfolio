This website holds all my projects, awards, resume, and more.


How I tested it on LAN to view on my phone. 

In terminal:
* This grants [port] access *
sudo ufw allow [port]

* Displays all the opened ports *
sudo ufw status numbered

* Revokes access from port using index
sudo ufw delete [x]

* Gets IPv4 such as 192.168.xx.xx
hostname -I

Now run server on [port] and on other device go to 192.168.xx.xx:[port]
