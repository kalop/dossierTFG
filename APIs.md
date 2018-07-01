# Test de les apis: sia.js, node-sia.js i sia-api.js
```
'GET', '/explorer/blocks/149224'

```
Permet explorar els blocks de la blockchain però es troba en fase de desenvolupament

28 de març de 2018, DavidVorick:

 https://github.com/NebulousLabs/Sia/issues/2442

 From what we can tell, this happens if the consensus change internals of siad hiccup. If you delete the explorer database and let it resync, it should fix the issue.

And, I want to give a gentle reminder that no part of the explorer has been finalized - the api is considered unstable, and is likely to be overhauled at some point.

### Explorer.siahub.info
Obtenir json dels blocks:
```
 curl --request GET --url https://explorer.siahub.info/api/block/149224
```
