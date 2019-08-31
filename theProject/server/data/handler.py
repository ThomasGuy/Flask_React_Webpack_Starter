from theProject.server.api.getData import getData
from . import bp

@bp.route('/api/data')
def send():
    return getData()
