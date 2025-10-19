import React, { useState, useRef } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import SelectInput from '../form/Select';

const libraries: ( "places" | "routes")[] = ['places', 'routes'];

interface Props {
  onClose: () => void;
}

const vehicleTypes = [
  { value: 'sedan', label: 'Sedan', rate: 17 },
  { value: 'suv', label: 'SUV', rate: 25 },
  { value: 'van', label: 'Van', rate: 40 },
];

const EstimateForm: React.FC<Props> = ({ onClose }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [vehicleType, setVehicleType] = useState(vehicleTypes[0].value);
  const [distance, setDistance] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const [fromAutocomplete, setFromAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [toAutocomplete, setToAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const calculateRoute = () => {
    if (from && to) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: from,
          destination: to,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            const route = result.routes[0];
            if (route && route.legs[0] && route.legs[0].distance) {
              const distanceInKm = route.legs[0].distance.value / 1000;
              setDistance(route.legs[0].distance.text);

              if (distanceInKm < 200) {
                if (vehicleType === 'sedan') {
                  setPrice(3000);
                  setIsCalculated(true);
                  setError(null);
                } else if (vehicleType === 'suv') {
                  setPrice(4500);
                  setIsCalculated(true);
                  setError(null);
                } else {
                  setError('We only provide service for distances of 200km or more for this vehicle type.');
                  setIsCalculated(false);
                }
              } else {
                const selectedVehicle = vehicleTypes.find(v => v.value === vehicleType);
                if (selectedVehicle) {
                  setPrice(distanceInKm * selectedVehicle.rate);
                  setIsCalculated(true);
                  setError(null);
                }
              }
            }
          } else {
            setError('Could not calculate the distance. Please check the locations.');
            setIsCalculated(false);
          }
        }
      );
    } else {
        setError('Please select both starting and destination locations.');
    }
  };

  const handleBookNow = () => {
    const subject = `Booking Confirmation for ride from ${from} to ${to}`;
    const body = `I would like to book a ${vehicleType} for a ride from ${from} to ${to}. The estimated price is ${price}`;
    window.location.href = `mailto:booking@onewaycabbie.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative z-10 bg-white rounded-2xl border border-[#D4D4D4] p-6 w-[736px] max-w-[95vw] max-h-[90vh] overflow-y-auto overscroll-contain lg:p-10">
        <h2 className="text-2xl font-medium text-appGray-600 mb-4 lg:text-3xl">
          Get an Estimate
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-10">
          <label className="relative flex flex-col">
            <div className="text-xs leading-none tracking-[-0.04em] text-appGray-500 mb-3 lg:text-xl lg:leading-none lg:mb-6">
                From
            </div>
            <Autocomplete
                onLoad={(autocomplete) => setFromAutocomplete(autocomplete)}
                onPlaceChanged={() => {
                    if (fromAutocomplete) {
                        const place = fromAutocomplete.getPlace();
                        setFrom(place.formatted_address || '');
                    }
                }}
            >
                <input
                    type="text"
                    placeholder="Enter starting location"
                    className="border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none w-full"
                />
            </Autocomplete>
          </label>

          <label className="relative flex flex-col">
            <div className="text-xs leading-none tracking-[-0.04em] text-appGray-500 mb-3 lg:text-xl lg:leading-none lg:mb-6">
                To
            </div>
            <Autocomplete
                onLoad={(autocomplete) => setToAutocomplete(autocomplete)}
                onPlaceChanged={() => {
                    if (toAutocomplete) {
                        const place = toAutocomplete.getPlace();
                        setTo(place.formatted_address || '');
                    }
                }}
            >
                <input
                    type="text"
                    placeholder="Enter destination"
                    className="border rounded-lg px-5 py-[13px] text-sm leading-none tracking-[-0.04em] text-appGray-600 bg-[#FAFAFA] transition-colors duration-300 placeholder:text-appGray-600 focus:outline-none lg:px-5 lg:py-4 lg:text-2xl lg:leading-none w-full"
                />
            </Autocomplete>
          </label>

          <SelectInput
            id="vehicle"
            name="vehicle"
            label="Vehicle Type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            options={vehicleTypes}
          />

          {isCalculated && distance && price && (
            <div className="text-center p-4 bg-gray-100 rounded-lg">
              <p className="text-lg">Distance: {distance}</p>
              <p className="text-2xl font-bold">Estimated Price: ₹{price.toFixed(2)}</p>
            </div>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}

          {!isCalculated ? (
            <button
              onClick={calculateRoute}
              className="flex justify-center w-full p-[17px] rounded-lg bg-[#7EE984] text-sm leading-none font-medium tracking-[-0.04em] text-appGray-600 lg:p-5 lg:text-2xl lg:leading-none"
            >
              Calculate
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handleBookNow}
                className="flex justify-center w-full p-[17px] rounded-lg bg-[#7EE984] text-sm leading-none font-medium tracking-[-0.04em] text-appGray-600 lg:p-5 lg:text-2xl lg:leading-none"
              >
                Book Now (Email)
              </button>
              <a
                href="tel:+917300090835"
                className="flex justify-center items-center w-full p-[17px] rounded-lg bg-blue-500 text-white text-sm leading-none font-medium tracking-[-0.04em] lg:p-5 lg:text-2xl lg:leading-none"
              >
                Call Now
              </a>
            </div>
          )}
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full cursor-pointer bg-[#171717B2]"
        onClick={onClose}
      />
    </div>
  );
};

export default EstimateForm;