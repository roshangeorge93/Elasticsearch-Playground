# Elasticsearch-Playground

### Install Docker

Mac: https://docs.docker.com/docker-for-mac/install/

Windows: https://docs.docker.com/docker-for-windows/install/

Skip this if you have docker already installed.

### Start Docker

Fork, clone and navigate to this repository.

Execute: `docker-compose up --build -d`

### docker-compose too slow (or hangs) ?
If your docker-compose commands take a lot of time to start or if it hangs, it might be because it tries to ping certain sockets. This problem can be avoided by appending the following lines to `/etc/hosts` file.

Open the registry file: `vi /etc/hosts`

Enter `i` to insert text

Append
```
127.0.0.1 localunixsocket
127.0.0.1 localunixsocket.lan
127.0.0.1 localunixsocket.local
```
to the end of the file (only if these lines are not present anywhere in the file)

Save and Quit: Press `Esc` Type `:wq` Press `Enter`

### Quit Docker

Execute: `docker-compose down --remove-orphans`
