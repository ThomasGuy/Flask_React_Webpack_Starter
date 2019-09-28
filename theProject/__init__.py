
from pathlib import Path
import logging

path = Path().cwd() / 'logs' / 'logs.log'

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M',
                    filename=path,
                    filemode='w')
