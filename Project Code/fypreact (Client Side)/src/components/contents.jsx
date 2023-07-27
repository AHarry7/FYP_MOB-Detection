import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import api from "./api";
import Post from "./post";
import Card from "../components/card";
import { CircularProgress } from "@mui/material";

function Contents() {
  const [file, setFile] = useState("");
  const [Data, setData] = useState(null);
  const [Alert, setAlert] = useState("");
  const [fileType, setfileType] = useState("");
  const [boolAlert, setboolAlert] = useState(false);
  const [ObjectsCount, setObjectsCount] = useState("");
  const [PersonsCount, setPersonsCount] = useState("");
  const [BoatsCount, setBoatsCount] = useState("");
  const [LifebuoysCount, setLifebuoysCount] = useState("");
  const [alertStyle, setalertStyle] = useState("");
  const [labelledImageUrl, setLabelledImageUrl] = useState(null);
  const [VideoUrl, setVideoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (boolAlert) {
      const alertTimeout = setTimeout(() => {
        window.alert("MOB DETECTED! ");
        setboolAlert(false);
      }, 5000);

      return () => clearTimeout(alertTimeout);
    }
  }, [boolAlert]);

  useEffect(() => {
    if (!file) return;
    setLabelledImageUrl(null);
    setfileType(false);
    setIsLoading(true);

    async function fetchData() {
      // console.log("useEffect");
      let formData = new FormData();
      formData.append("file", file);
      let videoJson = "";
      let result = "";
      let personAlert = "";

      // Logic for uploaded "video"

      if (file.type.startsWith("video/")) {
        videoJson = await api.post("detect-video", formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (videoJson.data.alert === 1) {
          setAlert("Man-Overboard Detected!");
          setboolAlert(true);
          setalertStyle("error.main");
        } else {
          setAlert("No Man-Overboard Detected!");
          setalertStyle("success.main");
        }
        setfileType(false);
        setObjectsCount(0);
        setPersonsCount(0);
        setBoatsCount(0);
        setLifebuoysCount(0);
        setData(videoJson.data);
        setVideoUrl(videoJson.data.url);
      }

      // Logic For Uploaded Picture

      if (!file.type.startsWith("video/")) {
        result = await api.post("object-to-img", formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        personAlert = await api.post("object-to-json", formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (personAlert.data.alert === 1) {
          setAlert("Man-Overboard Detected!");
          setboolAlert(true);
          setalertStyle("error.main");
        } else {
          setAlert("No Man-Overboard Detected!");
          setalertStyle("success.main");
        }
        setfileType(true);
        setObjectsCount(personAlert.data.objectsCount);
        setPersonsCount(personAlert.data.personsCount);
        setBoatsCount(personAlert.data.boatsCount);
        setLifebuoysCount(personAlert.data.lifebuoysCount);
        setData(result.data);
        setLabelledImageUrl(result.data.url);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [file]);

  function render() {
    let Classproperty = "flex flex-col items-center ";
    if (Data) Classproperty += "justify-center";
    return Classproperty;
  }

  return (
    <div className={render()}>
      <div className="p-3 flex flex-row w-2/3 place-content-between">
        <Typography variant="h6" sx={{ mt: 0, mb: 0 }}>
          MOB Detection
        </Typography>
        <Post setFile={setFile} setData={setData} />
      </div>
      <div className="mt-5">{isLoading && <CircularProgress />} </div>

      {Data ? (
        <Card
          alert={Alert}
          textStyle={alertStyle}
          objectsCount={ObjectsCount}
          personsCount={PersonsCount}
          boatsCount={BoatsCount}
          lifebuoysCount={LifebuoysCount}
          type={fileType}
        />
      ) : null}

      <div>
        <div
          style={{ marginBottom: "30px" }}
          className="grid place-items-center "
        >
          {fileType ? (
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={10}
            >
              <Grid item md={6}>
                <Typography variant="h6" sx={{ mt: 0, mb: 2 }}>
                  Input
                </Typography>

                <img
                  style={{ width: "400px", height: "400px" }}
                  alt="helo"
                  src={URL.createObjectURL(file)}
                />
              </Grid>

              <Grid item md={6}>
                <Typography variant="h6" sx={{ mt: 0, mb: 2 }}>
                  Output
                </Typography>
                {labelledImageUrl && (
                  <img
                    style={{ width: "400px", height: "400px" }}
                    src={labelledImageUrl}
                    alt="labelledImage"
                  />
                )}
              </Grid>
            </Grid>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contents;
