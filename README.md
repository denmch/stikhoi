# STIKHOI
=======

This is my working standard for marking up verse through ordered lists in HTML using CSS. Special thanks go to Alun Salt for sharing my Google+ post on the subject and Markos Giannopoulos for responding to Alun’s share with a very helpful tip about using nth-child selectors to simplify the markup. It's since undergone a major overhaul.

## Prior version

It occurred to me that there should be a way to display verse on the web with conventional line numbers (i.e., every fifth line), as in print, without excessive markup and without resorting to tables. I accomplished this through ordered lists by suppressing the line numbers, designating the the starting number of the verse selection, and telling the browser which pattern to use (based on the starting number) to reveal only the line numbers needed.

    <ol start="9" class="vrs s49">
      <li>gentibus invisis Latium praebere cruorem?</li>
      <li>cumque superba foret Babylon spolianda tropaeis</li>
      <li>Ausoniis umbraque erraret Crassus inulta</li>
      <li>bella geri placuit nullos habitura triumphos?</li>
    </ol>

Lucan 1.9–12.

In this example, the list began with the ninth line of the poem, but would only number line 10. The class `.vrs` indicated a piece of verse, and the class `.s49` meant that "the starting line ends with a 4 or a 9." The CSS told the browser to number the appropriate lines.

We could also indent lines, if needed, with another class.

## New version

The name STIKHOI comes from the Greek for "lines," as in lines of verse. Numbering is facilitated through nth-child selectors and counters.

**Notes:**

- Verse is presented in a block of 30 ems, which is scalable and should be sufficient for long lines.</li>
- You need two two three classes on the block: <code>.verse</code>, the number name of the last digit of the preceding line (e.g., if the verse is quote from line 1, the class is <code>.zero</code>, and if it's 99, then the class is <code>.eight</code>.</li>
- The counter-reset must be declared inline on the block, e.g.,<br /> <code>&#8249;blockquote class="verse five" style="counter-reset: line-prior 15"&#8250;</code>.</li>
- If even lines should be indented (e.g., in elegiacs), add a third class: <code>.couplets</code>.</li>

## Examples from Greek and Latin verse

### Vergil, *Aeneid* 6.847&#8211;54

This snippet demonstrates hexameters beginning with line 847:

    <blockquote class="verse six" style="counter-reset: line-prior 846">
      <p>excudent alii spirantia mollius aera</p>
      <p>(credo equidem), uiuos ducent de marmore uultus,</p>
      <p>orabunt causas melius, caelique meatus</p>
      <p>describent radio et surgentia sidera dicent:</p>
      <p>tu regere imperio populos, Romane, memento</p>
      <p>(hae tibi erunt artes), pacique imponere morem,</p>
      <p>parcere subiectis et debellare superbos.'</p>
    </blockquote>

### A.E. Housman, SODALI MEO

This bit of verse demonstrates elegiac couplets beginning with line 14:

    <blockquote class="verse three couplets" style="counter-reset: line-prior 13">
      <p>scriptoris nomen vix tenuere sui.</p>
      <p>non ego mortalem vexantia sidera sortem</p>
      <p>aeternosve tuli sollicitare deos,</p>
      <p>sed cito casurae tactus virtutis amore</p>
      <p>humana volui quaerere nomen ope,</p>
      <p>virque virum legi fortemque brevemque sodalem</p>
      <p>qui titulus libro vellet inesse meo.</p>
      <p>o victure meis dicam periturene chartis,</p>
      <p>nomine sed certe vivere digne tuo,</p>
      <p>haec tibi ad auroram surgentia signa secuto</p>
      <p>hesperia trado munera missa plaga.</p>
      <p>en cape: nos populo venit inlatura perempto</p>
      <p>ossa solo quae det dissoluenda dies</p>
      <p>fataque sortitas non immortalia mentes</p>
      <p>et non aeterni vincla sodalicii.</p>
    </blockquote>

### Homer, *Odyssey* 20.492&#8211;501

And here we have a bit of Greek:

    <blockquote class="verse one" style="counter-reset: line-prior 491">
        <p>ὣς ἔφατ᾽, οὐδ᾽ ἀπίθησε φίλη τροφὸς Εὐρύκλεια,</p>
        <p>ἤνεικεν δ᾽ ἄρα πῦρ καὶ θήϊον· αὐτὰρ Ὀδυσσεὺς</p>
        <p>εὖ διεθείωσεν μέγαρον καὶ δῶμα καὶ αὐλήν.</p>
        <p>γρηῢς δ᾽ αὖτ᾽ ἀπέβη διὰ δώματα κάλ᾽ Ὀδυσῆος</p>
        <p>ἀγγελέουσα γυναιξὶ καὶ ὀτρυνέουσα νέεσθαι·</p>
        <p>αἱ δ᾽ ἴσαν ἐκ μεγάροιο δάος μετὰ χερσὶν ἔχουσαι.</p>
        <p>αἱ μὲν ἄρ᾽ ἀμφεχέοντο καὶ ἠσπάζοντ᾽ Ὀδυσῆα,</p>
        <p>καὶ κύνεον ἀγαπαξόμεναι κεφαλήν τε καὶ ὤμους</p>
        <p>χεῖράς τ᾽ αἰνύμεναι· τὸν δὲ γλυκὺς ἵμερος ἥιρει</p>
        <p>κλαυθμοῦ καὶ στοναχῆς, γίγνωσκε δ᾽ ἄρα φρεσὶ πάσας.</p>
    </blockquote>