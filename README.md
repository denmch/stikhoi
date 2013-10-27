STIKHOI
=======

This is my working standard for marking up verse through ordered lists in HTML using CSS. Special thanks go to Alun Salt for sharing my Google+ post on the subject and Markos Giannopoulos for responding to Alun’s share with a very helpful tip about using nth-child selectors to simplify the markup.

It occurred to me that there should be a way to display verse on the web with conventional line numbers (i.e., every fifth line), as in print, without excessive markup and without resorting to tables. We accomplish this through ordered lists by suppressing the line numbers, designating the the starting number of the verse selection, and telling the browser which pattern to use (based on the starting number) to reveal only the line numbers we want.

    <ol start="9" class="vrs s49">
      <li>gentibus invisis Latium praebere cruorem?</li>
      <li>cumque superba foret Babylon spolianda tropaeis</li>
      <li>Ausoniis umbraque erraret Crassus inulta</li>
      <li>bella geri placuit nullos habitura triumphos?</li>
    </ol>

Lucan 1.9—12.

In this example, the list will begin with the ninth line of the poem, but will only number line 10. The class `.vrs` indicates a piece of verse, and the class `.s49` means that "the starting line ends with a 4 or a 9." The stylesheet tells the browser to number the appropriate lines.

We can also indent lines, if needed, with another class.
