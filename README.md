﻿### FE-dynamic_upload_navigate_paginate

# We meet again: FE!

What I have here is a frontend post control/preview frontend code, to enable you: upload multiple images, with the help to paginate and navigate through a directional click, the frontend ui design is quite an art work, while the javascript too is quite too straight forward. Lets get to it.

# Preview

This is the initial and after(output) of this code:
check this repo/result

![Image](result/post-design-initial.PNG)
![Image](result/post-design-test-i.PNG)
![Image](result/post-design-test-ii.PNG)


## Steps:

#### Frontend:
Create a frontend, you can use my design or design yours.
I used bootstrap, its faster for me.


#### Structure your work.
	root: project_name
				/index.html
				/assets/
						css/style.css
						js/main.js
						img/*.jpg	(any static image)
						bootstrap/(your dependencies: optional)
						


You can use this and can as well just build on a go, as long as you know what you are doing.

#### The frontend code
Study the code on this repository.

#### The Javascript structure

1. Define the navigation: which are the left navigation and right navigation. this two act as function that share an int assigned variable.  Which in response they increase and decrease a shared variable which I named **selected**, the selected variable is the main component here, which subscribes to the list of array of images uploaded.
2.  I added an event on our file, **onchange**, on input change, take on the event returned parameter and focus into the target (which is the file). On this target perform the following: assign the target `param.target.files ` to a variable. Notice we marked the target.files meaning I expected more than one object or content in return. I continue to check if the assigned targeted files content is greater than 0 and if this is true, I extended the operation to iterate through each, while doing this we push each iterated result into a global array and increment a global integer variable by 1(must be global)

    limit += 1
    fileStorage[index] = files[index]
   
  and that is all. the rest is to maintain a function to read through a **selected** array element(filestorage) and constrain your navigation to the **limit**
  check the repo
3. I as well show where and how to deal with your cached file target just in case you plan to repurpose your upload,

### Enjoy!!!

