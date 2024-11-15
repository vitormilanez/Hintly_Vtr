const nonWeightScoring = require("./nonWeightScoring");
const fs = require("fs");
const { parse } = require("csv-parse");
const json2csv = require("json-2-csv");

let records = [];
let completenessValues = [];
function setCompletenessValue(row) {
  for (const key in row) {
    if (!completenessValues[key]) completenessValues[key] = 0;
    if (row[key] && row[key] != "N/A" && row[key] != "0")
      completenessValues[key]++;
  }
}

function getCompletenessReport(completenessValues, records) {
  let completenessReport = {};
  for (const key in completenessValues) {
    const count = parseInt(completenessValues[key]);
    completenessReport[key] = (count / records.length).toFixed(2);
  }

  return completenessReport;
}
// so mudar linha 26
//fs.createReadStream("./heyloyalty_oct24.csv")
//fs.createReadStream("./assessment_vitor_client1.csv")
//fs.createReadStream("./assessment_vitor_client2.csv") //001
// fs.createReadStream("hintly_DK_PLUS_UMBRACO2.csv") //002
// fs.createReadStream("hintly_master.radarsoft.19.10.csv") //003
//fs.createReadStream("hintly_master.billwerk.csv") //004
// fs.createReadStream("[INT] Billwerk - SE - Select - Oct_24 - master-after+ecommerce_fix.csv") //004
// fs.createReadStream("store-pit-22.10.csv") //05
// fs.createReadStream("RadarVtr.csv") //0
// fs.createReadStream("NovemberDelivery-JesMedia-WeMarket-WebTo.csv") //007 008 009
// fs.createReadStream("[INT] Jes Media - Select analysis Sep_24 - Data scored (post CS).csv") //007 008 009
// fs.createReadStream("WebTo With Wordpress.csv")//
// fs.createReadStream("[INT] Jes Media -NewDataSet.csv")  //10
// fs.createReadStream("adnudging  Fixed  - New2 .csv")  //11
// fs.createReadStream("store-pit-22.10.csv") //12
fs.createReadStream("_[INT] Jes Media - Iteration #2 from Aug_24 delivery - NaUnha.csv")  //13


  .pipe(parse({ delimiter: ",", columns: true }))
  .on("data", function (row) {
    records.push(row);
    setCompletenessValue(row);
  })
  .on("end", () => {
    console.log("Done converting CSV to JSON.");
    console.log("Total records", records.length);
    console.log(
      "completenessReport",
      getCompletenessReport(completenessValues, records)
    );
    const groups = nonWeightScoring.applyScoresToRecords(
      records,
      "applySimpleOrderedStrategy"
    );

    writeCsvToFile(groups);
    printFunnelNumbers(groups);
  });

function writeCsvToFile(groups) {
  console.log("Group 5 (top) isolated length:", groups[5]?.length);
  console.log("Group 4 isolated length:", groups[4]?.length);
  console.log("Group 3 isolated length:", groups[3]?.length);
  console.log("Group 2 isolated length:", groups[2]?.length);
  console.log("Group 1 isolated length:", groups[1]?.length);
  console.log("Group 0 (bottom) isolated length:", groups[0]?.length);

  const flatGroups = json2csv.json2csv([
    ...(groups[0] || []),
    ...(groups[1] || []),
    ...(groups[2] || []),
    ...(groups[3] || []),
    ...(groups[4] || []),
    ...(groups[5] || []),
  ]);
  fs.writeFileSync(`flatGroups.csv`, flatGroups, "utf-8");
}

function printFunnelNumbers(groups) {
  const g5 = groups[5] || [{ matchedOn: [] }];
  const g4 = groups[4] || [{ matchedOn: [] }];
  const g3 = groups[3] || [{ matchedOn: [] }];
  const g2 = groups[2] || [{ matchedOn: [] }];
  const g1 = groups[1] || [{ matchedOn: [] }];
  const g0 = groups[0] || [{ matchedOn: [] }];

  console.log("---------");
  console.log("Funnel (accumulated from top to bottom):");
  console.log(
    `${g5[0].matchedOn.join(" + ")},`,
    g5.length + g4.length + g3.length + g2.length + g1.length + g0.length
  );
  console.log(
    `${g4[0].matchedOn.join(" + ")},`,
    g4.length + g3.length + g2.length + g1.length + g0.length
  );
  console.log(
    `${g3[0].matchedOn.join(" + ")},`,
    g3.length + g2.length + g1.length + g0.length
  );
  console.log(
    `${g2[0].matchedOn.join(" + ")},`,
    g2.length + g1.length + g0.length
  );
  console.log(
    `${g1[0].matchedOn.join(" + ")},`,
     g1.length + g0.length
  );
  console.log(
    `${g0[0].matchedOn.join(" + ")},`, 
    g0.length
  );
}



