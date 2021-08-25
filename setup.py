import os

from setuptools import setup
from jupyter_packaging import create_cmdclass


DATALAYER_VERSION = '0.0.5'


def get_data_files():
    """Get the data files for the package.
    """
    data_files = [
        ('etc/jupyter/jupyter_server_config.d', 'etc/jupyter/jupyter_server_config.d/', '*.json'),
    ]
    def add_data_files(path):
        for (dirpath, dirnames, filenames) in os.walk(path):
            if filenames:
                paths = [(dirpath, dirpath, filename) for filename in filenames]
                data_files.extend(paths)
    # Add all static and templates folders.
    add_data_files('jupyter_react/static')
    add_data_files('jupyter_react/templates')
    return data_files


cmdclass = create_cmdclass(
    data_files_spec=get_data_files()
)

setup_args = dict(
    name = 'jupyter_react_example',
    version = DATALAYER_VERSION,
    description = 'Jupyter React Example',
    long_description = open('README.md').read(),
    python_requires = '>=3.8',
    install_requires = [
        'nbclassic @ git+https://git@github.com/datalayer-externals/jupyter-notebook-classic@master#egg=nbclassic',
        'jupyter-server @ git+https://git@github.com/datalayer-externals/jupyter-server@multiuser-rbac#egg=multiuser-rbac',
		'jupytery-auth',
        'jupytery-react',
        'pyjwt',
        'requests',
    ],
    extras_require = {
        'test': ['pytest'],
    },
    include_package_data=True,
    cmdclass = cmdclass,
)


if __name__ == '__main__':
    setup(**setup_args)
