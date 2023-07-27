# MOB-Detection

Creating a control system that uses drones and artificial intelligence to provide safety to large vessels. Some work has been done on this which uses detection of people by analyzing images recorded with thermal. In ours, we are going to use video cameras and then process those images for the detection of people through deep learning.

<p align="center">
  <img src="Project%20Code/project%20images/mob.jpeg" alt="Project Image" width="700" height="400">
</p>

The “Search and Rescue System Using Aerial Imagery” is a man overboard detection project aimed at providing an automated and reliable solution for detecting a person overboard in water bodies. The project leverages machine learning techniques to analyze aerial imagery to detect the presence of a person in the water and alerts the relevant authorities for a quick rescue response. This project is designed to minimize response time and improve the chances of saving lives in emergency situations.

## Table of Contents

- [Installation and Use](#installation-and-use)
- [Tools and Technologies](#tools-and-technologies)
- [GUI Dashboard](#gui-dashboard)
- [Conclusion](#conclusion)

## Installation and Use

To use this project, follow these steps:

1. Open the `fypreact` folder in Visual Studio Code (VSCode).
2. Make sure you are inside the `fypreact` directory within your terminal.
3. Run the command: `npm install`

Note: If your `fypreact` folder is located within another folder named `project` in drive G, navigate to it using the terminal with `cd G:\project\fypreact`, and then run `npm install`.

4. Similarly, navigate to the `yolov5` directory within your terminal.
5. Run the command: `pip install -r requirements`
6. Open both the `fypreact` and `yolov5` directories side by side in separate windows of Visual Studio Code.
7. In the terminal of the `yolov5` window, run the command: `uvicorn fast_api:app reload`
8. In the terminal of the `fypreact` window, run the command: `yarn start`
9. You can now upload any image from the Test Images folder for detection.

Congrats, you are good to go!!!

## Tools and Technologies

Our MOB-Detection project utilizes cutting-edge tools and technologies to deliver a robust and efficient system for detecting individuals overboard and ensuring water safety. Here are the key components of our project:

1. Frontend - React:
   - React is a popular and powerful JavaScript library for building user interfaces.
   - Our frontend is developed using React to create a dynamic and responsive GUI dashboard.
   - React's component-based architecture allows for seamless updates and a smooth user experience.

2. Model - YOLOv5:
   - We employ YOLOv5, a state-of-the-art deep learning model, for real-time object detection.
   - YOLO (You Only Look Once) is known for its speed and accuracy, making it ideal for our surveillance system.
   - The model is trained on a large dataset to detect individuals in water bodies from aerial imagery.

3. Backend - FastAPI:
   - FastAPI is a modern web framework for building APIs with Python.
   - We use FastAPI to develop the backend infrastructure that processes data and serves model predictions.
   - It's high performance and automatic validation capabilities ensure efficient and secure API operations.

4. TensorFlow:
   - TensorFlow, an open-source machine learning framework, plays a supporting role in our project.
   - While YOLOv5 serves as the main detection model, TensorFlow aids in other AI-related tasks and preprocessing.

5. Drones and Aerial Imagery:
   - Drones equipped with high-resolution cameras provide real-time surveillance of large vessels and water bodies.
   - Aerial imagery captured by the drones serves as input data for our detection model.
   - This integration allows us to continuously monitor the surroundings and respond to emergencies effectively.

6. Git and GitHub:
   - We utilize Git for version control, allowing collaborative development and easy tracking of changes.
   - GitHub serves as our remote repository, enabling seamless sharing and access to the project's source code.

These advanced tools and technologies work in synergy to create an innovative MOB-Detection system that enhances safety measures and saves lives in water-related emergencies. Our team continues to explore and implement new advancements in the field to improve the system's performance and accuracy.

## GUI Dashboard

Welcome to our GUI Dashboard! This section showcases the GUI of our project with their respective descriptions.

### Landing Page

![Landing Page](Project%20Code/project%20images/landing.png)

Description:

Landing Page of the project.

### No Man Overboard Detection

![Man Overboard Detection](Project%20Code/project%20images/webapp3.png)

Description:
The dashboard in case of no man-overboard detection.

### Man Overboard Detection

![Man Overboard Detection](Project%20Code/project%20images/webapp4.png)

Description:
The dashboard in case of a man-overboard detection.


## Conclusion

In conclusion, the MOB-Detection project proposes an innovative approach to enhance safety in water bodies and large vessels. By utilizing drones, artificial intelligence, and state-of-the-art technologies, our system aims to provide real-time detection of individuals overboard, thereby minimizing response time and improving rescue operations.

One promising aspect of our project is the potential integration with satellite imagery. By leveraging existing satellite data, our system can offer a cost-effective solution for monitoring vast water bodies, making it a viable option for various industries and applications.

As we continue to develop and refine this idea, we remain committed to exploring new advancements in AI and remote sensing technologies. Our vision is to contribute to safer water environments globally, saving lives and making a significant impact on water-related safety worldwide. With ongoing research and collaboration, we aspire to turn this idea into a practical and impactful reality.

