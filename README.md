# LUCE // ライト

### Rethinking physicality

This project was idealised and produced during the course ‘Composing with New Musical Instruments’ at Aalto University in November 2022. 

To begin with, one of my main points was designing an instrument that could be used in different contests with different purposes, focusing on the possible applications. The idea was to re-think the use of a familiar instrument to me, the saxophone, by imagining new ways of performing with this instrument, looking to its physicality with a different perspective. 

The adopted approach was more focused on the realisation of an interface that relies on the saxophone as ‘building surface’ that I could use for multiple purposes (meaning for his different use during a performance).

After few iterations, I was intrigued by the idea of thinking of the instrument *from the inside to the outside*, as the immaterial sound produced that flows to the outside from inside the instrument. The slow move of the keys in the instrument produces slight variations in pitch, change in the timber to some extend, but more relevant is the way the player is required to think of the way he treats the instrument. This slow control can be very hard, since the keys of the instrument itself have some resisting force, and in order to produce a very small variation on the aperture of a certain key, the player has to be even more aware of his body (especially the fingers used to control the behave of a key).

Then, I realised that I could track those movements ‘rethinking’ the immateriality of sound, that flows from the inside to the outside, thanks to the use of light. By placing an led-strip inside the instrument (like is done by the technicians when checking this instrument) is possible to see if a key is ‘leaking’, and for the purpose of this project, is possible to see how much a key is opened/closed. Thus, thanks to the use of LDR sensors (light dependent resistors) is possible to represent with datas this particular events. 

## What was used

The course previously mentioned, has made available [Bela](https://bela.io) boards for the realisation of the  instruments of the participants. This tool was used in order to interprete the analog signals of the sensors inside a programming environment (in this case [Pure Data](http://puredata.info)). In this case, the Bela board and the mentioned programming environment are used in order to retrive the informations from the sensors and send them via [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control) to [Max/MSP](https://cycling74.com/products/max). 

From the more physical side, this first prototype was realised with 8 LDR sensors, each one wired with a cable (the construction which will be explained later) that can be plugged and unplugged to a prefboard with the designed circuit. 

## The construction

The first step, was realising a prototype through the use of a breadboard that could be then translated to a more stable and usable prototype. The resistors used are 10KΩ.

![bread-board.png](LUCE%20%E3%83%A9%E3%82%A4%E3%83%88%208833904e0af543489434f3e6610549f0/bread-board.png)

From this, the realisation of a diagram that helps building a prototype that can be used to perform. 

![circuit_diagram.png](LUCE%20%E3%83%A9%E3%82%A4%E3%83%88%208833904e0af543489434f3e6610549f0/circuit_diagram.png)