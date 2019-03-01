# D & D Puzzle

Debugging a drag and drop puzzle game.
<hr>

</p>

## Built With: 

```
- HTML and CSS
- JavaScript for the drag and drop functions
```
## :space_invader: Bug Fixes :space_invader:
###Problem:
	Multiple pieces can be dropped into one zone. This breaks the game.
###Fix:
	For the drop function for each dropzone, check if the zone has a child (a previous piece). If so, reinstate the default. Else, append the child (the next piece) to the zone.

