// extracting app schema values for account versioning options

Object.keys(domains[session.account.domain_id].versions).map((id) => {
  console.log({
    "active": session.account.version_id === id,
    "title": domains[session.account.domain_id].versions[id].title,
    "description": domains[session.account.domain_id].versions[id].description
  });
});