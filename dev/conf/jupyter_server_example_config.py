import os
import json
import requests


#################
# Network
#################

c.ServerApp.ip = '0.0.0.0'
c.ServerApp.port = 8686

#################
# Browser
#################

c.ServerApp.open_browser = False

#################
# Authentication
#################

c.ServerApp.token = '60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6'

# from jupyter_auth.authentication import github
# c.ServerApp.login_handler_class = github.LoginHandler

c.ServerApp.allow_origin = '*'

#################
# Authorization
#################

from jupyter_server.services.auth.manager import AuthorizationManager

class AuthorizationManagerExample(AuthorizationManager):
    def is_authorized(self, handler, subject, action, resource):
        return True

c.ServerApp.authorization_manager_class = AuthorizationManagerExample

#################
# Server Extensions
#################

c.ServerApp.jpserver_extensions = {
    'jupyter_auth': True,
    'jupyterlab': True,
    'jupyter_react': True,
}

#################
# Content
#################

c.ServerApp.root_dir = os.path.dirname(os.path.realpath(__file__)) + '/../notebooks'

#################
# URLs
#################

c.ServerApp.base_url = '/example'
c.ServerApp.default_url = '/example/'

#################
# JupyterLab
#################

c.LabApp.collaborative = True
