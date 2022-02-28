import jsSHA from "jssha";

const getAuthorizationHeader = () => {
  const APP_ID = '2e856535786a46d8870cfab74fbebf2e';
  // process.env.APP_ID;
  const APP_Key = "FeN8Ccn9QJTQzFMCP5U3eWCa7so";
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(APP_Key, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    APP_ID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};

const options = {
  baseUrl: "https://ptx.transportdata.tw/MOTC/v2",
  headers: () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
    ...getAuthorizationHeader(),
  }),
};

export default function request(path, parameters) {
  const url = new URL(`${options.baseUrl}${path}`);
  url.searchParams.append("$top", "10");
  url.searchParams.append("$format", "JSON");

  if (parameters) {
    Object.keys(parameters).forEach((key) =>
      url.searchParams.append(key, parameters[key])
    );
  }

  return fetch(url, {
    method: "GET",
    headers: options.headers(),
  }).then((response) => response.json());
}
