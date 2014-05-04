# STIKHOI
=======

This is my working standard for marking up verse through HTML and CSS (and optionally jQuery).

## Overview

This is a method for rendering Greek and Latin verse on the web, designed from the perspective of progressive enhancement.

 - The HTML employs ordered lists with a start number to render verse snippets accessibly while retaining proper line numbers.
 - The CSS suppresses line numbers that aren't needed and indents lines appropriately depending on the meter.
 - The JavaScript makes use of jQuery to fetch the start number of the ordered list and then manipulate it and assign the result to a CSS counter that replaces OL numbering with more attractive and customizable line numbers.

If, for any reason, either JavaScript or CSS doesn't load, the presentation of the poetry will degrade gracefully to reveal the semantic markup, which retains proper line numbering.

It occurred to me that there should be a way to display verse on the web with conventional line numbers (i.e., every fifth line), as in print, without excessive markup and without resorting to tables. The best and most accessible tack would seem to be to use an ordered list with an explicit start attribute (since classical verse is often quoted in part rather than in full), and to selectively reveal line numbers through CSS.

Unfortunately, the available styles for ordered list numbering include periods that can not be surpressed. Using CSS counters instead makes the verse less accessible and more cumbersome to maintain as counters are zero-based. When quoting a poem from, say, line 451, it's much simpler to type `start="451"` than to have each potential editor remember the name of the counter, the syntax for applying the style, and the fact that counters are zero-based and so require you to use the preceding line number (e.g., `style="counter-reset: poem 450"`).

## Examples:

Poems that have no special indentation features simply take the class `.verse`. If quoted from anywhere other than line 1, add the starting line with the `start` attribute.

### &#8212;Lucan, <cite>Bellum Civile</cite> 1. 9&#8211;12

    <ol class="verse" start="9">
        <li>gentibus invisis Latium praebere cruorem?</li>
        <li>cumque superba foret Babylon spolianda tropaeis</li>
        <li>Ausoniis umbraque erraret Crassus inulta</li>
        <li>bella geri placuit nullos habitura triumphos?</li>
    </ol>

### &#8212;Vergil, <cite>Aeneid</cite> 6. 845&#8211;50

    <ol class="verse" start="845" lang="la">
        <li>quo fessum rapitis, Fabii? Tu Maxumus ille es,</li>
        <li>unus qui nobis cunctando restituis rem.</li>
        <li>Excudent alii spirantia mollius aera,</li>
        <li>credo equidem, vivos ducent de marmore voltus,</li>
        <li>orabunt causas melius, caelique meatus</li>
        <li>describent radio, et surgentia sidera dicent:</li>
    </ol>

## Indentation

### A.E. Housman, SODALI MEO

This bit of verse demonstrates elegiac couplets beginning with line 14:

    <ol class="verse couplets" start="14">
      <li>scriptoris nomen vix tenuere sui.</li>
      <li>non ego mortalem vexantia sidera sortem</li>
      <li>aeternosve tuli sollicitare deos,</li>
      <li>sed cito casurae tactus virtutis amore</li>
      <li>humana volui quaerere nomen ope,</li>
      <li>virque virum legi fortemque brevemque sodalem</li>
      <li>qui titulus libro vellet inesse meo.</li>
      <li>o victure meis dicam periturene chartis,</li>
      <li>nomine sed certe vivere digne tuo,</li>
      <li>haec tibi ad auroram surgentia signa secuto</li>
      <li>hesperia trado munera missa plaga.</li>
      <li>en cape: nos populo venit inlatura perempto</li>
      <li>ossa solo quae det dissoluenda dies</li>
      <li>fataque sortitas non immortalia mentes</li>
      <li>et non aeterni vincla sodalicii.</li>
    </ol>

Other indentation patterns can be accomplished with additional classes. For example, in a poem arranged in strophes of four lines each and indented on every third as well as fourth line, the class `.indent-3-4` covers the indentation.

It's convenient to assign letters to the lines in the strophe pattern, so that a four-line strophe would have A, B, C, and D lines per strophe. The last class necessary to coordinate the various patterns of line numbers and indentations would be `.from-B`, `.from-C`, or `.from-D`, to specify the line within the pattern from which the quotation begins.

      <ol class="verse from-B indent-3-4" start="14" lang="la">
        <li>quem fors dierum cumque dabit, lucro</li>
        <li>adpone nec dulcis amores</li>
        <li>sperne, puer, neque tu choreas,</li>
        <li>donec uirenti canities abest</li>
        <li>morosa. Nunc et Campus et areae</li>
        <li>lenesque sub noctem susurri</li>
        <li>composita repetantur hora,</li>
        <li>nunc et latentis proditor intumo</li>
        <li>gratus puellae risus ab angulo</li>
        <li>pignusque dereptum lacertis</li>
        <li>aut digito male pertinaci.</li>
      </ol>

<p data-height="268" data-theme-id="0" data-slug-hash="acEIA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/denmch/pen/acEIA/'>STIKHOI</a> by Den McHenry (<a href='http://codepen.io/denmch'>@denmch</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
