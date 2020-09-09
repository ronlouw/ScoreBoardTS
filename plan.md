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
- [ ] meegeven aan Player als prop
- [ ] knopje maken in Player
- [ ] wanneer er op geclickt wordt -> incrementScore aanroepen
- [ ] logica schrijven om de juiste speler een punt to geven
- [ ] setPlayers met de nieuwe state (iemand heeft een punt gekregen)
