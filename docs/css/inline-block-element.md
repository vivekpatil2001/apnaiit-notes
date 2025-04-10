---
sidebar_position: 10
---

# Inline,Block and Inline-Block Elements 

  ## Display Properties:
The display property in CSS is used to control the layout and behavior of elements. There are three commonly used display properties: inline, block, and inline-block. Let's explore each of these display properties in detail.

## Inline Elements
Inline elements have the following characteristics:

They do not start from a new line i.e. they starts from the same line.
The height and width properties cannot be applied to inline elements.
Inline elements only occupy the space required for their content.
Some examples of inline elements include `<span>`, `<a>`, `<b>`, `<i>`,` <sub>`, `<sup>`, and `<label>`.

`<button>` & `<img>` button and image starts from same line it can not start from new line. They takes only required space, but we can set height and width to them. That's the reason button and image are not an inline-element.

### Example :

In the given example, the `<span>` elements with the class name rtc are inline elements. They are displayed on the same line and only take up the necessary space for their content. Since the height and width properties are applied to the .rtc class, the background color is visible, but it doesn't affect the layout.

### Code:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>inline-element</title>
    <style>
      .apna {
        background-color: aquamarine;
        height: 100px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <span class="apna">apna</span>
    <span class="apna">IIT</span>
    <span class="apna">Online Classroom program</span>
  </body>
</html>
```

Output:
<img src="/css/09/1_image.png" alt="chrome" width="550px"/>

### Example :

In the given example, the img have the class names google and instagram but there is no attribute given to it. They are displayed on the same line and only take up the necessary space for their content as no height and width applied is to it.


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline-Block</title>
  </head>
  <body>
    <img src="google.svg.png" class="google" />
    <img src="instagram.png" class="instagram" />
  </body>
</html>
```

### Output : 
<img src="/css/09/2_image.png" alt="chrome" width="550px"/>

Here, we applied the height and width attribute to both the images and it effects on the size of the images so the image tag is not an inline-element.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inline-Block</title>
    <style>
      .google {
        height: 100px;
        width: 200px;
      }
      .instagram {
        height: 200px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <img src="google.svg.png" class="google" />
    <img src="instagram.png" class="instagram" />
  </body>
</html>
```
## OUTPUT
<img src="/css/09/3_image.png" alt="chrome" width="550px"/>

## Block Elements
Block elements exhibit the following characteristics:

They always start from a new line.
Block elements occupy the full available horizontal space.
The height and width properties can be assigned to block elements.
Here are some of the block elements: `<div>`, `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>` and `<li>`.

Example :

In the given example, the `<div>` elements with the classes container and box are block elements. They start from new lines, occupy the full width available within their parent container, and the height and width properties affect their layout.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>block element</title>
    <style>
.container{
    background-color: yellow;
    width: 500px;
    height: 100px;
}
.box{
   background-color: red;
   width: 200px;
   height: 100px;
}
body{
    margin: 0;
}
    </style>
</head>
<body>
    <div class="container">
        Hi, I am learning css from road to code.
    </p>
    <div class="box">
      Hello, I am a web developer.
    </div>
</body>
</html>
```

## Output :
<img src="/css/09/4_image.png" alt="chrome" width="550px"/>

## Inline-Block Elements
Elements with the display property set to inline-block exhibit the combined behavior of inline and block elements. They possess the following characteristics:

Inline-block elements do not start from a new line i.e. they starts from the same line.
The height and width properties can be assigned to inline-block elements.
Inline-block elements occupy the required space based on their content.
Some inline-block elements are `<button>`, `<input>` and `<img>`.

In the given example, the `<div>` elements with the classes a and b have the display property set to inline-block. They are displayed on the same line, can have specific height and width values assigned, and only occupy the necessary space required by their content.

## Example :

Code
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <style>
    .a {
      background-color: red;
    }

    .b {
      background-color: aquamarine;
    }

    .c {
      background-color: brown;
      color: white;
    }

    .card {
      height: 80px;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      display: inline-block;
      width: 150px;
    }
  </style>

  <body>
    <div class="a card">This is a card</div>
    <div class="b card">This is b card</div>
    <div class="c card">This is c card</div>
  </body>
</html>
```

## OUTPUT :
<img src="/css/09/5_image.png" alt="chrome" width="550px"/>

## Change Display Property of Elements
We can change the display property of elements using CSS to alter their behavior. For instance, we can change the display property of a `<span>`element to block using CSS as shown in the following code:

Syntax
```
span {
  display: block;
}
```

In the example below, the `<span>` elements with the class info have the display property set to block. As a result, they are displayed as block elements, starting from a new line, and the height property can be assigned to them.

### Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      .info {
        background-color: aquamarine;
        margin: 5px;
        display: block;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <span class="info"> This is span tag. </span>

    <span class="info"> This is second span tag. </span>
  </body>
</html>
```

### Output :
<img src="/css/09/6_image.png" alt="chrome" width="550px"/>

Similarly, we can change the display property of a `<div>` element to inline-block using CSS:
```
div {
  display: inline-block;
}
```

### Example :

## Code

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>diplay</title>
    <style>
      .a {
        background-color: tomato;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline-block;
        border: 3px solid black;
      }
      .b {
        background-color: aquamarine;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline-block;
        border: 3px solid black;
      }
    </style>
  </head>

  <body>
    <div class="a">This is card A.</div>
    <div class="b">This is card B.</div>
  </body>
</html>
```

## Output :
<img src="/css/09/7_image.png" alt="chrome" width="550px"/>

n the same way we can change the display property of `<div>` element to inline using CSS.

## Code :
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>diplay</title>
    <style>
      .a {
        background-color: tomato;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline;
        border: 3px solid black;
      }
      .b {
        background-color: aquamarine;
        margin: 5px;
        height: 100px;
        width: 200px;
        display: inline;
        border: 3px solid black;
      }
    </style>
  </head>

  <body>
    <div class="a">This is card A.</div>
    <div class="b">This is card B.</div>
  </body>
</html>
```
### Output :

<img src="/css/09/8_image.png" alt="chrome" width="550px"/>

## Difference between Inline,Block and Inline-block


<img src="/css/09/9_image.png" alt="chrome" width="550px"/>

