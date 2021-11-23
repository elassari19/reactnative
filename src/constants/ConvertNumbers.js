const million = 1000000,
      thousand = 1000;

const ConvertNumbers = (number=0,fix=1) => {

  return number >= million
          ? `${(number / million).toFixed(fix)}M `
          : number >= thousand
          ? `${(number / thousand).toFixed(fix)}K `
          : `${number} `
}

export default ConvertNumbers;