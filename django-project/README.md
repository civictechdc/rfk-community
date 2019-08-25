# Instructions for Launching the Django Starter Project

## These instructions are a WIP; they should become considerably easier after we Dockerize this application. Steps 0 through 3 need only be done. Steps 4 through 

0. Ensure that Python 3.5+ is installed on your machine. You can find the latest version of Python (currently 3.7.4) at [Python.org](https://www.python.org/downloads/). To check your current version type `python --version` in to your command line. Not sure what the command line is? [Now you do.](https://tutorial.djangogirls.org/en/intro_to_command_line/)

1. Install Pipenv. Pipenv is a new packaging tool that combines elements of pip, virtualenv, and requirements.txt, but simplifies all of them. It's used both to install new Python packages and to manage environments. You can read more about it [here] (https://realpython.com/pipenv-guide/) or in the official [Pipenv docs](https://docs.pipenv.org/en/latest/basics/) To install pipenv if you don't already have it, type `pip install pipenv`.

2. Clone this github repository.

3. Navigate to the `django-project` directory (AKA 'folder'). It should contain a file titled `Pipfile`. Type `pipenv install` into the command line. This will install all dependencies -- such as Django itself -- needed for this project in to your local environment.

4. If all dependencies are already installed, make sure you're within the `django-project` directory and type `pipenv shell`.

5. Navigate to `...\django-project\rfk_community`. You should see a file titled `manage.py`. Type `python manage.py runserver`. You should see text noting the launch of a "development server."

6. Open a webrowser and navigate to http://127.0.0.1:8000/ (i.e., localhost). If you see a welcome page, everything works! Feel free to explore the code and make changes. Then refresh the page and see the changes in action. Have fun!
