import React from "react";
import Webcam from "react-webcam";

function App() {
  const [photo, setPhoto] = React.useState()
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPhoto(pictureSrc)
  })

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };  
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {photo ? (
          <img src={photo} />
        ) : (
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            width={1280}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
      </div>
      <div>
        {photo ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPhoto('')
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
