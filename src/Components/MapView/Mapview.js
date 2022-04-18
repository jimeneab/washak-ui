import { React, useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./MapView.css"

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
})

function MapView() {
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const [bbox, setBbox] = useState([])

    const map = useMap()

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        const radius = e.accuracy
        const circle = L.circle(e.latlng, radius)
        circle.addTo(map)
        setBbox(e.bounds.toBBoxString().split(","))
      })
    }, [map])

    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>
          <b className="position-popup">Usted está aquí</b>
        </Popup>
      </Marker>
    )
  }

  return (
    <MapContainer
      center={[19.390734,-99.143613]}
      zoom={16}
      scrollWheelZoom >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
}

export default MapView