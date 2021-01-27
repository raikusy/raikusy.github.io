---
title: আমার ব্লগে আপনাকে স্বাগতম 😉
excerpt: Hello everyone! I will be writing various technical blogs here.
date: 2021-01-25T02:00:00+06:00
thumb_img_path: images/logo.webp
thumb_img_alt: Rakibul Hasan @raikusy
content_img_path: images/logo@2x.webp
content_img_alt: Rakibul Hasan @raikusy
template: post
---

Hello everyone! I will be writing various technical blogs here.

## Who am I?

I am Rakibul Hasan from Dhaka, Bangladesh. I am a full-stack javascript developer. I mostly work with React, Nest, and React Native. I've been working in JS stack for 3+ years. I will be sharing my knowledge on different stacks in my blog.

আশা করি শীঘ্রই ভালো কিছু লেখা নিয়ে আসতে পারবো! 😁

This is a test to inline code comments. `js>console.log('hello');`

### Javascript Highlighting

```js
import _ from "lodash";

import getPage from "./getPage";

export default function toUrl(pages, pagePath) {
    if (_.startsWith(pagePath, "#")) {
        return pagePath;
    } else {
        pagePath = pagePath.replace(/\.\w+$/, "");
        const page = getPage(pages, pagePath);
        if (!page) {
            throw new Error("could not find page with path: " + pagePath);
        }
        return page.url;
    }
}
```

### Bash Highlighting

```bash
$ yarn global add npm-check-unused
yarn global v1.22.5
[1/4] 🔍  Resolving packages..
warning npm-check-unused > depcheck > babel-traverse > babel-runtime > core-js@2.6.12: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "npm-check-unused@6.0.0" with binaries:
    - npm-check-unused
✨  Done in 14.33s.
```

### Json Highlighting

```json
{
    "plugins": [
        {
            "resolve": "gatsby-transformer-remark",
            "options": {
                "plugins": ["gatsby-remark-prismjs"]
            }
        }
    ]
}
```

### CSS Highlighting

```css
pre {
    background-color: _palette(bg);
    border: 1px solid _palette(border);
    border-radius: 5px;
    color: _palette(secondary);
    margin: 1.66667rem 0;
    overflow: auto;
    padding: 1.33333em;
    position: relative;
    white-space: pre;

    &:first-child {
        margin-top: 0;
    }
}
```

### Python Highlighting

```python
# Program to check if a number is prime or not

num = 407

# To take input from the user
#num = int(input("Enter a number: "))

# prime numbers are greater than 1
if num > 1:
   # check for factors
   for i in range(2,num):
       if (num % i) == 0:
           print(num,"is not a prime number")
           print(i,"times",num//i,"is",num)
           break
   else:
       print(num,"is a prime number")

# if input number is less than
# or equal to 1, it is not prime
else:
   print(num,"is not a prime number")
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```
