import React from "react";
import { Stack, Typography } from "@mui/material";
import data from "./data.json";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Showmore = () => {
  return (
    <Stack gap={3} marginTop="20px">
      <Stack direction={"row"} justifyContent="space-evenly" gap={3}>
        <Stack direction="row" gap={1}>
          <AirIcon />
          <Typography variant="h5">
            Wind speed - {data?.query?.results?.channel?.wind?.speed}{" "}
            {data?.query?.results?.channel?.units?.speed}
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <ThermostatIcon />
          <Typography variant="h5">
            Humidity - {data?.query?.results?.channel?.atmosphere?.humidity} %
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" justifyContent={"center"} gap={1}>
        <AcUnitIcon />
        <Typography variant="h5">
          pressure - {data?.query?.results?.channel?.atmosphere?.pressure}{" "}
          {data?.query?.results?.channel?.units?.pressure}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent={"space-evenly"} gap={5}>
        <Stack direction="row" gap={1}>
          <WbSunnyIcon />
          <Typography variant="h5">
            sunrise - {data?.query?.results?.channel?.astronomy?.sunrise}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <WbTwilightIcon />
          <Typography variant="h5">
            sunset - {data?.query?.results?.channel?.astronomy?.sunset}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Showmore;
