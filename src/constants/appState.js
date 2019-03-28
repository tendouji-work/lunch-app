const foursquareClientID = 'A11BDBNCO3FJPL2QIHJMNJGGM0TVVT1IAFX5B2MOMQJHOEEZ';
const foursquareClientSecret = 'KHW5EYGAVVV1JS5NUAGFL25GFXRDS0DJAWBXCWV5LBRIBHPH';
const foursquareClientAPI_pre = `?client_id=${foursquareClientID}&client_secret=${foursquareClientSecret}&query=lunch&near=`;
const foursquareClientAPI_post = `&v=20170801&limit=3`;


const pageWidth = 800;
const headerHeight = 50;

const commonGap = 10;

const colorGray = '#ccc';
const colorLightGray = '#eee';
const colorDarkGray = '#666';
const fontColor = colorDarkGray;

const borderRadius = 4;


export {
    pageWidth,
    headerHeight,
    colorGray,
    colorLightGray,
    colorDarkGray,
    fontColor,

    borderRadius,
    commonGap,

    foursquareClientAPI_pre,
    foursquareClientAPI_post,
}