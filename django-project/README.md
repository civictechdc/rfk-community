# Instructions for Launching the Project


## These instructions are a WIP; they should become considerably easier after we Dockerize this application. Steps 0 through 3 need only be done. Steps 4 through 


## Required Tools 

1. Postgresql
2. Python 3.5+ 
3. Git


### 1. Clone the repository

1. From the comand line run `git clone git@github.com:codefordc/rfk-community.git`. You can also use the web interface / client application.


### 2. Create Database

From the `.../django-project` directory
1. Open Postgres in the terminal by entering `psql`
2. Run `CREATE USER sample_user WITH PASSWORD 'sample_password';`
3. Run `CREATE DATABASE rfk_community WITH OWNER sample_user;`

### 3. Update `django-project/settings.py` with your database user

1. Go to `django-project/settings.py` and look for the python Dictioonary named "DATABASES". Swap in in the username & password you created in step 2 for 'SAMPLE_USERNAME' and 'SAMPLE_PASSWORD' 
DATABASES = {
    'default': {
      ...
        'USER': 'SAMPLE_USERNAME',
        'PASSWORD':'SAMPLE_PASSWORD',
      ...
    }
}

### 3. Activate virtualenv

1. Navigate to the `django-project` directory (AKA 'folder'). It should contain a file titled `Pipfile`. 
2. Run `pipenv install` into the command line. This will install all dependencies -- such as Django itself -- needed for this project in to your local environment.
3. Run `pipenv shell` to spawn a shell in the virtualenv

### 4. Run Migrations
1. Run `cd rfk_community` to navigate to the application directory

2. `python manage.py makemigrations` to create migrations (SQL commands for database)

3. `python manage.py migrate` to execute the SQL from #5 

### 5. Create Superuser
1. `python manage.py createsuperuser` and follow prompts 

### 6. Start server and open browser

1. `python manage.py runserver`. You should see text noting the launch of a "development server."

2. Open a webrowser and navigate to http://127.0.0.1:8000/ (i.e., localhost). If you see a welcome page, everything works! Feel free to explore the code and make changes. Then refresh the page and see the changes in action. Have fun!
