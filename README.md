# Profiles REST API

REST API providing basic functionality for managing user profiles.

- Python
- Django
- DRF
- Vagrant/Virtualbox running ubuntu/xenial
- React Frontend

## Setting up Development Environment

Need git, virtualbox and vagrant installed on host machine

```
$ git clone repository profiles-api
```

```
$ cd profiles-api
```

```
$ vagrant up
```

> Might get an error about matching UID
> edit /.vagrant/machinbes.default/virtualbox/creator_uid
> change to "Your UID is:" and rerun vagrant up

```
$ vagrant ssh
```

> Might get an error -bash: /usr/local/bin/virtualenvwrapper.sh: No such file
> to fix run

```
$ vagrant provision
```

```
$ vagrant ssh
```
 
```
$ mkvirtualenv profiles_api --python=python3
```

> deactive to exit wrapper,  workon env_name to activate

```
$ pip install django==1.11 
```

```
$ pip install djangorestframework==3.6.2
```

```
$ cd /vagrant/src/profiles_project
```

```
$ python manage.py runserver 0.0.0.0:8080
```