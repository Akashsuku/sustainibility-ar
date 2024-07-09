# Sustainability Report WebAR Application

This WebAR application uses image recognition to display a video overlay on a specific marker. When the marker is detected, the video fades in and starts playing. When the marker is lost from view, the video fades out and pauses.

## Features

- Image marker recognition
- Video overlay on recognized marker
- Fade in/out effects for smooth transitions
- Responsive design with loading screen

## Prerequisites

To run this application, you need:

1. A web server supporting HTTPS (required for accessing the camera in most browsers)
2. A device with a camera (e.g., smartphone, laptop with webcam)
3. A modern web browser that supports WebAR (e.g., recent versions of Chrome, Firefox, or Safari)

## Usage

1. Scan the qr code png
2. Point the camera towards the dominion logo png

## Customization

- To change the video, replace `video.mp4` with your desired video file and update the `src` attribute in the HTML.
- To use a different marker, replace `pattern-logo.patt` with your new pattern file and update the `url` attribute of the `a-marker` element.
- Adjust the `scale` attribute of the `a-video` element to resize the video overlay as needed.

## Credits

This application uses the following libraries:
- [A-Frame](https://aframe.io/)
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/)

## License

[Specify your license here]
