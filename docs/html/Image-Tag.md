---
title: Image Tag
description: "Image Tag"
hide_table_of_contents: true
sidebar_position: 2
---
# Image Tag in HTML

- The `<img/>` tag is used to display images on a webpage. It is a self-closing tag, meaning it does not require a closing tag.

### Syntax 

```
<img/>
```

### Attributes:

- Attributes provide extra information about an element. The `<img>` tag has several important attributes.

## 1. src Attribute:

The src (source) attribute specifies the image file's location (URL or file path).

### syntax : 
```
<img src="image-path" />
```

### Example:
```
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <img src="https://example.com/image.jpg" />
</body>
</html>
```

## 2. height and width Attributes:

The height and width attributes define the image's dimensions in pixels.

### syntax

```
<img src="image-path" height="" width="" />
```

### Example:

```
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <img src="https://example.com/image.jpg" height="500px" width="250px" />
</body>
</html>
```
### Output

- Important: If both height and width are set manually, the image may become distorted. To maintain the aspect ratio, specify only one (height or width), and the browser will adjust the other automatically.

Example (Preserving Aspect Ratio):

```
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <img src="https://example.com/image.jpg" height="200px" />
</body>
</html>
```

## 3. alt Attribute:

The alt (alternative text) attribute provides a description of the image. This helps users who cannot see the image (e.g., visually impaired users or when the image fails to load).

### Example:

```
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <img src="https://example.com/image.jpg" height="200px" alt="Description of the image" />
</body>
</html>
```

## 4. Using a Local Image:

To use a local image, save the image in the same folder as your HTML file and provide its file name in the src attribute.

### Example:

```
<!DOCTYPE html>
<html>
<head>
    <title>Local Image</title>
</head>
<body>
    <img src="image-name.png" height="200px" alt="Local image description" />
</body>
</html>
```

## Conclusion:

The `<img>` tag helps display images on a webpage.

Use the src attribute to provide the image's location.

Use height and width carefully to maintain aspect ratio.

The alt attribute improves accessibility and SEO.

Local images must be stored in the same folder as the HTML file or properly referenced by a relative path.



