# ADR: Card Picture Overflow

## Problem

I first worked on the card layout where the pictures were smaller than the card. However, when I began working on the WIP page, there was one image in particular that overflowed from the card, resulting in a malformed layout. I had to figure out how to deal with images that were too big for the card.

## Considered Solutions

In the MDN Web Doc article about card layouts, I saw that they used the object-fit property set to cover. However, this did not solve my problem.

One solution on StackOverflow involved using two width declarations, but that felt too hacky.

## Decision

After some searching, I found that I can resize the image directly instead of targeting the picture tag.

I decided to set the max-width of the img tag inside of the picture tag to 100%. This way, the image would only ever be the width of the picture tag.

However, one doubt I had about this was the selector I used, namely `.project-picture > img`. This approach seemed to work with the picture tags I had because there was no source tags. But in the future, when I include different sources to optimize my images, I wonder if this selector will still work when the image chosen is from a source tag, not the default img tag at the bottom.

## Sources Consulted

1. [Card](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
2. [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
3. [What is the correct way to scale images inside of a PICTURE tag?](https://stackoverflow.com/questions/43036724/what-is-the-correct-way-to-scale-images-inside-of-a-picture-tag)
4. [Image width and height inside \<picture\> tag?](https://stackoverflow.com/questions/67468541/image-width-and-height-inside-picture-tag)
