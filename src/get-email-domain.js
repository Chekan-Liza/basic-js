function getEmailDomain(m) {
  let a = m.split('@');
  return a[a.length-1];
}
