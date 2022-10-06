import React from "react";
import data from "./data.json";
import "./App.css";
import { Stack, Typography } from "@mui/material";
const CurrentConditions = () => {
  return (
    <Stack gap={1}>
      <Stack direction={"row"} justifyContent="center" gap={2}>
        <Typography sx={{ fontSize: { xs: "30px", md: "60px" } }}>
          {data?.query?.results?.channel?.location?.city} ,
          {data?.query?.results?.channel?.location?.region} ,
          {data?.query?.results?.channel?.location?.country}.
        </Typography>
      </Stack>
      <Stack
        direction="column "
        justifyContent={"space-around"}
        alignItems="center"
        marginBottom={"30px"}
        gap={2}
      >
        <Typography variant="h1">
          {data?.query?.results?.channel?.item?.condition?.temp}{" "}
          <sup className="superscript">.</sup>
          {data?.query?.results?.channel?.units?.temperature}
        </Typography>
        <Typography variant="h4">
          {data?.query?.results?.channel?.item?.condition?.text}
        </Typography>

        <Typography variant="h4">
          High/Low - {data?.query?.results?.channel?.item?.forecast[0]?.high}{" "}
          <sup className="superscript_small">.</sup>/{" "}
          {data?.query?.results?.channel?.item?.forecast[0]?.low}{" "}
          <sup className="superscript_small">.</sup>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CurrentConditions;
