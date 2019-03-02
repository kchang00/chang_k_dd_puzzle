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
	For the drop function for each dropzone, check if the zone is empty (if a child doesn't exist). If so, enable drop and append a child (the next piece) to the zone. Else (if the child exists), return to the default values and do not allow drop.

