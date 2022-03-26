import React, { useRef, useEffect, useState } from "react";
import mapboxGl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import marker from '../assets/marker.png'
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWloaXItc2hpbmRlLTI5IiwiYSI6ImNsMTdwbmRuMzE2dDAzaXF6d2oxY3ZhcjQifQ.YsFq7FEkgKuIEBKco6cieQ";
mapboxGl.accessToken =
  "pk.eyJ1IjoibWloaXItc2hpbmRlLTI5IiwiYSI6ImNsMTdwbmRuMzE2dDAzaXF6d2oxY3ZhcjQifQ.YsFq7FEkgKuIEBKco6cieQ";

export const SimpleMap = ({ h, projects }) => {
  const height = +h
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 19.07,  
          longitude: 72.87,
          zoom: 9,
        }}
        style={{ width: '100%', height: height }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {projects.isArray() ? projects?.map(project => (
          <Marker longitude={project.longitude} latitude={project.latitude} anchor='bottom-left'>
            <div>
              <div className="p-2 bg-white border-[1px] rounded border-gray-400">
                <h1>{project.name}</h1>
                <h1>{project.location_name}</h1>
              </div>
              <Link to={`/project/${project.id}`}>
                <img className="h-[35px]" src={marker} alt="" />
              </Link>
            </div>
          </Marker>
        )) : (
          <Marker longitude={projects.longitude} latitude={projects.latitude} anchor='bottom-left'>
            <div>
              <div className="p-2 bg-white border-[1px] rounded border-gray-400">
                <h1>{projects.name}</h1>
                <h1>{projects.location_name}</h1>
              </div>
              <Link to={`/project/${projects.id}`}>
                <img className="h-[35px]" src={marker} alt="" />
              </Link>
            </div>
          </Marker>
        )}
      </Map>
    </div>
  );
};