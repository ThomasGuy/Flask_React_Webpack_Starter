import logging
from . import Client
from ..events import sockio, emit

log = logging.getLogger(__name__)
bfx = Client(
    logLevel='INFO'
)

symbols = ['tBTCUSD', 'tLTCUSD', 'tETHUSD', 'tXRPUSD',
           'tNEOUSD', 'tEOSUSD', 'tBSVUSD', 'tIOTUSD']


@bfx.ws.on('error')
def log_error(err):
    log.error("Error: {}".format(err))


@bfx.ws.on('subscribed')
def log_subscription(sub):
    log.info("New subscription: {} {} id:{}".format(
        sub.channel_name, sub.symbol, sub.chan_id))


@bfx.ws.on('all')
def bfxws_data_handler(data):
    if type(data) is list:
        dataEvent = data[1]
        chan_id = data[0]

        if type(dataEvent) is not str and bfx.ws.subscriptionManager.is_subscribed(chan_id):
            subscription = bfx.ws.subscriptionManager.get(chan_id)
            if subscription.channel_name == 'ticker':
                sockio.emit('event', {'symbol': subscription.symbol,
                                      'data': dataEvent})
                log.debug(f'ticker: {subscription.symbol}')
    else:
        log.info(f'Bitfinex: {data}')


async def start():
    for symbol in symbols:
        await bfx.ws.subscribe('ticker', symbol)
    # await bfx.ws.subscribe('candles', 'tBTCUSD', timeframe='1D')

bfx.ws.on('connected', start)
bfx.ws.run()
