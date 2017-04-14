
const DataSet1Week = () => {
  var parseDate = d3.time.format("%d-%b-%y").parse;

  var data = [{date:"25-Apr-12", value: 1, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 2, color: "green", detail: "hover 2"},
              {date:"25-Apr-12", value: 3, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 4, color: "green", detail: "hover 2"},
              {date:"24-Apr-12", value: 1, color: "red", detail: "hover 3"},
              {date:"22-Apr-12", value: 1, color: "green", detail: "hover 4"},
              {date:"19-Apr-12", value: 3, color: "blue", detail: "hover 5"},
              {date:"19-Apr-12", value: 2, color: "blue", detail: "hover 5"}];

  for (var i=0; i<data.length; i++)
  {
    data[i].date = parseDate(data[i].date);
  }

  return data
}

const DataSet1Month = () => {
  //return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
  // Parse the date / time
  var parseDate = d3.time.format("%d-%b-%y").parse;
  var data = [{date:"25-Apr-12", value: 1, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 2, color: "green", detail: "hover 2"},
              {date:"25-Apr-12", value: 3, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 4, color: "green", detail: "hover 2"},
              {date:"24-Mar-12", value: 1, color: "red", detail: "hover 3"},
              {date:"22-Mar-12", value: 1, color: "green", detail: "hover 4"},
              {date:"19-Mar-12", value: 3, color: "blue", detail: "hover 5"},
              {date:"19-Mar-12", value: 2, color: "blue", detail: "hover 5"}];

  for (var i=0; i<data.length; i++)
  {
    data[i].date = parseDate(data[i].date);
  }

  return data
}

const DataSet3Month = () => {
  //return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
  // Parse the date / time
  var parseDate = d3.time.format("%d-%b-%y").parse;
  var data = [{date:"25-Apr-12", value: 1, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 2, color: "green", detail: "hover 2"},
              {date:"25-Apr-12", value: 3, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 4, color: "green", detail: "hover 2"},
              {date:"24-Mar-12", value: 1, color: "red", detail: "hover 3"},
              {date:"22-Mar-12", value: 1, color: "green", detail: "hover 4"},
              {date:"19-Feb-12", value: 3, color: "blue", detail: "hover 5"},
              {date:"19-Feb-12", value: 2, color: "blue", detail: "hover 5"}];

  for (var i=0; i<data.length; i++)
  {
    data[i].date = parseDate(data[i].date);
  }

  return data
}

const DataSet6Month = () => {
  //return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
  // Parse the date / time
  var parseDate = d3.time.format("%d-%b-%y").parse;
  var data = [{date:"25-Apr-12", value: 1, color: "red", detail:"hover 1"},
              {date:"25-Apr-12", value: 2, color: "green", detail: "hover 2"},
              {date:"25-Mar-12", value: 3, color: "red", detail:"hover 1"},
              {date:"25-Feb-12", value: 4, color: "green", detail: "hover 2"},
              {date:"24-Jan-12", value: 1, color: "red", detail: "hover 3"},
              {date:"22-Dec-11", value: 1, color: "green", detail: "hover 4"},
              {date:"19-Nov-11", value: 3, color: "blue", detail: "hover 5"},
              {date:"19-Nov-11", value: 2, color: "blue", detail: "hover 5"}];

  for (var i=0; i<data.length; i++)
  {
    data[i].date = parseDate(data[i].date);
  }

  return data
}

export const week1Data = () => {
  return { data: DataSet1Week() };
};

export const month1Data = () => {
  return { data: DataSet1Month() };
};

export const month3Data = () => {
  return { data: DataSet3Month() };
};

export const month6Data = () => {
  return { data: DataSet6Month() };
};
