var limits = {
  '2013-09-17T00:00:00Z': 50,
  '2013-09-17T12:00:00Z': 100
};

for(dateString in limits) {
  var limit = limits[dateString];
  var date = new Date(Date.parse(dateString));
  print("Setting team limit to " + limit + " at " + date);

  db.teamlimits.update({ effectiveAt: date }, { $set: { limit: limit }}, true);
}
