---
title: Empty Tag and Container Tag
description: "Empty Tag and Container TagL"
hide_table_of_contents: true
sidebar_position: 4
---

# Empty Tags and Container Tags in HTML

In HTML, tags are classified into two main types:

#### 1 :  Empty Tags (Self-Closing Tags)

#### 2 : Container Tags (Opening & Closing Tag)

## 1. Empty Tags
An empty tag is a tag that does not require a closing tag. These tags are self-closing and do not wrap content inside them

Examples of Empty Tags:

#### - `<img>` - Used to display images

#### - `<br>` - Inserts a line break

#### - `<hr>` - Adds a horizontal line

#### - `<meta>` - Provides metadata about the document

#### - `<input>` - Defines input fields

### Syntax:

```
<tagname attributes />
```

#### Example: Using the `<br>` and `<hr>` 

```
<!DOCTYPE html>
<html>
<head>
    <title>Empty Tags Example</title>
</head>
<body>
    <p>This is a paragraph.</p>
    <br /> <!-- Adds a line break -->
    <p>This is another paragraph after a line break.</p>
    <hr /> <!-- Adds a horizontal line -->
    <p>This is a paragraph after a horizontal line.</p>
</body>
</html>

```

## 2. Container Tags:

A container tag requires both an opening tag and a closing tag. It wraps content between them.

Examples of Container Tags:

#### - `<p>...</p>` - Defines a paragraph
#### - `<div>...</div>` - Defines a division/section
#### - `<h1>...</h1>` - Defines a heading
#### - `<span>...</span>` - Inline text container
#### - `<ul>...</ul>` - Defines an unordered list

### Syntax 

```
<opentag> Content goes here </closetag>
```

## Example: Using `<div>` and `<p>` tags:

```
<!DOCTYPE html>
<html>
<head>
    <title>Container Tags Example</title>
</head>
<body>
    <div>
        <h2>Welcome to My Website</h2>
        <p>This is a paragraph inside a container tag.</p>
    </div>
</body>
</html>
```
## 🥰🥰
