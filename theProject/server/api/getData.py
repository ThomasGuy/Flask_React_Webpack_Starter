import requests
from flask import jsonify

url = 'https://api-pub.bitfinex.com/v2/tickers?'\
        'symbols=tBTCUSD,tLTCUSD,tETHUSD,tXRPUSD'


data = {}

def getData():
    response = requests.get(url)
    for ticker in response.json():
        data[ticker[0][1:4]] = ticker[1]
    print(data)
    return jsonify(data)


if __name__ == "__main__":
    getData()
