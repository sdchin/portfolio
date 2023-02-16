# ADR: About page layout

## Problem

The first layouts I worked on from my site only involved a one column layout. The wireframe for the about page specifies two columns, one for the text content and one for the picture. Also, I had to consider how the page would be laid out on different screen sizes, which my wireframe didn't account for. For example, if my picture should be above or below the content (or omitted entirely) on smaller screens, where two columns would be too tight.

## Considered Solutions

I had two main options to consider. I could either include the "About" title inside of the grid, or I could leave it outside of the grid. The grid was a decision made after working on the previous project card grid layouts, where I learned that I could handle overflows/wrapping naturally.

## Decision

I decided to keep the title outside of the grid. My main reason for this was padding issues. By keeping the title outside of the grid, I could use padding on just the main element and have the title and the text content left aligned. I encountered an issue where double padding occurred and the title and text were no longer aligned. I felt like this was the simplest solution to that.

One stylistic problem was that I needed to have two divs to make this work. One div to contain the text and picture within the grid, and one div to contain multiple paragraphs of text so that the grid wouldn't put each paragraph in a new column.
