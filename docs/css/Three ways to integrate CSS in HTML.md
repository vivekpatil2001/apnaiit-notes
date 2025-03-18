---
sidebar_position: 2
---

# Three ways to integrate CSS in HTML

## Implementing CSS:

CSS can be implemented by three ways:

1.**Inline CSS** : Inline CSS is applied directly to HTML elements using the style attribute. It allows you to apply CSS styles to individual HTML tags.

code:
```
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
  </head>
  <body>
    <h2 style="color:tomato; font-size:20px;">Wow. CSS is beautiful</h2>
  </body>
</html>
```

### Output :

<img src="/css/02/01_image.png" alt="chrome" width="1050px"/>



2. **Document CSS** : Document CSS is embedded within the HTML document using the `<style>`tag. It is placed in the `<head>`section of the HTML document.

```
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <style>
      h2 {
        color: tomato;
        background-color: grey;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <h2>document CSS</h2>
  </body>
</html>
```

<img src="/css/02/02_image.png" alt="chrome" width="1050px"/>


3.**External CSS** : External CSS is stored in a separate CSS file and linked to the HTML document using the `<link>` element. The CSS file is saved with a .css extension

Code :

### File Name : index.html

```
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2>WOW. CSS is beautiful</h2>
  </body>
</html>
```

## File Name : style.css

```
h2 {
  color: tomato;
  background-color: "aqumarine";
}
```

### Output : 
<img src="/css/02/03_image.png" alt="chrome" width="1050px"/>

#### In the above example, the CSS styles are defined in the style.css file and linked to the HTML document using the `<link>` element.


<img src="/css/02/04_image.png" alt="chrome" width="1550px"/>




