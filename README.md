# BibSense

## Abstract <br/>

BisSense is an automated bib number detection module for bib number recognition in natural image collections covering running races such as marathons. A bib number is typically a piece of durable paper or cardboard bearing a number as well as the event/sponsor logo. The bib number, usually pinned onto the competitor’s shirt, is used to identify the competitor among thousands of others during the race. Our system takes a set of images taken at sporting events as input, detects the bib numbers in the images, stores the data in the database, and outputs the images for the searched bib number. First, we use our custom YOLO (You only Look once) v3 object model to detect the location of the bib number in the image, next we crop the image and apply optical character recognition (OCR) using Microsoft’s Computer Vision API to covert the image to text. The textual data along with the image location is stored in the database, which is displayed to the end-user (typically marathon participants) in a web application upon entering his bib number.
<br/>
## Approach <br/>
- Train a custom Yolo object detection Model using a collection of annotated marathon images
- Use the above model to generate boundary boxes for bib bumbers in images and crop it
- Feed the cropped images to Microsoft Computer Vision API to convert the image to text.
- Push the Text data into Postgres Database
- Use a Node.js REST API to fetch the data from database based on bib number and display it to the user in an React application. 

## Persona  <br/>
•	Sport event photographers <br/>
•	Runners and participants <br/>
•	Merchandizes and event sponsor advertising <br/>

## Architecture
![Architecture](https://github.com/sjsucmpe272-fall21/BibSense/blob/main/architecture.jpg)

### Dataset link <br/>
https://sjsu0-my.sharepoint.com/:f:/g/personal/adarsh_narasimhamurthy_sjsu_edu/EsmfJ8uHOGtCqzoax5R8nQgBt2sDICzrEYo-DKEUPSPJaQ?e=49QtQe


