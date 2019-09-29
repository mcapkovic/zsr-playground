export async function getTrains() {
    const url = "http://mapa.zsr.sk/json.rpc";
    const response = await fetch("/json.rpc", {
      body: '{"jsonrpc":"2.0","method":"GetTrainDelaySimple","params":[],"id":1}',
      method: "POST"
    }).catch(() =>
      console.log("Can’t access " + url + " response. Blocked by browser?")
    );
    const myJson = await response.json();
    return myJson;
  }