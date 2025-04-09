---
sidebar_position: 10
---

# Color Theory

There are different ways to add css colors.
```
 Color name
2. Hexadecimal color
3. rgb
4. rgba
5. hsl
```

## 1. Color name

CSS provides predefined color names that you can use directly.

### Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: red;
        color: white;
      }
    </style>
  </head>
  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

## Output :

<img src="/css/08/01-image.png" alt="chrome" width="550px"/>

Example explanation :

In the above example, set the background color to "red" or the text color to "white".


## 2.Hexadecimal colors:

Hexadecimal colors start with a pound sign (#) followed by six characters representing red, green, and blue (RGB) values. Each pair of characters represents a value from 00 (minimum) to FF (maximum).

### Example :

```
!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: #ff0000;
        color: #ffffff;
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

## Output :

<img src="/css/08/02_image.png" alt="chrome" width="550px"/>

Example explanation :

In the above example, sets the background color to red (#FF0000) and the text color to white (#FFFFFF).

## 3.rgb

```
rgb(red,  green, blue)
     |      |      |
     0      0      0
     to     to     to
     255    255    255
```

RGB colors allow you to specify the intensity of red, green, and blue using decimal values ranging from 0 to 255. You can use the rgb() function for this.


### Example :

```
!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgb(255, 0, 0);
        color: rgb(255, 255, 255);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

### Output :

<img src="/css/08/01-image.png" alt="chrome" width="550px"/>

Example explanation :

In the above example, sets the background color to red (255, 0, 0) and the text color to white (255, 255, 255).

## 4.rgba : 

```
rgba(red,  green, blue, alpha)
```

RGBA colors are similar to RGB, but with an additional alpha channel representing capacity. The alpha value ranges from 0 (transparent) to 1 (opaque). Use the rgba() function to specify these colors.

## Example :
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: rgba(0, 0, 0, 0);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```

### Output :

<img src="/css/08/03_image.png" alt="chrome" width="550px"/>

### Example explanation :

In the above example, the background color is black with full transparency (0), making it completely invisible.

## 5. hsl

HSL colors define hue, saturation, and lightness. Hue represents a color on the color wheel, saturation determines the intensity and lightness controls the brightness. Use the hsl() function to specify these colors.

## Example :

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>css-color</title>
    <style>
      .btn {
        background-color: hsl(0, 100%, 50%);
      }
    </style>
  </head>

  <body>
    <button class="btn">Click Here</button>
  </body>
</html>
```
## Output :

<img src="/css/08/04_image.png" alt="chrome" width="550px"/>

## Example explanation :

In the above example, sets the background color to pure red (0 degrees), with 100% saturation and 50% lightness.

### You can refer to the following websites to choose colors:
## colorhunt


## colorcoder


