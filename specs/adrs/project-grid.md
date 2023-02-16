# ADR: Project Grid

## Problem

My wireframe specifies that projects/WIPs be laid out in some kind of grid. I mostly had to decide between using Flexbox or Grid.

## Considered Solutions

At first, I considered if Flexbox could be a good solution. I knew that Flexbox was capable of wrapping elements when there is overflow.

## Decision

After reading an article on MDN Web Docs about card layouts (which is basically what my layout amounted to), I decided to use Grid. In particular, I was intrigued by this CSS declaration:

`grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));`

After reading more about auto-fill and minmax, I felt like this was an elegant solution to the problem of having a responsive grid layout for different screen sizes.

In the future, I may need to adjust the values I chose for minmax, particularly when dealing with smaller screen sizes. I chose the value I did because it looked good on desktop. I tried using a CSS variable as a min argument to avoid having magic numbers, but it didn't appear to work.

## Sources Consulted

1. [Card](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
2. [Auto-Sizing Columns in CSS Grid: \`auto-fill\` vs \`auto-fit\`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
