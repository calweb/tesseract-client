# Magic - The Gathering App

GOAL: Create a desktop application that you can play Magic the gathering with your friends.


## entities

- cards (likely not as there are pretty robust api's available for all cards)
- decks
- users
- battlefield
- stats

## tech

Server: nodejs
The architecture of the app will be api driven by a nodejs json api, using token based authentication, potentially with 3rd-party oauth providers (to help drive finding friends that want to play?)

Client(s): electron, ionic, web

I want to first make this an electron application that can be used cross platform.  Using Ionic or another mobile web tech framework, I'd like to use ionic, but maybe not to play, but have a limited featureset.  If down the road, there is a need, then a web application can be deployed which is essentially what the electron app is doing.

- electron
- nodejs
- webrtc
- angularjs or reactjs
- mongodb
- express
- socketio

## features


- users can CRUD their profile
- win/loss on user profile

### Card Search

users can find cards by:

| Name        | Type           | Description  |
| ------------- |:-------------:| ----- |
| type      | []string | Any valid card type. |
| subtype      | []string      |   Any valid card subtype. Possible values include zombie and tribal. |
| supertype | []string      |    Any valid card supertype, such as legendary |
| name | []string | A fuzzy match on a card's name |
| oracle | []string | A fuzzy match on a card's Oracle rules text |
| rarity | []string | Select cards printed at this rarity. Options are common, uncommon, rare, and mythic |
| set | []string | A three letter identifier for a Magic set |
| color | []string | Select cards of the chosen color |
| multicolor | bool | Only show cards that are multicolored. |
| multiverseid | []string | Select cards of that have at least one edition with the given Multiverse ID |
| format | []string | Only show cards allowed in a specific format. Legal values are vintage, legacy, modern, standard, and commander |
| status | []string | Only show careds with the given status. Legal values are legal, banned, or restricted |


### Deckbuilder

- users can CRUD decks using any card
- users can check manna curve for current deck
- users can playtest their deck in an artificial environment
- down the road it may be cool to check pricing for cards

### Game play

- users should be able to video conference during gameplay
- users can look at opponents stats
- users can look at opponent decks (except current used during gameplay)
- users can chat with each other during game via chatting mechanism
