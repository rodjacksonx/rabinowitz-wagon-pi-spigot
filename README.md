# rabinowitz-wagon-pi-spigot

A JavaScript implementation of the 1995 Rabinowitz-Wagon Pi spigot algorithm, written for clarity over efficiency

This code provides a single function, generatePi(), that takes an integer number, and returns an array of integers, each being a digit of pi. For example:

    console.log(generatePi(2))

will display:

    [ 3, 1, 4 ]

This algorithm has the advantage of not requiring floating point numbers or big integers, but the disadvantage of requiring we set aside upfront storage space proportional to the number of digits being asked for.

The code was written based on both the Rabinowitz-Wagon paper describing the algorithm:

    https://www.stanleyrabinowitz.com/bilbiography/spigot.pdf
    https://www.cs.williams.edu/~heeringa/classes/cs135/s15/readings/spigot.pdf

and an excellent secondary description of how the algorithm works from this older (but as of 2025, still safe) website here:

    https://pi314.net/eng/goutte.php

Further mathematical analysis of the algorithm, its mathematical foundation and a few (rather compact) coded implementations can be found here:

    https://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/spigot.pdf
