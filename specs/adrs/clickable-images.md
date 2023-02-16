# ADR: Clickable Images

## Problem

One problem that I encountered while trying to create the layout for the homepage was centering the featured image, which is also an image link. While centering the images for project cards, I made the picture element a flexbox, without considering image links. However, this approach does immediately not work for image links because the picture element will expand to container width, making the clickable area greater than the enclosed image.

## Considered Solutions

One approach I considered taking was enclosing the image tag within the a tag, instead of the a tag enclosing the picture tag. However, after some research, this is invalid CSS as picture tags should only contain source and img tags.

Solutions I found online involved making the a tag an inline-block element, changing the text-align property, or adding a div. I didn't want to do that because it felt hacky.

Another way I tackled the problem was considering if I even needed to have an image link. I questioned if having an image link on my homepage was good UX. But after reading a post on StackOverflow, I decided to keep the image link.

## Decision

I ultimately decided to make the img width 100% of the parent picture tag. At first, this felt hacky because I wanted the image to stay the same size AND the clickable link area to be contained within the image. But then I decided that it was best to have the image width to fit the main content area as it conformed to my wireframe.

## Sources Consulted

1. [can we give a \<picture\> element link to other page?](https://stackoverflow.com/questions/26480733/can-we-give-a-picture-element-link-to-other-page)
2. [Can a figure tag contain an anchor tag wrapping the image?](https://stackoverflow.com/questions/28669852/can-a-figure-tag-contain-an-anchor-tag-wrapping-the-image)
   1. [center an image with a link on it](https://stackoverflow.com/questions/10396490/center-an-image-with-a-link-on-it)
3. [How to center-align image link and make it clickable only on image not overflowing area?](https://stackoverflow.com/questions/40989723/how-to-center-align-image-link-and-make-it-clickable-only-on-image-not-overflowi)
4. [Centering images with URL](https://stackoverflow.com/questions/37488004/centering-images-with-url)
5. [Center image in a link \[duplicate\]](https://stackoverflow.com/questions/38030040/center-image-in-a-link)
6. [Html5 Picture element](https://stackoverflow.com/questions/57829196/html5-picture-element)
7. [Is using an entire banner as a link bad usability?](https://ux.stackexchange.com/questions/26215/is-using-an-entire-banner-as-a-link-bad-usability)
