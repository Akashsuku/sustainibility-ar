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

## Setup

1. Clone this repository to your local machine or web server.
2. Ensure you have a video file named `video.mp4` in the same directory as the HTML file.
3. Create or obtain a marker pattern file named `pattern-logo.patt` and place it in the same directory.

## Usage

1. Open the HTML file on a web server with HTTPS support.
2. Allow the application to access your camera when prompted.
3. Point your camera at the physical marker corresponding to your `pattern-logo.patt` file.
4. When the marker is recognized, the video will fade in and start playing.
5. If the marker is lost from view, the video will pause and fade out.

## Customization

- To change the video, replace `video.mp4` with your desired video file and update the `src` attribute in the HTML.
- To use a different marker, replace `pattern-logo.patt` with your new pattern file and update the `url` attribute of the `a-marker` element.
- Adjust the `scale` attribute of the `a-video` element to resize the video overlay as needed.

## Troubleshooting

- If the video doesn't play, ensure that your browser allows autoplay of video with sound.
- If the marker isn't recognized, check that your `pattern-logo.patt` file is correctly generated and matches your physical marker.
- For performance issues, try using a device with a more powerful GPU or simplify the video content.

## Credits

This application uses the following libraries:
- [A-Frame](https://aframe.io/)
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/)

## License

[Specify your license here]
