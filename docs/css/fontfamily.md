---
sidebar_position: 9
---

# Font Family

The font-family property is used to specify the font family for the text content of an element. It allows you to define a prioritized list of font families to be used for rendering the text. If the first font is not available, the browser will try the next one in the list, and so on.

## Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
    <style>
      .text {
        font-family: cursive;
      }
    </style>
  </head>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
  </body>
</html>
```
### output : 
<img src="/css/07/output-1.png" alt="chrome" width="550px"/>

## Different Types of Font-Families
 In CSS, there exist five fundamental font families, each with distinct characteristics:

-**Serif Fonts:** These fonts exhibit small strokes at the edges of each letter, evoking a sense of formality and elegance.

- **Sans-serif Fonts:** Characterized by clean lines without small strokes, these fonts convey a modern and minimalistic aesthetic.

- **Monospace Fonts:** In this category, all letters share the same fixed width, creating a mechanical and structured appearance.

- **Cursive Fonts:** Designed to imitate human handwriting, cursive fonts bring a personalized touch to text.

- **Fantasy Fonts:** These decorative and playful fonts add a touch of whimsy and creativity to text.

## Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
    <style>
      .text {
        font-family: serif;
      }
      .text-1 {
        font-family: sans-serif;
      }
      .text-2 {
        font-family: monospace;
      }
      .text-3 {
        font-family: cursive;
      }
      .text-4 {
        font-family: fantasy;
      }
    </style>
  </head>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
    <h1 class="text-1">Font-Family Example</h1>
    <h1 class="text-2">Font-Family Example</h1>
    <h1 class="text-3">Font-Family Example</h1>
    <h1 class="text-4">Font-Family Example</h1>
  </body>
</html>
>
```

### Output :
<img src="/css/07/output-2.png" alt="chrome" width="550px"/>

## Importing Fonts using the Google Fonts

Step 1: `Go to https://fonts.google.com/` else search Google Fonts on web.

<img src="/css/07/output-3.png" alt="chrome" width="550px"/>

Visit the Google Fonts website to explore and select the fonts you want to use.

<img src="/css/07/output-4.png" alt="chrome" width="550px"/>

Step 2: Select the font and click on the import and copy the link and CSS rules.
<img src="/css/07/output-5.png" alt="chrome" width="550px"/>


Step 3: Paste the link into the CSS and use the CSS rule in any division or tag you want to apply the Font to.


## Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Font Style</title>
  </head>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

    .text {
      font-family: "Roboto", sans-serif;
    }
  </style>

  <body>
    <h1>Normal Text</h1>
    <h1 class="text">Font-Family Example</h1>
  </body>
</html>
```

## output :

<img src="/css/07/output-6.png" alt="chrome" width="550px"/>
