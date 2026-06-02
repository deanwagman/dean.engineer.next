export function formatJobMeta(job) {
  return [job.company, job.employmentType, job.location, job.period]
    .filter(Boolean)
    .join(" | ");
}
