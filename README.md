# Flask_React_Webpack_Starter

A boilerplate on vscode


# from 'theProject' directory in a terminal run:-

npm install
# build:dev in /client bundles the js, css, scss and static files to /static/dist
npm run build:dev
# starts webpack dev server for client, this poxies output to flask server
# http:/localhost:5000
npm run start


# in another terminal to start Flask, setup python virtual enviroment:-

python -m venv .venv
# activate it, then:-
pip install -r requirements.txt

python run.py


# eslint can be run globally or added to package.json "devDependecies":-
babel-eslint@10.0.3
eslint@5.16.0
eslint-config-airbnb@18.0.1
eslint-config-prettier@6.1.0
eslint-plugin-html@6.0.0
eslint-plugin-import@2.18.2
eslint-plugin-json@1.4.0
eslint-plugin-jsx-a11y@6.2.3
eslint-plugin-markdown@1.0.0
eslint-plugin-prettier@3.1.0
eslint-plugin-react@7.14.3
eslint-plugin-react-hooks@1.7.0
prettier@1.18.2
