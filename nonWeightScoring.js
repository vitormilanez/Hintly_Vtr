const criteriasFunctions = require("./criteriasFunctions");

function applySimpleOrderedStrategy(record, groups = []) {
  const criterias = criteriasFunctions.getCriterias();
  let score = 0;
  let matchedOn = [];

  for (const { fn, label } of criterias) {
    if (!fn(record)) {
      // Create group if needed
      groups[criterias.length - matchedOn.length] ??= [];
      groups[criterias.length - matchedOn.length].push(record);
      record.matchedOn = matchedOn;
      return score;
    }

    score += 100 / criterias.length;
    matchedOn.push(label);
  }

  groups[0] ??= []; // Ensure last segment exists
  groups[0].push(record);
  record.matchedOn = matchedOn;
  return score;
}

// TODO: accept injection of criteria
function applyScoresToRecords(records, approach) {
  let groups = [];
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    record.score = this[approach](record, groups);
  }
  return groups;
}

module.exports = {
  applySimpleOrderedStrategy,
  applyScoresToRecords,
};
