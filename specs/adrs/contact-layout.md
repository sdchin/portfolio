# ADR: Contact page form layout

## Problem

I needed to lay out my contact page as guided by my wireframe.

## Considered Solutions

At first, my form contained an unordered list with each form label and control together comprising an individual list item. I attempted making this unordered list a grid. However, I ran into the problem of left aligning the form heading and instructions with the form items. One solution I considered was making another grid: One grid containing the form heading, instructions, and form, and one grid for the unordered list inside the form. This seemed a little too complicated. I considered just making one grid for the form heading, instructions, and list. However, this wouldn't work because the list counts as one grid item, so I wouldn't have been able to align the list items.

I considered including the form heading and instructions inside of the form element, so that I could just make the form a grid. However, after some research, I found out it is best to leave instructions outside of forms as they may not be read by screen readers in form mode.

## Decision

I ended up settling on a more complicated layout than I initially anticipated. I wrapped all of the content in a styling div, then made main a flexbox to center the content. This allows me to avoid changing the overall page grid layout and solely focus on styling within main. Then, the styling div became a grid to align the form heading, instructions, and form. Lastly, I removed the unordered list and directly made the form a grid, where each label, input, and button is in its own row.
