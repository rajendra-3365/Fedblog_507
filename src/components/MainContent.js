import React from 'react';

export default function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>Drawing shapes with canvas</h2>
         <p lang='eng'>
</p><br />
<div className='rectangle' id="rectangle">
<p>
<h2>Drawing shapes with canvas</h2><br/><br/>
Now that we have set up our canvas environment, we can get into the details of how to draw on the canvas. By the
 end of this article, you will have learned how to draw rectangles, triangles, lines, arcs and curves, providing 
 familiarity with some of the basic shapes. Working with paths is essential when drawing objects onto the canvas and we will see how that can be done.
<h2>The grid</h2><br/>
Before we can start drawing, we need to talk about the canvas grid or coordinate space. Our HTML skeleton from the previous 
page had a canvas element 150 pixels wide and 150 pixels high.
Normally 1 unit in the grid corresponds to 1 pixel on the canvas. The origin of this grid is positioned in the top left corner at coordinate (0,0). All elements are placed relative to this origin. So the position of the top left corner of the blue square becomes x pixels from the left and y pixels from the top, at coordinate (x,y). Later in this tutorial we'll see how we can translate the origin
 to a different position, rotate the grid and even scale it, but for now we'll stick to the default.<br/><br/>
 <h2>Drawing rectangles</h2>
 Unlike SVG, canvas only supports two primitive shapes: rectangles and paths (lists of points connected by lines). All other shapes must be created by combining one or more paths. Luckily, we have an assortment of path drawing functions which make it possible to compose very complex shapes.

First let's look at the rectangle. There are three functions that draw rectangles on the canvas:

fillRect(x, y, width, height)
Draws a filled rectangle.

strokeRect(x, y, width, height)
Draws a rectangular outline.

clearRect(x, y, width, height)
Clears the specified rectangular area, making it fully transparent.

Each of these three functions takes the same parameters. x and y specify the position on the canvas (relative to the origin) of the top-left corner of the rectangle. width and height provide the rectangle's size.

Below is the draw() function from the previous page, but now it is making use of these three functions.
<br/>
The fillRect() function draws a large black square 100 pixels on each side. The clearRect() function then erases a 60x60 pixel square from the center, and then strokeRect() is called to create a rectangular outline 50x50 pixels within the cleared square.

In upcoming pages we'll see two alternative methods for clearRect(), and we'll also see how to change the color and stroke style of the rendered shapes.

Unlike the path functions we'll see in the next section, all three rectangle functions draw immediately to the canvas.
<br/><br/>
<h2>Drawing paths</h2>
Now let's look at paths. A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths, we take some extra steps:

First, you create the path.
Then you use drawing commands to draw into the path.
Once the path has been created, you can stroke or fill the path to render it.
Here are the functions used to perform these steps:

beginPath()
Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.

Path methods
Methods to set different paths for objects.

closePath()
Adds a straight line to the path, going to the start of the current sub-path.

stroke()
Draws the shape by stroking its outline.

fill()
Draws a solid shape by filling the path's content area.

The first step to create a path is to call the beginPath(). Internally, paths are stored as a list of sub-paths
 (lines, arcs, etc.) which together form a shape. Every time this method is called, the list is reset and we can start drawing 
 new shapes.<br/><br/>
 <h2>Drawing a triangle</h2>
 function draw() <br/>
   canvas = document.getElementById('canvas');<br/>
  if (canvas.getContext) <br/>
    ctx = canvas.getContext('2d')<br/>

    ctx.beginPath();<br/>
    ctx.moveTo(75, 50);<br/>
    ctx.lineTo(100, 75);<br/>
    ctx.lineTo(100, 25);<br/>
    ctx.fill();<br/>
  <br/>
<h2>Moving the pen</h2>
One very useful function, which doesn't actually draw anything but becomes part of the path 
list described above, is the moveTo() function. You can probably best think of this as lifting a pen or pencil
 from one spot on a piece of paper and placing it on the next.

moveTo(x, y)
Moves the pen to the coordinates specified by x and y.

When the canvas is initialized or beginPath() is called, you typically will want to use the moveTo() function to place
 the starting point somewhere else. We could also use moveTo() to draw unconnected paths. Take a look at the smiley face below.
<br/>
</p>
</div>
       </div>
       </div>
  )
  }
