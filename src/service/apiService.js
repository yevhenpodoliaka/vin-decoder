const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/';

export  const fetchDecoderVin = async(vin)=> {
  const url = `${BASE_URL}/vehicles/decodevin/${vin}?format=json `;
  const response = await fetch(url);
  const data= await response.json();
  return data;
}

export const fetchInfo = async () => {
      const url = `${BASE_URL}/vehicles/getvehiclevariablelist?format=json`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
}