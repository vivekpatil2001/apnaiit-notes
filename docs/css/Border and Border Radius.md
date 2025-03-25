---
sidebar_position: 4
---

# Introduction To Border Radius and border

## Border

A border is a decorative or structural element that can be added to HTML elements to visually separate them from other elements. It is a line that surrounds the content of an element and can be customized in terms of color, width, and style.

In CSS, you can use different properties to define the border of an element:

- border-style defines the style of the border line.

- border-color sets the color of the border.

- border-width sets the thickness or width of the border.

Here's an example of the syntax to set the border properties:

```
selector {
  border-style: solid;
  border-color: aqua;
  border-width: 5px;
}
```

The code you provided is used to style the border of an HTML element. It has three properties that control different aspects of the border: border-style, border-color, and border-width.

-  **border-style: solid;:** This line of code sets the style of the border to solid. Think of it as drawing a continuous line around the element. There are other styles available like dashed lines, dotted lines, and more, but here we are using a solid line.

- **border-color: aqua;** : This line of code determines the color of the border. In this case, it sets the border color to aqua, which is a light blue color. You can choose any color you like by replacing aqua with the color of your choice.

- **border-width: 5px;** : This line of code sets the thickness or width of the border. The value 5px means that the border will have a width of 5 pixels. You can change this value to make the border thicker or thinner as desired.

## There are four types of border styles you can use:

**1.solid** : Creates a continuous line.👉**___**

**2.double** : Creates two parallel lines. 👉 **====**

**3.dashed** : Creates a series of short dashes. 👉 **------**

**4.dotted** : Creates a series of small dots.👉 **..........**

## Solid Border :

The solid border style creates a solid line around an element. You can apply it to different HTML elements such as div, paragraphs, headings, buttons, and images. Implemented via using **border-style: solid;**

### EHere's an example :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Solid Border</title>
    <style>
      .box {
        background-color: #dd5959;
        height: 150px;
        width: 300px;
        border-style: solid;
        border-width: 3px;
        border-color: #0c2b5d;
      }
    </style>
  </head>
  <body>
    <div class="box">Hello Student</div>
  </body>
</html>
```

### Output :
 <img src="/css/03/01_image.png" alt="chrome" width="850px"/>
## Different Border Colors for Different Sides :

You can apply different border colors to different sides of an element using the properties **border-left**, **border-right**, **border-top**, and **border-bottom.**

### Here's an example :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Border</title>
    <style>
      .box {
        height: 200px;
        width: 300px;
        background-color: #99c2ff;
        border: solid 4px;
        border-left: 5px solid rgb(15, 28, 11);
        border-top: 5px solid rgb(27, 152, 16);
        border-right: 5px solid rgb(55, 55, 171);
        border-bottom: 5px solid rgb(128, 0, 119);
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```
### output :
 <img src="/css/03/02_image.png" alt="chrome" width="850px"/>

## Dotted Border
The dotted border style consists of a series of dots. Implemented via using `border-style: dotted`;
### Here's an example :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Dotted Border</title>
    <style>
      .box {
        background-color: rgb(0, 238, 255);
        height: 200px;
        width: 300px;
        border-style: dotted;
        border-color: rgb(24, 6, 6);
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"><!DOCTYPE html>
        <html>
          <head>
            <title>Dotted Border</title>
            <style>
              .box {
                background-color: rgb(0, 229, 255);
                height: 200px;
                width: 300px;
                border-style: dotted;
                border-color: black;
                border-width: 10px;
                text-align: center;
                font-weight: 900;
                font-size: 50px;
              }
            </style>
          </head>
          <body>
            <div class="box">Dotted Border</div>
          </body>
        </html></div>
  </body>
</html>
```

### OUTPUT :
 <img src="/css/03/05_image.png" alt="chrome" width="850px"/>


## Double Border

The double border style features two parallel lines surrounding an HTML element. Implemented via using `border-style: double;`

### Here's an example:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Double Border</title>
    <style>
      .box {
        background-color: rgb(69, 174, 74);
        height: 200px;
        width: 300px;
        border-style: double;
        border-color: black;
        border-width: 10px;
        font-weight: bold;
        text-align: center;
        margin-top: 30px;
        padding-top: 20px;
        font-size: 55px;
      }
    </style>
  </head>
  <body>
    <div class="box"> Double Border</div>
  </body>
</html>
```

### output : 
 <img src="/css/03/03_image.png" alt="chrome" width="850px"/>

## Dashed Border : 

The dashed border style consists of a series of short, dashed lines. Implemented via using `border-style: dashed;`

### Here's an example :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Dashed Border</title>
    <style>
      .box {
        background-color: rgb(50, 170, 86);
        height: 200px;
        width: 300px;
        border-style: dashed;
        border-color: rgb(174, 78, 78);
        border-width: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box"> Dashed Border</div>
  </body>
</html>
```

### output : 
 <img src="/css/03/04_image.png" alt="chrome" width="850px"/>

## Border Radius :

The border-radius CSS property is used to round the corners of an element's outer border edge. It provides a way to give elements a rounded appearance.

You can provide up to four values to the` border-radius` property:

```border-radius: 0px 50px 0px 50px;```

- The first value applies to the top-left corner.
- The second value applies to the top-right corner.
- The third value applies to the bottom-right corner.
- The fourth value applies to the bottom-left corner.

## You can also provide different values for different corners

### Example :

```
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      .box {
        height: 300px;
        width: 400px;
        background-color: rgb(10, 36, 230);
        border-radius: 15px 50px 30px 5px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

### OUTPUT :
 <img src="/css/03/06_image.png" alt="chrome" width="850px"/>

### Here's an example:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      .box {
        height: 200px;
        width: 200px;
        border: solid 2px black;
        background-color: rgb(230, 10, 204);
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

### OUTPUT :
 <img src="/css/03/07_image.png" alt="chrome" width="850px"/>

### Here's an example:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Border Radius</title>
    <style>
      #btn-startvideo {
        background-color: #4fd1a5;
      }
      #btn-endvideo {
        background-color: #6f7d3d;
        color: white;
      }
      .google-btn {
        height: 30px;
        width: 120px;
        border: none;
        border-radius: 3px;
      }
    </style>
  </head>
  <body>
    <button id="btn-startvideo" class="google-btn">Start video</button>
    <br /><br />
    <button id="btn-endvideo" class="google-btn">End Video</button>
  </body>
</html>
```
### OUTPUT : 
 <img src="/css/03/08_image.png" alt="chrome" width="850px"/>












