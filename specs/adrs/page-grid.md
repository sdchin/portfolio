# ADR: Page Grid Layout

## Problem

Initially, my page layout consisted of a header containing the site navigation bar, followed by the main content, ending with the footer. There was no overarching structure, only relying on how the page was laid out by the browser. The problem arose when I wanted the footer to be at the bottom of the page, but on some screen sizes it appeared higher up.

I noticed that the root element and body element did not span the entire screen height. Instead, they ended where the last content (the footer) stopped.

After some research, I found out this was because the root and body elements are block elements.

## Considered Solutions

At first, I tried adding a viewport meta tag. I thought that by doing so, the root element and body element would automatically adjust their height based on the screen size. However, this did not happen.

Solutions I found online to the issue of footers on different screens involved absolute positioning. I did not want to resort to that because I felt that absolute positioning was hacky, and I knew of other better potential solutions, like Flexbox and Grid.

## Decision

I ultimately decided to use CSS Grid to lay out the entire page. I was opposed to this approach at first because I felt that using Grid would add unnecessary complexity to my layout. My reasoning was that most of my pages were simple: They flowed one dimensionally downward with only one column. Because of this, I assumed that there had to be a simpler solution to my problem.

However, once I started experimenting with Grid, I found that it made laying out my pages easier. For example, I could position the footer at the end of its row using the align-self property.

One challenge I encountered with this was determining the grid height so that the problem was actually solved. After reviewing the class sides on CSS units, I found out about relative viewport units. At first, I used 100dvh for the grid height. However, I felt like dvh might not have been the most appropriate unit because the footer will always be at the page bottom. So I settled on 100lvh because as the user scrolls down, any UI will disappear, so the footer will be revealed at the bottom, i.e. 100lvh.

As I have only tested this in DevTools, I might need to reconsider this approach to see if it actually works on different screen sizes.

## Sources Consulted

1. [How can I create HTML pages that automatically adjust their images to different mobile screen sizes?](https://stackoverflow.com/questions/14580695/how-can-i-create-html-pages-that-automatically-adjust-their-images-to-different)
2. [Viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
3. [Keeping the footer at the bottom of the page in mobile view](https://stackoverflow.com/questions/51677082/keeping-the-footer-at-the-bottom-of-the-page-in-mobile-view)
4. [Making a footer stay at the bottom of the page both in mobile view and desktop view](https://stackoverflow.com/questions/51683107/making-a-footer-stay-at-the-bottom-of-the-page-both-in-mobile-view-and-desktop-v)
5. [Why doesn't the html element take up the whole browser viewport?](https://stackoverflow.com/questions/23599919/why-doesnt-the-html-element-take-up-the-whole-browser-viewport)
6. CSS Values and Units Slide Deck
