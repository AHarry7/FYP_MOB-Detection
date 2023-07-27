import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Draw from "../components/drawChart";
import { useEffect } from "react";

export default function ImgMediaCard({
  alert,
  type,
  textStyle,
  objectsCount,
  personsCount,
  boatsCount,
  lifebuoysCount,
}) {
  useEffect(() => {
    console.log(type);
  });

  const data = [
    { label: "Persons", value: personsCount },
    { label: "Boats", value: boatsCount },
    { label: "Lifebuoys", value: lifebuoysCount },
  ];

  return (
    <Card
      variant="outlined"
      className="mt-5 mb-5 p-3 w-2/3 flex flex-row place-content-around"
    >
      <CardContent>
        {type ? (
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.secondary"
          >
            Statistics
          </Typography>
        ) : null}

        {type ? (
          <Typography variant="body2" sx={{ fontWeight: "regular" }}>
            Objects Detected ={" "}
            <Typography component="span" fontWeight="bold">
              {objectsCount}
            </Typography>
          </Typography>
        ) : null}

        {type ? (
          <Typography
            variant="body2"
            color="primary.main"
            sx={{ fontWeight: "regular" }}
          >
            Persons Detected ={" "}
            <Typography component="span" fontWeight="bold">
              {personsCount}
            </Typography>
          </Typography>
        ) : null}

        {type ? (
          <Typography
            variant="body2"
            color="#ff3d00"
            sx={{ fontWeight: "regular" }}
          >
            Boats Detected ={" "}
            <Typography component="span" fontWeight="bold">
              {boatsCount}
            </Typography>
          </Typography>
        ) : null}

        {type ? (
          <Typography
            variant="body2"
            color="#651fff"
            sx={{ fontWeight: "regular" }}
          >
            Lifebuoys Detected ={" "}
            <Typography component="span" fontWeight="bold">
              {lifebuoysCount}
            </Typography>
          </Typography>
        ) : null}

        {type ? (
          <Typography
            variant="body2"
            color={textStyle}
            sx={{
              fontWeight: "bold",
              marginTop: 0.5,
              fontSize: 17,
            }}
          >
            Status = {alert}
          </Typography>
        ) : (
          <Typography
            variant="body2"
            color={textStyle}
            sx={{
              fontWeight: "bold",
              marginTop: 0.5,
              fontSize: 17,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            Status = {alert}
          </Typography>
        )}
      </CardContent>

      {type ? (
        <div className="mt-5 items-center">
          <Draw data={data} />
        </div>
      ) : null}
    </Card>
  );
}
