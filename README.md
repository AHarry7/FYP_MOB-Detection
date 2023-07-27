# MOB-Detection

Creating a control system that uses drones and artificial intelligence to provide safety to large vessels. Some work has been done on this which uses detection of people by analyzing images recorded with thermal. In ours, we are going to use video cameras and then process those images for the detection of people through deep learning.

The “Search and Rescue System Using Aerial Imagery” is a man overboard detection project aimed at providing an automated and reliable solution for detecting a person overboard in water bodies. The project leverages machine learning techniques to analyze aerial imagery to detect the presence of a person in the water and alerts the relevant authorities for a quick rescue response. This project is designed to minimize response time and improve the chances of saving lives in emergency situations.

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
