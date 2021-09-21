# Team-Project-11
## Proposal 2: NextDestination- Assessing & forecasting the popularity of travel destinations

### 1. Introduction to the problem statement
A web application analyzes the popularity of travel destinations and uses machine learning to predict the next visitor bloom.

### 2. Abstract (rough draft)
COVID-19 has taken a huge toll on the tourism industry due to travel restrictions and public health concerns. As COVID vaccination rates continue to increase, more and more people are willing to travel after spending a year at home.

But to what extent has tourism recovered? What is the volume of visitors that local businesses can expect? And what if there are some tourists who want to make a trip but still concern about the crowd? All these problems can be solved by this application.

In this web application, we will analyze tourist data to obtain destination popularity trends after the outbreak of COVID to better serve tourism investors as well as local businesses. Additionally, we will provide recommendations for less crowded destinations. For selected destinations, we can further provide predict trends over time.

### 3. Approach
- Analyze dataset to create dashboards for visualization
- Data preprocessing and modeling

### 4. Persona
- Tourism investors 
- Businesses in travel destination
- Visitors who want to avoid crowd

### 5. Dataset links
https://www.programmableweb.com/api/sygic-travel-rest-api-v12


## Proposal 3: Covid-19 detection based on CT scans

### Introduction:

One of the key factors in controlling covid-19 is early detection; both to control the virus from spreading and to prevent it from evolving to fatal acute respiratory distress syndrome (ARDS) in the infected patient. The diagnosis of COVID-19 primarily depends on detection of the viral nucleic acid by real-time reverse transcription-polymerase chain reaction (RT-PCR), which is considered the gold standard in Covid-19 detection. However, the results for RT-PCR tests can take anywhere between 1-7 days depending on various factors such as location, infrastructure, management, and so on. During the peak of the pandemic in India, there were reports of 7-10 days of delay in diagnosis due to a big rush in the number of people going for tests[1]. Further, RT-PCR can detect Covid-19 only when the virus is in the nose or throat (from day 1 to 7), the virus can settle deep in the lungs and become undetectable.[2] Combined with the fact the new variants may emerge that will be undetectable through standard polymerase chain reaction[3], we need to have other diagnostic tools in our arsenal to augment RT-PCR.
One of the alternate tools that has emerged in the battle are CT-scans.

### Abstract:

CT scan (Computed tomography scan) is an imaging technique that gives quick results within 20 minutes. Observed by a Radiologist, lung CT-scans provided accuracy between 80-95% in diagnosing covid-19[4]. It can also correctly detect covid-19 missed by RT-PCR tests. However, the accuracy of these results depends on the radiologist and there is also an acute shortage of qualified specialists on the field. To fill this gap, we intend to use AI and machine learning algorithms to identify abnormal patterns associated with covid-19 and distinguish them from other pulmonary disorders and normal cases.

### Approach:

We will combine and clean the dataset from the different sources mentioned below and prepare it for training. The data set will be classified into four categories: covid-19, normal, viral pneumonia and lung opacity and stored in dataframes. We intend to use Pytorch(YOLOv5), Tesnsorflow, and Convolutional Neural Networks(CNN) algorithms to train the model. Finally, we will measure the accuracy, sensitivity, and specificity of the model against a sample dataset. The user will have a front end based on FLASK where he can upload the chest CT-scan image and view the results.

### Persona:
Any user who wants to upload a CT-scan.

### Datasets:
- https://bimcv.cipf.es/bimcv-projects/bimcv-covid19/#1590858128006-9e640421-6711
- https://sirm.org/category/senza-categoria/covid-19/
- https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/6ACUZJ
- https://www.kaggle.com/plameneduardo/sarscov2-ctscan-dataset


### References:
[1] https://www.newindianexpress.com/states/karnataka/2021/may/04/7-10-day-delay-in-rt-pcr-results-makes-people-desperate-2298170.html
[2] https://www.clinicaloncology.com/COVID-19/Article/07-20/False-Negatives-Found-If-COVID-19-Testing-Done-Too-Soon/58781
[3] https://www.fda.gov/medical-devices/letters-health-care-providers/genetic-variants-sars-cov-2-may-lead-false-negative-results-molecular-tests-detection-sars-cov-2
[4] https://pubmed.ncbi.nlm.nih.gov/33814777/

