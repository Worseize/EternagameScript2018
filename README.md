# EternagameScript2018
## Video manual (playlist) :
   - https://www.youtube.com/watch?v=dYDxDWK1A4U&list=PL7CHTefBrBuj3EMghG_MJ-AuV1Hwmrab6
   
## ![engine image 1D --> 2D](/img/Engine.jpg?raw=true)

## Options:
1. __On all pages__
     - __Save .json File__ => (save into .json , only current state from memory at memoryPosition) __ONLY ONE STATE__ => ( memoryPosition / max ).  
     - __Load .json File__ => __ONLY ONE STATE__ (First object from .json file).
     - __Z | X__ => switch page __BACKWARD | FORWARD__
     - __T | B__ => scale canvas elements __DOWN | UP__
     - __mouseWheel + | -__ => scale canvas elements __DOWN | UP__ 
     - __ESQ__ - go to helpMenu | go to State All page
2. __On page 1 (State all)__
     - __In all modes__
        - __SPACE__ => change mode auto | manual 
        - __SHIFT + W | S__ => move oligo location ( Y - axis ) __UP | DOWN__
            - Choose oligo that you are trying to move in oligo select box before you apply "W" or "S".
            - You could save that options for future and load saved file later it will open your saved memory that stores oligo location on canvas and ofcource data.    
     - __In manual mode__
         - __Shift , Ctrl , Alt__ - have they own memory once you push that key it will remember it (push any other key to reset | forget) 
         - __leftMouseClick on oligo letter +__
             - __Shift__ => to change oligo letter A => U => G => C => E => A
             - __Ctrl__ => to add here "E" 
             - __Alt__ => to remove letter
         - __SHIFT + Q | E__ => move oligo1 to  __LEFT | RIGHT__
         - __SHIFT + A | D__ => move oligo2 to __LEFT | RIGHT__
     - __In auto mode__
         - __V | N__ => change memory position __LOWER | HIGHER__
3. __On page 2 (State 1)__
     - __R | Y__ => move loop to  __LEFT | RIGHT__
     - __F | H__ => move left tail to loop __IN | OUT__
     - __V | N__ => move right tail to loop __IN | OUT__
     - __SHIFT + W | S__ => move whole RNA __UP | DOWN__
     - __SHIFT + A | D__ => move whole RNA __LEFT | RIGHT__

## input letters that allowed : 
- A (Adenine)
- U (Uracil)
- G (Guanine)
- C (Cytosine)
- E (Empty)

### __STATE ALL PAGE 1D ENGINE__  Add oligos into first box , oligos into second box and it calculates rna in state All. Because it does not count energy between oligos and rna it probably not predict rna folding.
   - Made to solve hard tasks eternagame.com

## Currently working on:
   - Shift + Click Events on 2D Engine
   - Add 3rd oligo input (page1)

### Last update:
  - show/hide DOM elements checkBoxes (code improved)

### CODE STRUCTURE:
  - Pages
    - page0 manual page ('Help Menu')
    - page1 1D engine page ('State All')
    - page2 2D engine page ('State 1')
    - page3 pictures ('State 2')

## Have an idea to make it better ? 
   - create issue : https://github.com/Worseize/EternagameScript2018/issues/new 
   - or create .js file and Pull Request

## Author : 
   - Nikita Bogdanov
   - January 2018 --> February 2018 
   - Estonia , Tallinn.