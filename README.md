JS:

1. Build a function that takes a word and coverts to an object where the keys are the letters and the values is an array of the indices of the letter in the word. Ex: For the word 'balloon' the object would look like:
{ b: [0],
  a: [1],
  l: [2,3],
  o: [4,5],
  n: [6]
 }

2. Build function that returns true if an input letter is in an input string and false if not
ex: my_function('a', 'balloon') returns true, my_function('x', 'balloon') returns false. Extra credit: ternary operator

3. Build a function that takes a string and returns false if the string is:
  more than one character,
  less than one character
  a number,
  extra credit: punctuation

4. Build a function that takes a word and generates one div (in string form) for each letter in the word. Inside each div is an underscore with spaces around it -- " _ ". EX: my_function('cat') returns `"<div> _ </div><div> _ </div><div> _ </div>"`



HTML

Goal -- Make a page that looks like this![layout](http://i.imgur.com/hrXTtXc.png)

1. Go [here](http://getbootstrap.com/getting-started/) to the example section and find the layout that looks the most like the image above.
2. Click on the appropriate example and view source. Copy and paste all of the html from the source and paste it into your html file.
3. Open your html file in a browser. Not what was promised, eh?
3. Download a copy of boostrap css, move the css file to your project directory, and point the css style tag (in html) to your css file. 
4. Open the html file in the browser again. If your page looks different, you've found your bootstrap css. If it doesn't, keep trying.
5. If it looks different but not exactly like the bootstrap template, notice that there's another file linked called `jumbotron-narrow.css"`. Find that from the bootstrap template view-source page and copy that into your own `jumbotron-narrow.css` file. 
6. Check out the components page of bootstrap and check out all the awesome stuff. Labels and buttons were used on this page. Make them look like the above screenshot.

HTML + JS
//IN PROGRESS
2. add event handler to button that pops up alert
3. print value of text field to alert
6. If the input is invalid, print a message to the screen saying so
7. if the input is valid, add it to a list of guessed letters
8. display the list of guessed letters on the page
