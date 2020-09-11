## Probleem:

- State van de players wordt bijgehouden in Scorebord
- Player (een child component) moet de state van zijn parent updaten
- Maar een Player component heeft geen toegang tot de `setter` -> setPlayers

## Oplossing

- We definieren een functie in Scorebord
- Die functie heeft wél toegang to de `setter` setPlayers
- We geven die functie mee aan het Player component (als een prop)
- Nu kan het Player component tóch de state van de parent veranderen

## Todo:

- [x] functie maken in Scoreboard (incrementScore)
- [x] meegeven aan Player als prop
- [x] knopje maken in Player
- [x] wanneer er op geclickt wordt -> incrementScore aanroepen
- [x] logica schrijven om de juiste speler een punt to geven
- [x] setPlayers met de nieuwe state (iemand heeft een punt gekregen)

## Feature Request: add a Player

- Speler toevoegen
- Apart component maken met een formuliertje
- Probleem: we hebben de setter niet: setPlayers
- Callback prop

## Todo

- [x] Markup, input etc.. -> JSX
- [x] wat typt de gebruiker? wat is de input -> useState
- [x] event listeners & handlers
- [] callback prop maken: addPlayer
- [] onSubmit -> callback prop addPlayer aanroepen -> naam
- [] logica schrijven om de speler toe te voegen

## Feature Request: We want to keep track of multiple matches

- [x] Entity -> TTournament, TMatch ->
- [x] Component -> Tournament
- [x] State in Tournament component
- [x] Verschillende scoreboard weergeven
- [] Callback props incrementScore & addPlayer aanpassen

```
[{
    matchId: number,
    players: [{ id: number, name: string, score: number}]
},
{
    matchId: number,
    players: [{ id: number, name: string, score: number}]
}
]
```

## We want to use Redux so we can rid of callback props!

- [] Setup
  - Create a Store
    - `rootReducer` -> alle reducers, samengevoegd
    - reducer voor een deel van de state (Matches)
    - Redux Devtools installeren
    - optioneel: middlewares
  - App `wrappen` in een Provider component
- Testen: doen devtools
