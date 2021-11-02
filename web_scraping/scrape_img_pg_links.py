'''
Usage: python scrape_imagelinks.py --url <url of the race album you want to scrape>
'''

# import the necessary packages
from selenium import webdriver
import datetime
import time
import os
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


url = "https://www.myracephotos.in/Event-Photos/2018/Run-with-mi-bangalore/"

# Extract the dir name
album_name = url.split('/')[-2]

# Define Chrome options to open the window in maximized mode
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")

# Initialize the Chrome webdriver and open the URL
s=Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s,options=options)
driver.get(url)

# Get scroll height
hieght = driver.execute_script("return document.body.scrollHeight")

while True:
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    time.sleep(2)

    # Calculate new scroll height and compare with last scroll height
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height == hieght:
        break

    hieght = new_height


# Extract all anchor tags
link_tags = driver.find_elements_by_tag_name('a')

# Create an emply list to hold all the urls for the images
links = []

# Extract the urls of only the images from each of the tag WebElements
for tag in link_tags:
    if "sm-tile-content" not in tag.get_attribute('class'):
        continue
    links.append(tag.get_attribute('href'))

#Create the directory after checking if it already exists or not
directory_name = 'img_pg_links'
if not os.path.exists(directory_name):
    try:
        os.mkdir(directory_name)
    except OSError:
        print ("[INFO] Creation of {} failed".format(os.path.abspath(directory_name)))
    else:
        print ("[INFO] Successfully created {} ".format(os.path.abspath(directory_name)))

# Write the links to the image pages to a file
f = open("{}/{}.csv".format(directory_name, album_name), 'w')
f.write(",\n".join(links))
print ("[INFO] Created file {}.csv with {} links".format(album_name, len(links)))
